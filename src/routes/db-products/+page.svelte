<!-- Follwoing Code is for Loading Page Data -->

<script>
	import Product from './product.svelte';
	export let data;
	// console.log('Data is', data);
	const products = data.products;
	// const comments = data.products;
</script>

<a href="/">Home Page</a>

<h1>Following is Data Loading</h1>
<h2>{data.title}</h2>
{#each products as product}
	<div>
		<!-- <h2>{product.title}</h2>
		<p>{product.description}</p>
		<span>Price: {product.price}</span>
		<hr /> -->
		<Product {product} />
	</div>
{/each}
<!-- Following is for our own api routes -->
<!-- {#each products as product}
	<div>
		<h2>{product.id}</h2>
		<p>{product.text}</p>

		<hr />
	</div>
{/each} -->
