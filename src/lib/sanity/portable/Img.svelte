<script>
	import { urlFor } from '$lib/sanity/image';
	let { portableText } = $props();
</script>

<figure class="portable-image">
	<img
		src={urlFor(portableText.value?.asset?._ref).width(1200).fit('max').auto('format').url()}
		alt={portableText.value.alt || ''}
		loading="lazy"
	/>
	{#if portableText.value.alt}
		<figcaption>{portableText.value.alt}</figcaption>
	{/if}
</figure>

<style>
	.portable-image {
		margin: 2.5rem 0;
		width: 100%;
	}
	img {
		width: 100%;
		display: block;
    border: 2px solid var(--stone-blue);
	}
	figcaption {
    margin-top: 4px;
		text-align: center;
		font-size: 0.8rem;
		color: var(--stone-blue);
	}
</style>
