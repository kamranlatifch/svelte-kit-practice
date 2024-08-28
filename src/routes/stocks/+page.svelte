<!-- <script>
	export let data;
	console.log('Data is ', data);
</script>

<span>Most Active Stock: {data?.mostActiveStock?.symbol}</span>
<span>Top Gaining Stock: {data?.topGainingStock?.symbol}</span>
<span>Top Losing Stock: {data?.topLosingStock?.symbol}</span>

<style>
	span {
		margin-right: 30px;
		font-size: 24px;
	}
</style> -->
<script>
	// import { invalidate } from '$app/navigation';
	import { invalidateAll } from '$app/navigation';

	export let data;
	function refresh() {
		// invalidate('http://localhost:4000/stocks');
		// invalidate('stocks:all-stocks-query');
		invalidateAll();
	}
	console.log('Data is ', data);
</script>

<h1>Actively Trading Stocks</h1>

{#each data.stocks as stock}
	<h2>{stock.symbol}-${stock.price}</h2>
{/each}
<button on:click={refresh}>Refresh</button>
