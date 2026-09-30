<script>
	import { industries } from '$lib/tv/industries.js';

	/** @type {{ active: string }} */
	let { active } = $props();
</script>

<nav class="tabs" aria-label="TV board">
	<ul>
		{#each industries as item (item.slug)}
			<li>
				<a
					href="/tv/{item.slug}"
					class:active={item.slug === active}
					aria-current={item.slug === active ? 'page' : undefined}
					data-sveltekit-preload-data="hover"
				>
					<span aria-hidden="true">{item.icon}</span>
					{item.label}
					<small>{item.labelKa}</small>
				</a>
			</li>
		{/each}
	</ul>
	<a class="kiosk" href="?kiosk" title="Hide this bar (remove ?kiosk from the URL to bring it back)">
		Full screen
	</a>
	<a class="kiosk" href="/" target="_blank" title="Hide this bar (remove ?kiosk from the URL to bring it back)">
		Home page - MARDY
	</a>
</nav>

<style>
	.tabs {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 6px 12px;
		background: #0e0e10;
		border-bottom: 1px solid #2a2a2e;
		font-family: 'Google Sans', system-ui, sans-serif;
	}
	ul {
		display: flex;
		gap: 6px;
		margin: 0;
		padding: 0;
		list-style: none;
		overflow-x: auto;
		scrollbar-width: none;
	}
	a {
		display: flex;
		align-items: baseline;
		gap: 6px;
		padding: 7px 14px;
		border-radius: 8px;
		color: #b9b9c0;
		text-decoration: none;
		font-size: 14px;
		font-weight: 600;
		white-space: nowrap;
	}
	a:hover {
		background: #1c1c20;
		color: #fff;
	}
	a:focus-visible {
		outline: 2px solid #ffe92d;
		outline-offset: 2px;
	}
	a.active {
		background: #ffe92d;
		color: #1a0d7c;
	}
	small {
		font-size: 12px;
		font-weight: 500;
		opacity: 0.7;
	}
	.kiosk {
		font-size: 13px;
		border: 1px solid #2a2a2e;
		flex: none;
	}
</style>
