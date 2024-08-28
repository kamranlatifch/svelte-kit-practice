<script>
	export let data;
	const title = data.title;
	const featuredProducts = data.featuredProducts;
	const parentData = data.parentData;
</script>

<slot />
<h2>{title} for {parentData.userName}</h2>

{#each featuredProducts as product}
	<div class="product-item">
		<h2>{product.title}</h2>
		<p>{product.description}</p>
		<p>Price: {product.price}</p>
	</div>
{/each}

<style>
	.product-item {
		display: inline-block;
		width: 200px;
		margin: 10px;
		border: 1px solid #ccc;
		padding: 10px;
		/* height: 100vh; */
	}
</style>
