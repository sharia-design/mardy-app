<script>
	import TvFrame from '$lib/tv/TvFrame.svelte';
	import { autoscroll } from '$lib/tv/autoscroll.js';

	let {
		ready = [
			{ code: 'GE-48213', window: '2', flash: true },
			{ code: 'GE-48187', window: '1', flash: true },
			{ code: 'GE-48120', window: '3' },
			{ code: 'GE-48099', window: '4' }
		],
		arrived = [
			{ code: 'GE-48301', shelf: 'A3' },
			{ code: 'GE-48302', shelf: 'A4' },
			{ code: 'GE-48305', shelf: 'B1' },
			{ code: 'GE-48311', shelf: 'B2' },
			{ code: 'GE-48317', shelf: 'B4' },
			{ code: 'GE-48320', shelf: 'C1' },
			{ code: 'GE-48326', shelf: 'C2' },
			{ code: 'GE-48331', shelf: 'C5' },
			{ code: 'GE-48338', shelf: 'D1' }
		]
	} = $props();
</script>

<TvFrame title={['ამანათები', 'გაცემის პუნქტი / Pickup point']} primary="#6f4318">
	<main>
		<section class="ready">
			<h2>გასაცემად მზადაა <small>Ready for pickup</small></h2>
			<div class="cols"><span>კოდი</span><span>ფანჯარა</span></div>
			<ul>
				{#each ready as p (p.code)}
					<li class:flash={p.flash}>
						<span class="code">{p.code}</span>
						<span class="slot">{p.window}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section class="arrived">
			<h2>დღეს მოვიდა <small>Arrived today</small></h2>
			<div class="cols"><span>კოდი</span><span>თარო</span></div>
			<ul {@attach autoscroll()}>
				{#each arrived as p (p.code)}
					<li>
						<span class="code">{p.code}</span>
						<span class="slot">{p.shelf}</span>
					</li>
				{/each}
			</ul>
		</section>
	</main>
</TvFrame>

<style>
	main {
		--box: #6f4318;
		--tape: #f2c879;
		--paper: #fbf3e2;

		flex: 1;
		min-height: 0;
		display: grid;
		grid-template-columns: 3fr 2fr;
		color: var(--box);
	}
	section {
		display: flex;
		flex-direction: column;
		min-height: 0;
	}
	section.ready {
		background: var(--tape);
		border-right: 0.3vw solid var(--box);
	}
	section.arrived {
		background: var(--paper);
	}
	h2 {
		margin: 0;
		padding: 1.5vh 0;
		text-align: center;
		font-size: 2.4vw;
		font-weight: 900;
	}
	h2 small {
		display: block;
		font-size: 1.2vw;
		font-weight: 600;
		opacity: 0.75;
	}
	.cols {
		display: flex;
		justify-content: space-between;
		padding: 1vh 2vw;
		font-size: 1.2vw;
		font-weight: 700;
		border-top: 2px solid var(--box);
		border-bottom: 2px solid var(--box);
	}
	ul {
		flex: 1;
		min-height: 0;
		margin: 0;
		padding: 0;
		list-style: none;
		overflow-y: auto;
		scrollbar-width: none;
	}
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.2vh 2vw;
		border-bottom: 1px solid color-mix(in srgb, var(--box) 30%, transparent);
	}
	.code {
		font-size: 2.6vw;
		font-weight: 800;
		font-variant-numeric: tabular-nums;
	}
	.slot {
		min-width: 5vw;
		text-align: center;
		background: var(--box);
		color: var(--tape);
		font-size: 3vw;
		font-weight: 900;
		padding: 0 1vw;
	}
	li.flash > span {
		animation: tv-flash 1s ease-out 10;
	}
	.arrived .code {
		font-size: 2vw;
	}
	.arrived .slot {
		font-size: 2.2vw;
	}
</style>
