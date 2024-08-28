<script>
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
</style>
