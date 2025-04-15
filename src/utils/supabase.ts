import { createClient } from '@supabase/supabase-js'

// Zugriff auf Umgebungsvariablen über import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('supabaseUrl und supabaseKey sind erforderlich.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
