import { redirect } from '@sveltejs/kit';
export const load = ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/named-form-action?redirectTo=${url.pathname}`);
	}
	const newAPIKey = 'YOUR_API_KEY';

	const news = [
		{ id: 1, title: 'News 1' },
		{ id: 2, title: 'News 2' },
		{ id: 3, title: 'News 3' }
	];

	return { news };
};
