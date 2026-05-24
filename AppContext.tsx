import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ViewState, User } from './types';
import { supabase } from './lib/supabase';

interface AppContextType {
  view: ViewState;
  setView: (view: ViewState) => void;
  isDark: boolean;
  toggleTheme: () => void;
  currentUser: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  selectedSpecId: string | null;
  setSelectedSpecId: (id: string | null) => void;
  selectedSoftSkillId: string | null;
  setSelectedSoftSkillId: (id: string | null) => void;
  savedJobs: Set<string>;
  toggleSaveJob: (id: string) => void;
  userSkills: Set<string>;
  toggleUserSkill: (skill: string) => void;
  roadmapProgress: Record<string, number>;
  updateRoadmapProgress: (specId: string, level: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  jobFilter: string;
  setJobFilter: (filter: string) => void;
  locationFilter: string;
  setLocationFilter: (filter: string) => void;
  lastQuizScore: number | null;
  setLastQuizScore: (score: number) => void;
  navigate: (view: ViewState, params?: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [view, setView] = useState<ViewState>('home');
  const [isDark, setIsDark] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedSpecId, setSelectedSpecId] = useState<string | null>(null);
  const [selectedSoftSkillId, setSelectedSoftSkillId] = useState<string | null>(null);

  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [userSkills, setUserSkills] = useState<Set<string>>(new Set());
  const [roadmapProgress, setRoadmapProgress] = useState<Record<string, number>>({});

  const [searchTerm, setSearchTerm] = useState('');
  const [jobFilter, setJobFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [lastQuizScore, setLastQuizScore] = useState<number | null>(null);

  // ─── Dark Mode ───────────────────────────────────────────────
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // ─── Supabase Auth State Listener ───────────────────────────
  useEffect(() => {
    // Check existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const u = session.user;
        const name = u.user_metadata?.full_name || u.email?.split('@')[0] || 'User';
        setCurrentUser({ email: u.email!, name, isAuthenticated: true });
        loadUserData(u.id);
      }
    });

    // Listen for auth changes (sign in, sign out, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const u = session.user;
        const name = u.user_metadata?.full_name || u.email?.split('@')[0] || 'User';
        setCurrentUser({ email: u.email!, name, isAuthenticated: true });
        loadUserData(u.id);
      } else {
        setCurrentUser(null);
        setSavedJobs(new Set());
        setRoadmapProgress({});
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // ─── Load User Data from Supabase ───────────────────────────
  const loadUserData = async (userId: string) => {
    // Load saved jobs
    const { data: jobsData } = await supabase
      .from('saved_jobs')
      .select('job_id')
      .eq('user_id', userId);

    if (jobsData) {
      setSavedJobs(new Set(jobsData.map(row => row.job_id)));
    }

    // Load roadmap progress
    const { data: progressData } = await supabase
      .from('roadmap_progress')
      .select('spec_id, level')
      .eq('user_id', userId);

    if (progressData) {
      const progressMap: Record<string, number> = {};
      progressData.forEach(row => { progressMap[row.spec_id] = row.level; });
      setRoadmapProgress(progressMap);
    }
  };

  // ─── Auth Methods ────────────────────────────────────────────
  // Legacy shim used by Login.tsx for the mock path (now unused, kept for type compat)
  const login = (email: string, name: string) => {
    setCurrentUser({ email, name, isAuthenticated: true });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setSavedJobs(new Set());
    setRoadmapProgress({});
    setView('home');
  };

  // ─── Saved Jobs (Supabase) ───────────────────────────────────
  const toggleSaveJob = async (id: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    const userId = session?.user?.id;

    const newSet = new Set(savedJobs);

    if (newSet.has(id)) {
      newSet.delete(id);
      if (userId) {
        await supabase.from('saved_jobs').delete().eq('user_id', userId).eq('job_id', id);
      }
    } else {
      newSet.add(id);
      if (userId) {
        await supabase.from('saved_jobs').insert({ user_id: userId, job_id: id });
      }
    }
    setSavedJobs(newSet);
  };

  // ─── Roadmap Progress (Supabase) ─────────────────────────────
  const updateRoadmapProgress = async (specId: string, level: number) => {
    const newProgress = { ...roadmapProgress, [specId]: level };
    setRoadmapProgress(newProgress);

    const { data: { session } } = await supabase.auth.getSession();
    const userId = session?.user?.id;

    if (userId) {
      await supabase.from('roadmap_progress').upsert(
        { user_id: userId, spec_id: specId, level, updated_at: new Date().toISOString() },
        { onConflict: 'user_id,spec_id' }
      );
    }
  };

  // ─── User Skills (local only, no DB needed) ──────────────────
  const toggleUserSkill = (skill: string) => {
    const newSet = new Set(userSkills);
    if (newSet.has(skill)) newSet.delete(skill);
    else newSet.add(skill);
    setUserSkills(newSet);
  };

  // ─── Navigation ──────────────────────────────────────────────
  const navigate = (newView: ViewState, params: any = {}) => {
    if (view === 'jobs' && newView !== 'jobs' && newView !== 'detail') {
      setSearchTerm('');
      setJobFilter('All');
      setLocationFilter('All');
      setUserSkills(new Set());
    }

    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (params.courseId) setSelectedCourseId(params.courseId);
    if (params.specId) setSelectedSpecId(params.specId);
    if (params.softSkillId) setSelectedSoftSkillId(params.softSkillId);

    if (newView === 'home') {
      setSelectedCourseId(null);
      setSelectedSpecId(null);
      setSelectedSoftSkillId(null);
    }
  };

  return (
    <AppContext.Provider value={{
      view, setView,
      isDark, toggleTheme,
      currentUser, login, logout,
      selectedCourseId, setSelectedCourseId,
      selectedSpecId, setSelectedSpecId,
      selectedSoftSkillId, setSelectedSoftSkillId,
      savedJobs, toggleSaveJob,
      userSkills, toggleUserSkill,
      roadmapProgress, updateRoadmapProgress,
      searchTerm, setSearchTerm,
      jobFilter, setJobFilter,
      locationFilter, setLocationFilter,
      lastQuizScore, setLastQuizScore,
      navigate
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};