<script>
	export let data;
	const product = data.product;
	console.log('Data is', data);
</script>

<a href="/">Home Page</a>

<h1>{data.title}</h1>
<div>
	<h2>{product.title}</h2>
	<p>{product.description}</p>
	<span>Price: {product.price}</span>
</div>
