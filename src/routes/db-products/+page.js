export const load = async (loadEvent) => {
	console.log('Load Function is called in page.js');
	const { fetch } = loadEvent;
	const title = 'List of available products';
	const response = await fetch('http://localhost:4000/products/');
	// const response = await fetch('/api/comments/');
	const notification = 'End of Season Sale';
	const products = await response.json();

	return {
		title,
		products,
		notification
	};
};
