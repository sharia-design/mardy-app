<script>
	import TvFrame from '$lib/tv/TvFrame.svelte';
	import { autoscroll } from '$lib/tv/autoscroll.js';

	const labels = {
		ready: 'მზადაა · Ready',
		arriving: 'კურიერი მოდის · Arriving',
		preparing: 'მზადდება · Preparing'
	};

	let {
		orders = [
			{ id: '#4821', courier: 'Nika', platform: 'Wolt', status: 'ready', bay: '2', flash: true },
			{ id: '#4822', courier: 'Giga', platform: 'Glovo', status: 'ready', bay: '1', flash: true },
			{ id: '#4823', courier: 'Saba', platform: 'Wolt', status: 'arriving', bay: '3' },
			{ id: '#4824', courier: 'Luka', platform: 'Bolt Food', status: 'arriving', bay: '4' },
			{ id: '#4825', courier: '—', platform: 'Glovo', status: 'preparing', bay: '' },
			{ id: '#4826', courier: '—', platform: 'Wolt', status: 'preparing', bay: '' },
			{ id: '#4827', courier: 'Data', platform: 'Glovo', status: 'preparing', bay: '' },
			{ id: '#4828', courier: '—', platform: 'Bolt Food', status: 'preparing', bay: '' },
			{ id: '#4829', courier: '—', platform: 'Wolt', status: 'preparing', bay: '' },
			{ id: '#4830', courier: '—', platform: 'Glovo', status: 'preparing', bay: '' }
		]
	} = $props();
</script>

<TvFrame title={['მიტანა', 'კურიერების დაფა / Courier board']} primary="#ff6a00">
	<main>
		<div class="head">
			<span>შეკვეთა</span>
			<span>კურიერი</span>
			<span>სტატუსი</span>
			<span>გასასვლელი</span>
		</div>

		<div class="rows" {@attach autoscroll()}>
			{#each orders as o (o.id)}
				<div class="row" class:flash={o.flash}>
					<span class="id">{o.id}</span>
					<span class="courier">{o.courier} <em>{o.platform}</em></span>
					<span class="pill" data-status={o.status}>{labels[o.status]}</span>
					<span class="bay">{o.bay}</span>
				</div>
			{/each}
		</div>
	</main>
</TvFrame>

<style>
	main {
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
		background: #fff;
		color: #151515;
	}
	.head,
	.row {
		display: grid;
		grid-template-columns: 1.2fr 2fr 3fr 1.2fr;
		align-items: center;
		gap: 1vw;
		padding: 0 2vw;
	}
	.head {
		padding-top: 1.2vh;
		padding-bottom: 1.2vh;
		background: #151515;
		color: #fff;
		font-size: 1.4vw;
		font-weight: 700;
	}
	.rows {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		scrollbar-width: none;
	}
	.row {
		padding-top: 1vh;
		padding-bottom: 1vh;
		border-bottom: 2px solid #eee;
		font-size: 2.2vw;
		font-weight: 700;
	}
	.row.flash .id,
	.row.flash .bay {
		animation: tv-flash 1s ease-out 10;
	}
	.id {
		font-variant-numeric: tabular-nums;
	}
	.courier em {
		display: block;
		font-size: 1.3vw;
		font-style: normal;
		font-weight: 500;
		opacity: 0.6;
	}
	.pill {
		justify-self: start;
		padding: 0.6vh 1.2vw;
		font-size: 1.8vw;
	}
	.pill[data-status='ready'] {
		background: #12703a;
		color: #fff;
	}
	.pill[data-status='arriving'] {
		background: #ff6a00;
		color: #151515;
	}
	.pill[data-status='preparing'] {
		background: #eee;
		color: #444;
	}
	.bay {
		justify-self: start;
		min-width: 4.5vw;
		text-align: center;
		background: #151515;
		color: #fff;
		font-size: 3vw;
		font-weight: 900;
	}
	.bay:empty {
		background: none;
	}
</style>
