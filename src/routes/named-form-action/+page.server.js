import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			// return {
			// 	message: 'Missing Username OR Password for Login'
			// };
			return fail(400, {
				username,
				message: 'Fail Missing Username OR Password for Login'
			});
		}

		cookies.set('username', username, { path: '/' });
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
		// return { message: 'Logged In Successfully' };
	},
	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			// return {
			// 	message: 'Missing Username OR Password for Registration'
			// };
			return fail(400, {
				username,
				message: 'Fail Missing Username OR Password for Register'
			});
		}

		cookies.set('username', username, { path: '/' });
		throw redirect(303, url.searchParams.get('redirectTo') || '/');

		// return { message: 'Registered Successfully' };
	}
};
