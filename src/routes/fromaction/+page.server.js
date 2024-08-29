// export const load=()=>{}
// We commented out above because our focus is to
//create server actions so create actions object

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			return {
				message: 'Missing Username OR Password'
			};
		}

		cookies.set('username', username, { path: '/' });
		return { message: 'Logged In Successfully' };
	}
};
