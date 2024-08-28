import { error } from '@sveltejs/kit';
export const load = async (serverLoadEvent) => {
	const { fetch, params, url, route } = serverLoadEvent;
	const { productId } = params;
	if (productId > 3) {
		throw error(404, {
			message: 'Oh no! Looks like the product is currently unavailable.',
			hint: 'Try a different product'
		});
	}
	const title = 'Product Details';
	const response = await fetch(`http://localhost:4000/products/${productId}`);

	const product = await response.json();
	const notification = 'End of season sale and 50% off';
	return {
		title,
		product,
		notification
	};
};
