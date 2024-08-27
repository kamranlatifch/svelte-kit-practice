<script>
	import { page } from '$app/stores';

	const productId = $page.params.productId;
	console.log('Page Params are', $page.params);
</script>

<h1>Detail About Product {productId}</h1>
