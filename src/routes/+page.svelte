<!-- Navigating Programatically -->

<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	const handleClick = () => {
		console.log('Order is succesfully placed');
		goto('/products');
	};
	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});
	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<h1>Welcome Home....</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>
<a href="/db-products">DB Load Products</a>
<!-- Navigating Programatically -->
<button on:click={handleClick}>Place Order</button>
