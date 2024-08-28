<script>
	export let data;
</script>

<span>Most Active Stock: {data?.mostActiveStock?.symbol}</span>
<span>Price: {data?.mostActiveStock?.price}</span>
<hr />
<span>Top Gaining Stock: {data?.topGainingStock?.symbol}</span>
<span>Price: {data?.topGainingStock?.price}</span>
<hr />
<span>Top Losing Stock: {data?.topLosingStock?.symbol}</span>
<span>Price: {data?.topLosingStock?.price}</span>
<hr />
<slot />

<style>
	span {
		margin-right: 30px;
		font-size: 24px;
	}
</style>
