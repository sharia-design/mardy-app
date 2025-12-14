<script>
	import favicon from '$lib/favicon/favicon.svg';
	import '$lib/css/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>№1 რიგის მართვის სისტემა | Mardy</title>
	<meta name="theme-color" content="#6366F1" />
	<meta name="description" content="რიგის მართვის სისტემა | Queue Management System" />
	<meta name="keywords" content="QMS, რიგი, რიგის მართვა" />
	<meta name="author" content="Mardy" />

	<!-- Open Graph / Facebook / LinkedIn -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mardy.app/" />
	<meta property="og:title" content="№1 რიგის მართვის სისტემა | Mardy" />
	<meta property="og:description" content="რიგის მართვის სისტემა | Queue Management System" />
	<meta property="og:image" content="https://mardy.app/img/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Mardy | Queue Management System" />
	<meta property="og:site_name" content="№1 რიგის მართვის სისტემა | Mardy" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://mardy.app/" />
	<meta name="twitter:title" content="№1 რიგის მართვის სისტემა | Mardy" />
	<meta name="twitter:description" content="რიგის მართვის სისტემა | Queue Management System" />
	<meta name="twitter:image" content="https://mardy.app/img/og.png" />
	<meta name="twitter:image:alt" content="Mardy | Queue Management System" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
