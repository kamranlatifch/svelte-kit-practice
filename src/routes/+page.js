export async function load({ fetch }) {
	console.log('CUREENT TIME GET HANDLER INVOKED');
	const response = await fetch('/api/comments/current-time');
	const currenttime = await response.text();

	return {
		currenttime
	};
}
export const prerender = true;
