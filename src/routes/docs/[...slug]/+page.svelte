<script>
	import { page } from '$app/stores';
	console.log('SLUG ONES ARE', $page.params.slug);
	const slugArray = $page.params.slug.split('/');
</script>

<h1>Docs Home Page</h1>

{#if slugArray?.length === 1}
	<h1>Viewing Docs for Feature {slugArray[0]}</h1>
{:else if slugArray?.length === 2}
	<h1>Viewing Docs for Feature {slugArray[0]} and concept {slugArray[1]}</h1>
{/if}
