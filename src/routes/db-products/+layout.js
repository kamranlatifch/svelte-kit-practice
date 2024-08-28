export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	// Use of Parent Data as we will use Username from parent
	const { parent } = loadEvent;
	const parentData = await parent();
	const title = 'Featured Products';
	const response = await fetch('http://localhost:4000/featured-products');
	const featuredProducts = await response.json();
	return {
		title,
		featuredProducts,
		parentData
	};
};
