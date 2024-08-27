<!-- Follwoing Code is for Loading Page Data -->

<script>
	export let data;
	const products = data.products;
</script>

<a href="/">Home Page</a>

<h1>Following is Data Loading</h1>
<h2>{data.title}</h2>
{#each products as product}
	<div>
		<h2>{product.title}</h2>
		<p>{product.description}</p>
		<span>Price: {product.price}</span>
		<hr />
	</div>
{/each}
