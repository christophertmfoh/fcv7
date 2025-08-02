import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL ?? 'https://your-project-ref.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY ?? 'your-anon-public-key-here'

// Create Supabase client with demo-safe defaults
const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		persistSession: false, // Disable session persistence for demo
		autoRefreshToken: false, // Disable auto-refresh for demo
	},
	realtime: {
		enabled: false // Disable realtime for demo
	}
})

export { supabase }