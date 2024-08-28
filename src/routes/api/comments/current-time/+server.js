export async function GET() {
	console.log('CUREENT TIME GET HANDLER INVOKED');

	return new Response(new Date().toLocaleTimeString());
}
export const prerender = true;
