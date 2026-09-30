<script>
	import TvFrame from '$lib/tv/TvFrame.svelte';
	import { autoscroll } from '$lib/tv/autoscroll.js';

	// --- Mock data (replace via props / a live store) ---
	const mockDesks = [
		{ id: 'A-001', place: '1', active: true, flash: true },
		{ id: 'A-015', place: '2', active: true },
		{ id: 'A-005', place: '4', active: true },
		{ id: 'A-006', place: '3', active: true },
		...['A-007', 'A-008', 'A-009', 'A-010', 'A-011', 'A-022', 'A-025', 'A-052', 'A-055'].map(
			(id) => ({ id, place: '', active: false })
		),
		...Array.from({ length: 8 }, (_, i) => ({ id: `A-${60 + i}`, place: '', active: false }))
	];

	const mockServiceActives = [
		{ id: 'D-050', place: '11', flash: true },
		{ id: 'D-051', place: '7', flash: true },
		{ id: 'D-052', place: '14' },
		{ id: 'D-053', place: '6' },
		{ id: 'D-054', place: '15' },
		{ id: 'D-055', place: '9' },
		{ id: 'D-056', place: '12' },
		{ id: 'D-057', place: '5' },
		{ id: 'D-058', place: '10' }
	];

	const mockServiceWaitings = [
		{ id: 'D-059', place: '8' },
		{ id: 'D-060', place: '13' },
		{ id: 'D-061', place: '6' },
		{ id: 'D-062', place: '15' },
		{ id: 'D-063', place: '9' },
		{ id: 'D-064', place: '11' },
		{ id: 'D-065', place: '7' },
		{ id: 'D-066', place: '14' },
		{ id: 'D-067', place: '5' },
		{ id: 'D-068', place: '12' },
		{ id: 'D-069', place: '10' },
		{ id: 'D-070', place: '6' }
	];

	let {
		desks = mockDesks,
		serviceActives = mockServiceActives,
		serviceWaitings = mockServiceWaitings
	} = $props();

	const activeDesks = $derived(desks.filter((d) => d.active));
	const inactiveDesks = $derived(desks.filter((d) => !d.active));
</script>

<TvFrame
	logo="/clients/ggrc/ggrc-logo.webp"
	title={['ქართულ-გერმანული', 'რეპროდუქციული მედიცინის ცენტრი']}
	primary="#1a0d7c"
