<script>
	export let data;
</script>

<h1>Todays Head Line</h1>

{#each data.news as article}
	<h2>{article.title}</h2>
{/each}

<a href="/">Go Back To Home</a>
