<script>
	import TvFrame from '$lib/tv/TvFrame.svelte';
	import { autoscroll } from '$lib/tv/autoscroll.js';

	let {
		preparing = ['214', '215', '217', '218', '219', '220', '221', '222', '223', '224', '225', '226'],
		ready = [{ n: '211', flash: true }, { n: '212' }, { n: '213' }, { n: '216' }]
	} = $props();
</script>

<TvFrame title={['სწრაფი კვება', 'შეკვეთის სტატუსი / Order status']} primary="#b3121d">
	<main>
		<section class="preparing">
			<h2>მზადდება <small>Preparing</small></h2>
			<ul {@attach autoscroll()}>
				{#each preparing as n}<li>{n}</li>{/each}
			</ul>
		</section>

		<section class="ready">
			<h2>მზადაა <small>Ready for pickup</small></h2>
			<ul>
				{#each ready as o (o.n)}
					<li class:flash={o.flash}>{o.n}</li>
				{/each}
			</ul>
		</section>
	</main>
</TvFrame>

<style>
	main {
		flex: 1;
		min-height: 0;
		display: grid;
		grid-template-columns: 2fr 3fr;
	}
	section {
		display: flex;
		flex-direction: column;
		min-height: 0;
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
		padding: 1vh 2vw 2vh;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.2vh 1vw;
		align-content: start;
		overflow-y: auto;
		scrollbar-width: none;
	}
	li {
		text-align: center;
		font-weight: 800;
		font-variant-numeric: tabular-nums;
		padding: 1vh 0;
	}

	.preparing {
		background: #fff1d0;
		color: #6b1016;
	}
	.preparing li {
		font-size: 3.4vw;
		border: 0.2vw solid #6b1016;
	}

	.ready {
		background: #12703a;
		color: #fff;
	}
	.ready li {
		font-size: 6vw;
		background: #fff;
		color: #12703a;
		padding: 2vh 0;
	}
	.ready li.flash {
		animation: tv-flash 1s ease-out 10;
	}
</style>
