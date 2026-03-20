<script>
	import '$lib/css/docs.css';
	import Header from '$lib/ui/Header.svelte';
	import PdfDock from '$lib/docs/mc/PdfDock.svelte';

	let { children } = $props();
</script>

<div id="pdf" class="">
	<Header />
	<main>
		{@render children()}
	</main>
  <PdfDock />
</div>

<style>
	#pdf {
		margin: 0;
		padding: 0;
		min-height: 100dvh;
		box-sizing: border-box;
    background-color: var(--background);
		color: azure;
	}
</style>
