<!-- layout.svelte -->
<script>
	import Header from '../lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import { page } from '$app/stores';

	export let data;
	const username = data.userName;
</script>

<svelte:head>
	<title>{$page.data.title || 'Na na an'}</title>
</svelte:head>
<div class="layout-container">
	<Header />

	<main class="layout-content">
		{#if $page.data.notification}
			<p>Parent Notification Banner -childData: {$page.data.notification}</p>
		{/if}
		<div>Welcome {username}</div>
		<slot />
	</main>
	<Footer />
</div>

<style>
	html,
	body {
		height: 100%;
		margin: 0;
	}

	.layout-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.layout-content {
		flex: 1;
	}
</style>
