<script>
	let username = '';
	let password = '';
	let message = '';

	const handleSubmit = async () => {
		message = '';
		const response = await fetch('/fromaction', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});
		const data = await response.json();
		message = data.message;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<p>{message}</p>
	<input type="text" name="username" placeholder="User Name" bind:value={username} />
	<input type="password" name="password" placeholder="Password" bind:value={password} />
	<button type="submit">Login</button>
</form>
