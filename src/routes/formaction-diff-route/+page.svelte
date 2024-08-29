<script>
	export let form;
	console.log('FORM IS', form);
</script>

<form method="post" action="/named-form-action?/login">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="User Name" />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Named Action Login</button>
	<button formaction="/named-form-action?/register">Named Action Register</button>
</form>
