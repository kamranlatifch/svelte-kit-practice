// export const load = async (loadEvent) => {
// 	const { fetch } = loadEvent;
// 	const moastActiveStockResponse = await fetch('http://localhost:4000/most-active-stock');
// 	const topGainingStockResponse = await fetch('http://localhost:4000/top-gaining-stock');
// 	const topLosingStcokResponse = await fetch('http://localhost:4000/top-losing-stock');

// 	const mostActiveStock = await moastActiveStockResponse.json();
// 	const topGainingStock = await topGainingStockResponse.json();
// 	const topLosingStock = await topLosingStcokResponse.json();
// 	return {
// 		mostActiveStock,
// 		topGainingStock,
// 		topLosingStock
// 	};
// };

export const load = async (loadEvent) => {
	const { fetch, depends } = loadEvent;
	depends('stocks:all-stocks-query');
	const response = await fetch('http://localhost:4000/stocks');

	const stocks = await response.json();
	return {
		stocks
	};
};
