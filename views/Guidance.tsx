import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { useApp } from '../AppContext';
import { CLASS10_STREAMS, CLASS12_PATHS, COLLEGE_DOMAINS } from '../guidanceData';

type GuidanceView = 'hub' | 'class10' | 'class12' | 'college';
type Class12Stream = 'science' | 'commerce' | 'arts' | null;

// ─── SHARED BACK BUTTON ───────────────────────────────────────

const BackButton: React.FC<{ onClick: () => void; label?: string }> = ({ onClick, label = 'Back' }) => (
    <button
        onClick={onClick}
        className="mb-8 md:mb-12 px-6 py-2 border-2 border-black bg-white shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_#000] transition-all font-bold flex items-center gap-2 dark:bg-white/5 dark:text-white dark:border-white/10 dark:shadow-none dark:rounded-full dark:hover:bg-white/10"
    >
        <ArrowLeft className="w-4 h-4" /> {label}
    </button>
);

// ─── GUIDANCE HUB ────────────────────────────────────────────

const GuidanceHub: React.FC<{ onSelect: (v: GuidanceView) => void }> = ({ onSelect }) => {
    const { navigate } = useApp();

    const options = [
        {
            id: 'class10' as GuidanceView,
            icon: BookOpen,
            label: 'Class 10',
            tagline: 'Choose your stream',
            desc: 'Science, Commerce, or Arts — understand what each stream means for your future before you commit.',
            color: 'bg-pop-blue',
            darkColor: 'dark:border-blue-500/30',
        },
        {
            id: 'class12' as GuidanceView,
            icon: GraduationCap,
            label: 'Class 12',
            tagline: 'Pick your career path',
            desc: 'Explore degree options, career roles, and what each path really looks like after school.',
            color: 'bg-pop-green',
            darkColor: 'dark:border-emerald-500/30',
        },
        {
            id: 'college' as GuidanceView,
            icon: Briefcase,
            label: 'College',
            tagline: 'Specialise & launch',
            desc: 'Discover the four major career domains and find where your skills and interests align.',
            color: 'bg-pop-yellow',
            darkColor: 'dark:border-amber-500/30',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 relative z-10">
            <button
                onClick={() => navigate('home')}
                className="mb-8 md:mb-12 px-6 py-2 border-2 border-black bg-white shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_#000] transition-all font-bold flex items-center gap-2 dark:bg-white/5 dark:text-white dark:border-white/10 dark:shadow-none dark:rounded-full dark:hover:bg-white/10"
            >
                <ArrowLeft className="w-4 h-4" /> Home
            </button>

            <div className="mb-12 md:mb-16">
                <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] mb-6 dark:bg-white/5 dark:border-white/20 dark:shadow-none dark:rounded-full dark:backdrop-blur-md">
                    <span className="w-3 h-3 bg-black dark:bg-nebula-teal rounded-full"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">Career Guidance Hub</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-4 uppercase font-brutal dark:font-sans leading-tight">
                    WHERE ARE YOU<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black dark:from-nebula-teal dark:to-nebula-gold">
                        RIGHT NOW?
                    </span>
                </h2>
                <p className="text-lg md:text-xl font-bold text-gray-600 dark:text-gray-400 dark:font-normal max-w-2xl">
                    Personalised career guidance based on your current education stage. Select the level that matches you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.map((opt) => {
                    const Icon = opt.icon;
                    return (
                        <div
                            key={opt.id}
                            onClick={() => onSelect(opt.id)}
                            className={`card-base p-8 cursor-pointer group flex flex-col justify-between min-h-[280px] ${opt.darkColor}`}
                        >
                            <div>
                                <div className={`w-14 h-14 ${opt.color} border-2 border-black dark:bg-white/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#000] dark:shadow-none`}>
                                    <Icon className="w-7 h-7 text-black dark:text-white" />
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">{opt.tagline}</p>
                                <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-4 uppercase font-brutal dark:font-sans group-hover:underline decoration-2 underline-offset-4">
                                    {opt.label}
                                </h3>
                                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 dark:font-normal leading-relaxed">{opt.desc}</p>
                            </div>
                            <div className="mt-8 pt-6 border-t-2 border-dashed border-black dark:border-white/10 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Explore Guide</span>
                                <ArrowLeft className="w-5 h-5 rotate-180 text-black dark:text-white" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// ─── CLASS 10 GUIDE ──────────────────────────────────────────

const Class10Guide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('science');
    const stream = CLASS10_STREAMS.find((s) => s.id === activeTab)!;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 relative z-10">
            <BackButton onClick={onBack} />

            <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Class 10 Guide</p>
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-4">
                    Choose Your Stream
                </h2>
                <p className="text-base md:text-lg font-bold text-gray-600 dark:text-gray-400 dark:font-normal max-w-2xl">
                    The stream you pick after Class 10 shapes the next decade of your life. Make it an informed choice.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b-2 border-black dark:border-white/10 mb-10 overflow-x-auto pb-0">
                {CLASS10_STREAMS.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => setActiveTab(s.id)}
                        className={`px-5 py-3 text-sm font-black uppercase tracking-wider border-b-4 transition-all whitespace-nowrap -mb-[2px] ${activeTab === s.id
                                ? 'border-black text-black dark:border-nebula-teal dark:text-nebula-teal'
                                : 'border-transparent text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                            }`}
                    >
                        {s.name}
                    </button>
                ))}
            </div>

            {/* Stream Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Overview */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="card-base p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-3">
                            {stream.name}
                        </h3>
                        <p className="text-sm md:text-base font-bold text-gray-600 dark:text-gray-400 dark:font-normal leading-relaxed mb-6">
                            {stream.description}
                        </p>

                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Key Subjects</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {stream.subjects.map((sub) => (
                                <span key={sub} className="px-3 py-1 text-xs font-bold uppercase border-2 border-black dark:border-white/10 bg-gray-50 dark:bg-white/5 text-black dark:text-gray-300 dark:rounded-md">
                                    {sub}
                                </span>
                            ))}
                        </div>

                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Top Career Options</p>
                        <div className="flex flex-wrap gap-2">
                            {stream.careers.map((c) => (
                                <span key={c} className="px-3 py-1 text-xs font-bold border-2 border-black bg-pop-yellow dark:bg-nebula-teal/20 dark:border-nebula-teal/30 text-black dark:text-nebula-teal dark:rounded-md">
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="card-base p-6">
                            <h4 className="text-sm font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Pros
                            </h4>
                            <ul className="space-y-2">
                                {stream.pros.map((p) => (
                                    <li key={p} className="flex gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 dark:font-normal leading-snug">
                                        <span className="text-emerald-500 mt-0.5 shrink-0">✓</span> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-base p-6">
                            <h4 className="text-sm font-black uppercase tracking-wider text-red-500 dark:text-red-400 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span> Cons
                            </h4>
                            <ul className="space-y-2">
                                {stream.cons.map((c) => (
                                    <li key={c} className="flex gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 dark:font-normal leading-snug">
                                        <span className="text-red-400 mt-0.5 shrink-0">✗</span> {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right: Future Scope + Tips */}
                <div className="space-y-6">
                    <div className="card-base p-6">
                        <h4 className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                            <span className="text-nebula-teal dark:text-nebula-teal">◆</span> Future Scope
                        </h4>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 dark:font-normal leading-relaxed">
                            {stream.futureScope}
                        </p>
                    </div>

                    <div className="card-base p-6">
                        <h4 className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                            💡 Quick Tips
                        </h4>
                        <ul className="space-y-3">
                            {stream.quickTips.map((tip, i) => (
                                <li key={i} className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-300 dark:font-normal leading-snug">
                                    <span className="text-amber-500 font-black shrink-0">{i + 1}.</span> {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── CLASS 12 GUIDE ──────────────────────────────────────────

const Class12Guide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [selectedStream, setSelectedStream] = useState<Class12Stream>(null);

    const streamOptions = [
        { id: 'science' as const, label: 'Science', emoji: '⚗️', color: 'bg-pop-blue', desc: 'Engineering, Medical, Pure Sciences' },
        { id: 'commerce' as const, label: 'Commerce', emoji: '📈', color: 'bg-pop-yellow', desc: 'Finance, Management, CA' },
        { id: 'arts' as const, label: 'Arts / Humanities', emoji: '🎨', color: 'bg-pop-green', desc: 'Law, Design, Psychology' },
    ];

    if (selectedStream) {
        const paths = CLASS12_PATHS[selectedStream];
        const streamLabel = streamOptions.find((s) => s.id === selectedStream)?.label;

        return (
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 relative z-10">
                <BackButton onClick={() => setSelectedStream(null)} label={`Back to Streams`} />

                <div className="mb-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Class 12 — {streamLabel}</p>
                    <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-4">
                        Career Paths
                    </h2>
                    <p className="text-base font-bold text-gray-600 dark:text-gray-400 dark:font-normal">
                        Explore the main degree and career routes available after Class 12 {streamLabel}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paths.map((path) => (
                        <div key={path.id} className="card-base p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-1">
                                    {path.name}
                                </h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-5 border-b-2 border-dashed border-black dark:border-white/10 pb-4">
                                    {path.degree}
                                </p>

                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Career Roles</p>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {path.roles.map((r) => (
                                        <span key={r} className="px-2.5 py-1 text-[10px] font-bold uppercase border border-black dark:border-white/10 bg-gray-50 dark:bg-white/5 text-black dark:text-gray-300 dark:rounded-md">
                                            {r}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">Pros</p>
                                        <ul className="space-y-1">
                                            {path.pros.map((p) => (
                                                <li key={p} className="flex gap-2 text-xs font-bold text-gray-600 dark:text-gray-400 dark:font-normal">
                                                    <span className="text-emerald-500 shrink-0">+</span> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-red-500 dark:text-red-400 mb-1.5">Cons</p>
                                        <ul className="space-y-1">
                                            {path.cons.map((c) => (
                                                <li key={c} className="flex gap-2 text-xs font-bold text-gray-600 dark:text-gray-400 dark:font-normal">
                                                    <span className="text-red-400 shrink-0">−</span> {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 relative z-10">
            <BackButton onClick={onBack} />

            <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Class 12 Guide</p>
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-4">
                    Select Your Stream
                </h2>
                <p className="text-base font-bold text-gray-600 dark:text-gray-400 dark:font-normal max-w-2xl">
                    Your Class 12 stream determines the degree options and career paths available to you. Pick the one you're in.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {streamOptions.map((opt) => (
                    <div
                        key={opt.id}
                        onClick={() => setSelectedStream(opt.id)}
                        className="card-base p-8 cursor-pointer group flex flex-col items-center text-center"
                    >
                        <div className={`w-16 h-16 ${opt.color} border-2 border-black dark:bg-white/5 dark:border-white/10 flex items-center justify-center mb-5 text-3xl shadow-[4px_4px_0px_0px_#000] dark:shadow-none`}>
                            {opt.emoji}
                        </div>
                        <h3 className="text-2xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-2 group-hover:underline decoration-2 underline-offset-4">
                            {opt.label}
                        </h3>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 dark:font-normal">{opt.desc}</p>
                        <div className="mt-6 pt-4 border-t-2 border-dashed border-black dark:border-white/10 w-full flex items-center justify-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">View Paths</span>
                            <ArrowLeft className="w-4 h-4 rotate-180 text-black dark:text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ─── COLLEGE GUIDE ───────────────────────────────────────────

const CollegeGuide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggle = (id: string) => setExpandedId(expandedId === id ? null : id);

    const colorMap: Record<string, string> = {
        blue: 'bg-pop-blue dark:bg-blue-900/20 dark:border-blue-500/30',
        amber: 'bg-pop-yellow dark:bg-amber-900/20 dark:border-amber-500/30',
        emerald: 'bg-pop-green dark:bg-emerald-900/20 dark:border-emerald-500/30',
        rose: 'bg-neo-rose dark:bg-rose-900/20 dark:border-rose-500/30',
    };

    return (
        <div className="max-w-5xl mx-auto px-4 md:px-12 py-24 md:py-32 relative z-10">
            <BackButton onClick={onBack} />

            <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">College Guide</p>
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans mb-4">
                    Choose Your Domain
                </h2>
                <p className="text-base font-bold text-gray-600 dark:text-gray-400 dark:font-normal max-w-2xl">
                    College is the time to specialise. Explore the four major career domains and see where you belong.
                </p>
            </div>

            <div className="space-y-4">
                {COLLEGE_DOMAINS.map((domain) => {
                    const isOpen = expandedId === domain.id;
                    return (
                        <div key={domain.id} className="card-base overflow-hidden">
                            {/* Header Row */}
                            <button
                                onClick={() => toggle(domain.id)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 border-2 border-black ${colorMap[domain.color]} dark:border-white/10 flex items-center justify-center text-2xl shadow-[3px_3px_0px_0px_#000] dark:shadow-none shrink-0`}>
                                        {domain.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase font-brutal dark:font-sans group-hover:underline decoration-2 underline-offset-4">
                                            {domain.name}
                                        </h3>
                                        <p className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 dark:font-normal">{domain.tagline}</p>
                                    </div>
                                </div>
                                {isOpen
                                    ? <ChevronUp className="w-5 h-5 text-black dark:text-white shrink-0" />
                                    : <ChevronDown className="w-5 h-5 text-black dark:text-white shrink-0" />
                                }
                            </button>

                            {/* Expanded Content */}
                            {isOpen && (
                                <div className="px-6 md:px-8 pb-8 border-t-2 border-dashed border-black dark:border-white/10 pt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Left: Skills + Roles */}
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Core Skills to Build</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {domain.skills.map((s) => (
                                                        <span key={s} className="px-3 py-1 text-xs font-bold border-2 border-black dark:border-white/10 bg-gray-50 dark:bg-white/5 text-black dark:text-gray-300 dark:rounded-md">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Career Roles</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {domain.roles.map((r) => (
                                                        <span key={r} className="px-3 py-1 text-xs font-bold border-2 border-black bg-pop-yellow dark:bg-nebula-teal/20 dark:border-nebula-teal/30 text-black dark:text-nebula-teal dark:rounded-md">
                                                            {r}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Pros + Cons */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">Pros</p>
                                                <ul className="space-y-2">
                                                    {domain.pros.map((p) => (
                                                        <li key={p} className="flex gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 dark:font-normal leading-snug">
                                                            <span className="text-emerald-500 shrink-0 mt-0.5">✓</span> {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-red-500 dark:text-red-400 mb-3">Cons</p>
                                                <ul className="space-y-2">
                                                    {domain.cons.map((c) => (
                                                        <li key={c} className="flex gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 dark:font-normal leading-snug">
                                                            <span className="text-red-400 shrink-0 mt-0.5">✗</span> {c}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// ─── MAIN GUIDANCE VIEW ──────────────────────────────────────

const Guidance: React.FC = () => {
    const [guidanceView, setGuidanceView] = useState<GuidanceView>('hub');

    switch (guidanceView) {
        case 'class10':
            return <Class10Guide onBack={() => setGuidanceView('hub')} />;
        case 'class12':
            return <Class12Guide onBack={() => setGuidanceView('hub')} />;
        case 'college':
            return <CollegeGuide onBack={() => setGuidanceView('hub')} />;
        default:
            return <GuidanceHub onSelect={setGuidanceView} />;
    }
};

export default Guidance;
