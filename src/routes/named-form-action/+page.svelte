<script>
	export let form;
	console.log('FORM IS', form);
</script>

<form method="post" action="?/login">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="User Name" value={form?.username ?? ''} />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Named Action Login</button>
	<button formaction="?/register">Named Action Register</button>
</form>
