import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIn0.placeholder';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    console.warn(
        '[Supabase] Warning: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing in environment. Using fallback credentials.'
    );
}

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
        auth: {
            flowType: 'pkce', // Proof Key for Code Exchange (more secure flow)
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
);
