import { supabase } from '../supabase'

export default defineEventHandler(async () => {
	try {
		// Make a fetch to Supabase to get data
		const { data, error } = await supabase
			.from('my_table')
			.select()
		
		if (error) {
			console.warn('Supabase query error (expected for demo):', error.message);
			return { 
				data: null, 
				error: null,
				message: 'Demo mode: Create a table named "my_table" in your Supabase database to see data here.' 
			};
		}
		
		return { data, error };
	} catch (err) {
		console.warn('Supabase connection error (expected for demo):', err);
		return { 
			data: null, 
			error: null,
			message: 'Demo mode: Update .env with your real Supabase credentials to connect to your database.' 
		};
	}
})