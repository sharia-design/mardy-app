<script>
	import { createClock } from '$lib/tv/clock.svelte.js';

	/**
	 * @type {{
	 *   logo?: string,
	 *   title?: string[],
	 *   primary?: string,
	 *   children: import('svelte').Snippet
	 * }}
	 */
	let { logo = '', title = [], primary = '#1a0d7c', children } = $props();

	const clock = createClock();
</script>

<div class="tv" style:--primary={primary}>
	<header>
		<div class="brand">
			{#if logo}<img src={logo} alt="" class="logo" />{/if}
			<div class="brand-text">
				{#each title as line}<span>{line}</span>{/each}
			</div>
		</div>
		<div class="clock"><span aria-hidden="true">🕒</span>{clock.time}</div>
	</header>

	<div class="body">{@render children()}</div>
</div>

<style>
	.tv {
		font-family: 'Google Sans', sans-serif;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #151515;
		overflow: hidden;
		box-sizing: border-box;
	}
	header {
		background-color: var(--primary);
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1vh 1vw;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 0.5vw;
	}
	.logo {
		height: 4vh;
		width: auto;
	}
	.brand-text {
		display: flex;
		flex-direction: column;
		font-size: 1.1vw;
		line-height: 1.2;
	}
	.clock {
		border: 0.15vw solid #fff;
		padding: 0.5vh 1.5vw;
		font-size: 1.8vw;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 0.5vw;
	}
	.body {
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
	}

	/* Shared by every board: reference as `animation: tv-flash 1s ease-out 10` */
	@keyframes -global-tv-flash {
		0%,
		100% {
			opacity: 1;
		}
		20%,
		30% {
			opacity: 0.1;
		}
		40% {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tv :global(*) {
			animation-iteration-count: 1 !important;
		}
	}
</style>
