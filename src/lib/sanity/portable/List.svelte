<script>
	let { children, portableText, value } = $props();

	// ვიღებთ მონაცემებს (Svelte 5-ის შესაბამისად)
	const data = $derived(portableText || value);
	const isNumber = $derived(data?.type === 'number');
</script>

{#if isNumber}
	<ol>
		{@render children?.()}
	</ol>
{:else}
	<ul>
		{@render children?.()}
	</ul>
{/if}

<style>
	ul {
		padding-left: 1.2rem;
		margin: 0.5rem 0;
		list-style-type: square !important;
	}

	ol {
		padding-left: 1.2rem;
		margin: 0.5rem 0;
		padding: 1rem;
		border-radius: 8px;
	}
</style>
