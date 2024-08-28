<script>
	export let product;
</script>

<h2>{product.title}</h2>
<p>{product.description}</p>
<span>Price: {product.price}</span>

<a href={`/db-products/${product.id}`}>View</a>
<hr />
