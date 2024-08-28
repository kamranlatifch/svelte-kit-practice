<!-- layout.svelte -->
<script>
	import Header from '../lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	export let data;
	const username = data.userName;
</script>

<div class="layout-container">
	<Header />
	<main class="layout-content">
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
