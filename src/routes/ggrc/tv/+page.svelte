<script>
	import { onMount, onDestroy, tick } from 'svelte';

	// --- State ---
	let isLoading = $state(true);
	let currentTime = $state('');

	// --- Mock Data ---
	const deskQue = [
		{ id: 'A-001', place: '1', active: true, flash: true },
		{ id: 'A-015', place: '2', active: true },
		{ id: 'A-005', place: '4', active: true },
		{ id: 'A-006', place: '3', active: true },
		{ id: 'A-007', place: '', active: false },
		{ id: 'A-008', place: '', active: false },
		{ id: 'A-009', place: '', active: false },
		{ id: 'A-010', place: '', active: false },
		{ id: 'A-011', place: '', active: false },
		{ id: 'A-022', place: '', active: false },
		{ id: 'A-025', place: '', active: false },
		{ id: 'A-052', place: '', active: false },
		{ id: 'A-055', place: '', active: false },
		{ id: 'A-001', place: '', active: false },
		{ id: 'A-001', place: '', active: false },
		{ id: 'A-001', place: '', active: false },
		{ id: 'A-001', place: '', active: false },
		{ id: 'A-001', place: '', active: false },
		{ id: 'A-001', place: '', active: false },
		{ id: 'A-001', place: '', active: false }
	];

	let activeDesks = $derived(deskQue.filter((item) => item.active));
	let inactiveDesks = $derived(deskQue.filter((item) => !item.active));

	// References
	let inactiveUl = $state(null);
	let scrollInterval = $state(null);
	let mutationObserver = $state(null);

	// Config
	const SCROLL_SPEED = 0.5;
	const SCROLL_DELAY = 3000;

	// Functions
	function manageAutoScroll() {
		if (!inactiveUl) return;

		const container = inactiveUl;
		const contentHeight = container.scrollHeight;
		const visibleHeight = container.clientHeight;

		if (contentHeight <= visibleHeight) {
			stopAutoScroll();
			return;
		}

		startAutoScroll();
	}

	function startAutoScroll() {
		stopAutoScroll();

		let direction = 1;
		let paused = false;

		scrollInterval = setInterval(() => {
			if (paused) return;

			const container = inactiveUl;
			if (!container) return;

			const maxScroll = container.scrollHeight - container.clientHeight;
			const currentScroll = container.scrollTop;

			if (currentScroll >= maxScroll - 1 && direction === 1) {
				paused = true;
				setTimeout(() => {
					direction = -1;
					paused = false;
				}, SCROLL_DELAY);
				return;
			}

			if (currentScroll <= 0 && direction === -1) {
				paused = true;
				setTimeout(() => {
					direction = 1;
					paused = false;
				}, SCROLL_DELAY);
				return;
			}

			container.scrollTop += direction * SCROLL_SPEED;
		}, 16);
	}

	function stopAutoScroll() {
		if (scrollInterval) {
			clearInterval(scrollInterval);
			scrollInterval = null;
		}
	}

	// Split services
	const servicesCol1 = [
		{ id: 'D-050', place: '3' },
		{ id: 'D-051', place: '5' },
		{ id: 'D-052', place: '8' },
		{ id: 'D-053', place: '12' },
		{ id: 'D-054', place: '15' },
		{ id: 'D-055', place: '20' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' },
		{ id: 'D-056', place: '25' }
	];

	const servicesCol2 = [
		{ id: 'D-052', place: '6' },
		{ id: 'D-053', place: '7' },
		{ id: 'D-054', place: '8' },
		{ id: 'D-055', place: '9' },
		{ id: 'D-056', place: '10' },
		{ id: 'D-057', place: '11' },
		{ id: 'D-058', place: '12' }
	];

	const waitingList = ['D-213', 'D-213', 'D-213', 'D-213', 'D-213', 'D-213', 'D-213'];

	// Lifecycle
	onMount(async () => {
		// Simulate loading
		setTimeout(() => {
			isLoading = false;
		}, 111);

		// Clock
		const updateTime = () => {
			const now = new Date();
			currentTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
		};
		updateTime();
		const interval = setInterval(updateTime, 1000);

		// 5-second delay before starting auto-scroll logic
		setTimeout(async () => {
			// Wait for DOM render
			await tick();

			// Attach MutationObserver
			if (inactiveUl) {
				mutationObserver = new MutationObserver(() => {
					manageAutoScroll();
				});
				mutationObserver.observe(inactiveUl, { childList: true, subtree: true });
			}

			// Initial check after delay
			manageAutoScroll();
		}, SCROLL_DELAY);

		// Resize listener
		window.addEventListener('resize', manageAutoScroll);

		return () => {
			if (mutationObserver) mutationObserver.disconnect();
			stopAutoScroll();
			window.removeEventListener('resize', manageAutoScroll);
			clearInterval(interval);
		};
	});

	onDestroy(stopAutoScroll);
</script>

<svelte:head>
	<title>GGRC - TV</title>
</svelte:head>

<div id="tv">
	<div class="tv-display">
		<header>
			<div class="brand">
				<img src="/clients/ggrc/ggrc-logo.webp" alt="Logo" class="logo" />
				<div class="brand-text">
					<span>ქართულ-გერმანული</span>
					<span>რეპროდუქციული მედიცინის ცენტრი</span>
				</div>
			</div>
			<div class="clock">
				<span class="clock-icon">🕒</span>
				{currentTime}
			</div>
		</header>

		<main>
			<aside>
				<div class="panel-header">რეგისტრატურა</div>

				<div class="table-header">
					<span>რიგის №</span>
					<span>ადგილი</span>
				</div>

				<div class="list-container">
					<!-- Active desks: height based on content, no scroll -->
					<ul class="desk active">
						{#each activeDesks as item}
							<li class="list-item active" class:flash={item.flash}>
								<span class="ticket-id">{item.id}</span>
								<span class="arrow">➜</span>
								<span class="place-box">{item.place}</span>
							</li>
						{/each}
					</ul>

					<!-- Inactive desks: fills remaining space + scroll -->
					<ul class="desk inactive" bind:this={inactiveUl}>
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
						<div class="table-header subtitle">
							<h3>აქტიური / Active</h3>
						</div>
						<div class="table-header text-blue">
							<span>რიგის №</span>
							<span>ოთახი / Room</span>
						</div>
						{#each servicesCol1 as item}
							<div class="service-row">
								<div class="ticket-box">{item.id}</div>
								<div class="place-box-blue">{item.place}</div>
							</div>
						{/each}
					</div>

					<div class="service-col waiting">
						<div class="table-header subtitle">
							<h3>მომლოდინე / Waiting</h3>
						</div>
						<div class="table-header text-blue">
							<span>რიგის №</span>
							<span>ოთახი / Room</span>
						</div>
						{#each servicesCol2 as item}
							<div class="service-row">
								<div class="ticket-box">{item.id}</div>
								<div class="place-box-blue">{item.place}</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</main>

		<footer>
			<div class="waiting-label">მომლოდინეები:</div>
			<div class="waiting-list">
				{#each waitingList as item}
					<div class="waiting-item">
						<span>{item}</span>
						<span class="waiting-place">4</span>
					</div>
				{/each}
			</div>
		</footer>
	</div>
</div>

<style>
	/* --- CSS Variables --- */
	#tv {
		--yellow: #ffe92d;
		--blue: #1a0d7c;
		--white-1: #ffffff;
		--white-2: #f8f8f8;
		--orange-1: #ffa800;
		--orange-2: #f17800;
		--orange-3: #cb451b;
		--black: #151515;
		--gray: #2e3033;

		/* Fonts & Reset */
		font-family: 'Google Sans', sans-serif;
		width: 100vw;
		height: 100vh;
		background-color: var(--black);
		overflow: hidden;
		box-sizing: border-box;
		/* cursor: none;
    user-select: none; */
	}
	*::selection {
		background: var(--blue);
		color: var(--yellow);
	}

	/* --- Main Layout --- */
	.tv-display {
		height: 100dvh;
		width: 100dvw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	/* 1. Header */
	header {
		background-color: var(--blue);
		color: var(--white-1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1vh 1vw;
		border-bottom: 0.2vh solid var(--blue);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.5vw;
	}

	/* Logo Icon Simulation */
	.logo {
		height: 4vh;
		display: inline-block;
		width: auto;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		font-size: 1.1vw;
		line-height: 1.2;
	}

	.clock {
		border: 0.15vw solid var(--white-1);
		padding: 0.5vh 1.5vw;
		font-size: 1.8vw;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 0.5vw;
	}

	/* Main container area */
	main {
		display: flex;
		flex: 1;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		gap: 0;
		background-color: var(--white-1);
		overflow: hidden;
	}

	/* --- Left Panel (Registration) --- */
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
		color: var(--blue);
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
	.table-header.text-blue {
		color: var(--blue);
		border-top: 2px solid var(--blue);
		border-bottom: 2px solid var(--blue);
	}

	.list-container {
		flex: 1;
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

	/* Inactive list: fills remaining space and scrolls */
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

	/* Active Deks Item */
	.list-item.active {
		background-color: var(--blue);
		margin: 0.5vh 1vw;
		background: var(--yellow);
		color: var(--blue);
		padding: 0.5vh 1vw;
		border-bottom: none;
		font-weight: 700;
	}

	/* Flash Animation: Active Desk item */
	.list-item.active.flash > span {
		animation: flashDesk 1s ease-out 10;
	}

	@keyframes flashDesk {
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
	/* Flash Animation: Active Desk item */

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

	/* --- Right Panel (Services) --- */
	section {
		display: flex;
		flex-direction: column;
		width: calc(100% - 30vw);
		background-color: var(--white-1);
	}

	.services-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		flex-grow: 1;
		height: 100%;
	}

	.service-col .table-header {
		background-color: var(--white-1);
	}

	.service-col .table-header.subtitle {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.service-col {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto
	}
	.service-col.active {
		border-left: 2px solid var(--yellow) !important;
		background-color: var(--blue);
	}
	.service-col:first-child {
		border-right: 2px solid var(--blue);
	}

	.service-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.8vh 1vw;
		border-bottom: 2px solid var(--yellow);
	}

	.ticket-box {
		border: 2px solid var(--yellow);
		color: var(--yellow);
		font-weight: bold;
		font-size: 2vw;
		padding: 0.5vh 1vw;
		width: 60%;
		text-align: center;
	}

	.place-box-blue {
		background-color: var(--yellow);
		color: var(--blue);
		font-weight: bold;
		font-size: 2vw;
		width: 4vw;
		height: 4vw; /* Square */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* 3. Footer */
	footer {
		background-color: var(--blue);
		border-top: 0.3vh solid var(--white-1);
		display: flex;
		align-items: center;
		padding: 0 1vw;
		gap: 2vw;
	}

	.waiting-label {
		color: var(--white-1);
		font-size: 1.5vw;
		white-space: nowrap;
	}

	.waiting-list {
		display: flex;
		gap: 1vw;
		overflow: hidden;
	}

	.waiting-item {
		display: flex;
		align-items: center;
		background-color: var(--white-1);
		color: var(--blue);
		border: 1px solid var(--blue);
		padding: 0 0 0 0.5vw;
		font-weight: bold;
		font-size: 1.2vw;
		height: 4vh;
	}

	.waiting-place {
		background-color: var(--blue);
		color: var(--white-1);
		padding: 0 0.8vw;
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 0.5vw;
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
