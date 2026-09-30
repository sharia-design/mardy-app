<script>
	import { page } from '$app/state';
	import IndustryTabs from '$lib/tv/IndustryTabs.svelte';
	import { bySlug, defaultIndustry } from '$lib/tv/industries.js';

	let { children } = $props();

	const active = $derived(page.params.industry ?? defaultIndustry);
	const kiosk = $derived(page.url.searchParams.has('kiosk'));
</script>

<svelte:head>
	<title>{bySlug[active].label} · TV</title>
</svelte:head>

<div class="app">
	{#if !kiosk}<IndustryTabs {active} />{/if}
	<div class="stage">{@render children()}</div>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #151515;
	}
	.app {
		height: 100dvh;
		display: flex;
		flex-direction: column;
	}
	.stage {
		flex: 1;
		min-height: 0;
	}
</style>