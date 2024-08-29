<!-- Navigating Programatically -->

<script>
	import { goto, invalidateAll, preloadData, beforeNavigate, afterNavigate } from '$app/navigation';

	export let data;
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
	// setTimeout(() => {
	// 	invalidateAll();
	// }, 1000);
</script>

<h1 class="tall">Welcome Home @ {data.currenttime}</h1>
<div class="main">
	<a href="/blog">Blog</a>
	<a href="/products" data-sveltekit-preload-data="hover">Pre-load-data: Products</a>
	<a href="/db-products" data-sveltekit-preload-code="hover">DB PreLoad-code Products</a>
	<a href="/stocks" data-sveltekit-reload>Stocks Reload</a>
	<a href="/db-products" data-sveltekit-noscroll="true">DB No Scroll Products</a>

	<a href="/fromaction" data-sveltekit-noscroll="true">Form Action Login</a>
	<a href="/named-form-action" data-sveltekit-noscroll="true">Named Form Action Login</a>
	<a href="/contact">Contact </a>
	<!-- Navigating Programatically -->
	<button class="button" on:click={handleClick}>Place Order</button>

	<!-- Preload Programatically -->

	<button
		class="button"
		on:focus={async () => {
			await preloadData('/db-products');
		}}
		on:mouseover={async () => {
			await preloadData('/db-products');
		}}
		on:click={() => {
			goto('/db-products');
		}}>Preload Prog DB Products</button
	>

	<button
		class="button"
		on:focus={async () => {
			await preloadData('/news');
		}}
		on:mouseover={async () => {
			await preloadData('/news');
		}}
		on:click={() => {
			goto('/news');
		}}
		>News
	</button>
</div>

<style>
	/* .tall {
		height: 100vh;
	} */
	.main {
		display: grid;
		width: 50%;
		background-color: aquamarine;
		padding: 10px;
		margin: 10px;
		gap: 10px;
		border-radius: 20px;
		justify-content: center;
	}
	.button {
		border-radius: 10px;
		height: 50px;
	}
</style>