>
	<main>
		<aside>
			<div class="panel-header">რეგისტრატურა / Desk</div>

			<div class="table-header">
				<span>რიგის №</span>
				<span>ადგილი</span>
			</div>

			<div class="list-container">
				<ul class="desk active">
					{#each activeDesks as item}
						<li class="list-item active" class:flash={item.flash}>
							<span class="ticket-id">{item.id}</span>
							<span class="arrow">➜</span>
							<span class="place-box">{item.place}</span>
						</li>
					{/each}
				</ul>

				<ul class="desk inactive" {@attach autoscroll()}>
					{#each inactiveDesks as item}
						<li class="list-item">
							<span class="ticket-id">{item.id}</span>
						</li>
					{/each}
				</ul>
			</div>
		</aside>

		<section>
			<div class="panel-header text-blue">სერვისები / Services</div>

			<div class="services-wrapper">
				<div class="service-col active">
					<div class="table-header subtitle"><h3>აქტიური / Active</h3></div>
					<div class="table-header text-blue">
						<span>რიგის №</span>
						<span>ოთახი / Room</span>
					</div>
					<div class="services-active-list" {@attach autoscroll()}>
						{#each serviceActives as item}
							<div class="service-row" class:flash={item.flash}>
								<div class="ticket-box">{item.id}</div>
								<div class="place-box-blue">{item.place}</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="service-col waiting">
					<div class="table-header subtitle"><h3>მომლოდინე / Waiting</h3></div>
					<div class="table-header text-blue">
						<span>რიგის №</span>
						<span>ოთახი / Room</span>
					</div>
					<div class="services-waiting-list" {@attach autoscroll()}>
						{#each serviceWaitings as item}
							<div class="service-row">
								<div class="ticket-box">{item.id}</div>
								<div class="place-box-blue">{item.place}</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>
	</main>
</TvFrame>

<style>
	main {
		--yellow: #ffe92d;
		--blue: #1a0d7c;
		--white-1: #ffffff;
		--white-2: #f8f8f8;

		display: flex;
		flex: 1;
		min-height: 0;
		align-items: stretch;
		width: 100%;
		background-color: var(--white-1);
		overflow: hidden;
	}

	/* --- Left panel (Registration) --- */
	aside {
		background-color: var(--yellow);
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 30vw;
		border-right: 0.2vh solid var(--blue);
	}

	.panel-header {
		text-align: center;
		font-size: 2vw;
		font-weight: 900;
		padding: 1.5vh 0;
		color: var(--blue);
	}
	.panel-header.text-blue {
		background-color: var(--white-2);
	}

	.table-header {
		display: flex;
		justify-content: space-between;
		padding: 1vh 1vw;
		font-size: 1.2vw;
		font-weight: bold;
		color: var(--blue);
		border-top: 2px solid var(--blue);
		border-bottom: 2px solid var(--blue);
	}

	.list-container {
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: var(--yellow);
	}

	ul.desk {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	ul.desk.active {
		padding-top: 1.5vh;
		padding-bottom: 1.5vh;
		flex: none;
		background-color: var(--blue);
	}
	ul.desk.inactive {
		flex: 1;
		overflow-y: auto;
		scrollbar-width: none;
	}

	.list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1vh 2vw;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		font-size: 2.2vw;
		font-weight: 600;
		color: var(--blue);
	}
	.list-item.active {
		margin: 0.5vh 1vw;
		background: var(--yellow);
		padding: 0.5vh 1vw;
		border-bottom: none;
		font-weight: 700;
	}
	.list-item.active.flash > span {
		animation: tv-flash 1s ease-out 10;
	}
	.list-item.active .place-box {
		background-color: var(--blue);
		color: var(--yellow);
		font-size: 2.5vw;
		font-weight: 900;
		padding: 0 1vw;
	}
	.arrow {
		color: var(--blue);
		font-size: 1.5vw;
	}

	/* --- Right panel (Services) --- */
	section {
		display: flex;
		flex-direction: column;
		width: calc(100% - 30vw);
		background-color: var(--white-1);
		height: 100%;
		overflow: hidden;
	}
	.services-wrapper {
		display: flex;
		width: 100%;
		min-height: 0;
		flex: 1;
	}
	.service-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}
	.service-col:first-child {
		border-right: 2px solid var(--blue);
	}
	.service-col .table-header {
		background-color: var(--white-1);
	}
	.service-col .table-header.subtitle {
		align-items: center;
		justify-content: center;
	}

	.services-active-list,
	.services-waiting-list {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		scrollbar-width: none;
	}
	.services-active-list {
		border-left: 2px solid var(--yellow);
		background-color: var(--blue);
	}
	.services-active-list .ticket-box {
		border: 2px solid var(--yellow);
		color: var(--yellow);
	}
	.services-active-list .place-box-blue {
		background-color: var(--yellow);
		color: var(--blue);
	}
	.services-active-list .service-row.flash .place-box-blue {
		animation: tv-flash 1s ease-out 10;
	}
	.services-active-list .service-row.flash .ticket-box {
		background-color: var(--yellow);
		color: var(--blue);
	}
	/* Stagger for the demo — remove in prod if you don't want it */
	.services-active-list .service-row.flash:nth-child(even) .place-box-blue {
		animation: tv-flash 1s ease-out 10 0.29s;
	}
	.services-waiting-list .service-row {
		border-color: var(--blue);
	}

	.service-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.8vh 1vw;
		border-bottom: 2px solid var(--yellow);
	}
	.ticket-box {
		border: 2px solid var(--blue);
		color: var(--blue);
		font-weight: bold;
		font-size: 2vw;
		padding: 0.5vh 1vw;
		width: 60%;
		text-align: center;
	}
	.place-box-blue {
		background-color: var(--blue);
		color: var(--yellow);
		font-weight: bold;
		font-size: 2vw;
		width: 4vw;
		height: 4vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (width < 560px) {
		main {
			flex-direction: column;
			font-size: 20px !important;
		}
		main * {
			font-size: 15px !important;
		}
		aside {
			width: 100%;
			height: 40vh;
		}
		section {
			width: 100%;
		}
	}
</style>
