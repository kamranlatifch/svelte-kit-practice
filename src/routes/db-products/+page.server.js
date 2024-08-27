export const load = async (serverLoadEvent) => {
	console.log('Load Function is called in Server page.js');
	const { fetch } = serverLoadEvent;
	const title = 'List of available products';
	const response = await fetch('http://localhost:4000/products/');
	// const response = await fetch('/api/comments/');

	const products = await response.json();

	return {
		title,
		products
	};
};
