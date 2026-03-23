<script>
	let { children, portableText } = $props();
	
	const listItemStyle = $derived(portableText?.listItem);
</script>

{#if listItemStyle === 'bullet'}
	<li class="bullet">
		{@render children?.()}
	</li>
{:else if listItemStyle === 'number'}
	<li class="number">
		{@render children?.()}
	</li>
{:else}
	<li class="normal">
		{@render children?.()}
	</li>
{/if}

<style>
	.bullet {
		list-style-type: disc;
		margin-left: 1.5rem;
	}
  
	.number {
    list-style-type: decimal;
		margin-left: 1.5rem;
	}
  .normal {
    list-style-type: square;
  }

	li {
		line-height: 1.6;
	}
</style>
