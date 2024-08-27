<script>
	import { page } from '$app/stores';
	const { productId, reviewId } = $page.params;

	console.log('Page Params are', $page.params);
</script>

<h1>Product {productId} and review {reviewId}</h1>
