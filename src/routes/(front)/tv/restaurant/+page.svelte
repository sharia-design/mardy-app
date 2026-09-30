<script>
	import TvFrame from '$lib/tv/TvFrame.svelte';
	import { autoscroll } from '$lib/tv/autoscroll.js';

	let {
		seating = [
			{ name: 'გიორგი კ.', table: '12', flash: true },
			{ name: 'Nino M.', table: '7', flash: true },
			{ name: 'Tamar B.', table: '4' },
			{ name: 'Lasha D.', table: '9' }
		],
		waiting = [
			{ name: 'Sopo A.', size: 4, wait: 10 },
			{ name: 'Davit G.', size: 2, wait: 15 },
			{ name: 'Mariam T.', size: 6, wait: 25 },
			{ name: 'Irakli S.', size: 3, wait: 30 },
			{ name: 'Ana J.', size: 2, wait: 35 },
			{ name: 'Beka L.', size: 5, wait: 40 },
			{ name: 'Keti P.', size: 2, wait: 45 },
			{ name: 'Zura N.', size: 4, wait: 50 }
		]
	} = $props();
</script>

<TvFrame title={['რესტორანი', 'მაგიდები / Tables']} primary="#1f4d3a">
	<main>
		<section class="seating">
			<h2>მიიწვიეთ <small>Now seating</small></h2>
			<ul>
				{#each seating as p (p.name)}
					<li class:flash={p.flash}>
						<span class="name">{p.name}</span>
						<span class="table"><small>მაგიდა</small>{p.table}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section class="waiting">
			<h2>მოლოდინში <small>Waiting list</small></h2>
			<ul {@attach autoscroll()}>
				{#each waiting as p}
					<li>
						<span class="name">{p.name}</span>
						<span class="size">👥 {p.size}</span>
						<span class="wait">~{p.wait} წთ</span>
					</li>
				{/each}
			</ul>
		</section>
	</main>
</TvFrame>

<style>
	main {
		--green: #1f4d3a;
		--gold: #e0b04f;
		--paper: #f6efe0;

		flex: 1;
		min-height: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		background: var(--paper);
		color: var(--green);
	}
	section {
		display: flex;
		flex-direction: column;
		min-height: 0;
	}
	section.seating {
		background: var(--green);
		color: var(--paper);
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
	ul {
		flex: 1;
		min-height: 0;
		margin: 0;
		padding: 0 2vw 2vh;
		list-style: none;
		overflow-y: auto;
		scrollbar-width: none;
	}
	li {
		display: flex;
		align-items: center;
		gap: 1.5vw;
		padding: 1.2vh 0;
		border-bottom: 1px solid color-mix(in srgb, currentColor 30%, transparent);
	}
	.name {
		flex: 1;
		font-size: 2.6vw;
		font-weight: 700;
	}

	.seating li.flash > * {
		animation: tv-flash 1s ease-out 10;
	}
	.table {
		display: flex;
		align-items: baseline;
		gap: 0.8vw;
		background: var(--gold);
		color: var(--green);
		font-size: 3.6vw;
		font-weight: 900;
		padding: 0.5vh 1.5vw;
	}
	.table small {
		font-size: 1.2vw;
		font-weight: 700;
	}

	.size,
	.wait {
		font-size: 1.8vw;
		font-weight: 600;
	}
	.wait {
		min-width: 8vw;
		text-align: right;
	}
</style>
