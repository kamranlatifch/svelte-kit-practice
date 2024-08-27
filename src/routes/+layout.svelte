<!-- Main Layout Component -->
<main class="layout-container">
	<header class="layout-header">Header</header>
	<main class="layout-content">
		<slot />
	</main>
	<footer class="layout-footer">Footer</footer>
</main>

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

	.layout-header {
		background-color: #264653;
		color: #f4a261;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}

	.layout-content {
		flex: 1;
		text-align: center;
	}

	.layout-footer {
		background-color: #264653;
		color: #f4a261;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>
