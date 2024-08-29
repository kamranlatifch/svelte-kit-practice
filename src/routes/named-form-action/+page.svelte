<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let form;

	const redirectTo = $page?.url?.searchParams?.get('redirectTo') || '/';
	console.log('FORM IS', form);
	console.log('Redirect to is'.redirectTo);
</script>

<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="User Name" value={form?.username ?? ''} />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Named Action Login</button>
	<button formaction="?/register&redirectTo={redirectTo}">Named Action Register</button>
</form>
