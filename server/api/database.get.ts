export default defineEventHandler(async () => {
	// Check if Supabase is configured
	if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
		return { 
			data: null, 
			error: null,
			message: 'Supabase not configured. Add SUPABASE_URL and SUPABASE_KEY to .env file if you want to use Supabase.' 
		};
	}

	// Import here to avoid issues when Supabase is not configured
	const { supabase } = await import('../supabase');
	
	// Make a fetch to Supabase to get data
	const { data, error } = await supabase
		.from('my_table')
		.select()
	return { data, error };
})