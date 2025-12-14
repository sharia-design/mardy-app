<script>
	import favicon from '$lib/favicon/favicon.svg';
	import '$lib/css/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>№1 რიგის მართვის სისტემა | Mardy</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
