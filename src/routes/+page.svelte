<script>
	import { onMount } from 'svelte';
	import { fly, scale, blur } from 'svelte/transition';
	import Logo from '$lib/img/Logo.svelte';

	let anim = $state(false);

	onMount(() => {
		anim = true;
	});
</script>

<div class="mardy">
	{#if anim}
		<div class="logo" in:blur={{ amount: 11, duration: 1111, delay: 111 }}>
			<Logo />
		</div>
		<h1 in:blur={{ amount: 11, duration: 1200, delay: 420 }}>რიგის მართვის სისტემა</h1>
		<ul>
			<li in:fly={{ y: 40, duration: 650, delay: 1111 }}>
				<a href="mailto:email@mardy.app">email@mardy.app</a>
			</li>
			<li in:fly={{ y: 40, duration: 650, delay: 1333 }}>
				<a href="tel:+995500113011">+(995) 500 11 30 11</a>
			</li>
		</ul>
	{/if}
</div>

<style>
	.mardy {
		padding-block: 3vh;
		height: 100vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}
	h1 {
		font-size: 4.2vw;
		font-weight: 900;
	}

	ul {
		display: flex;
		gap: 3vw;
		align-items: center;
	}
	a {
		color: inherit;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 22px 29px;
		text-decoration: none;
		font-size: 1.1rem;
		border: 1px solid var(--primary);
		border-top-right-radius: 33px;
		border-bottom-left-radius: 33px;
		font-weight: 600;
		transition: 0.5s ease;
	}
	a:hover {
		transform: translateY(-5px);
		background: var(--primary);
		color: var(--black);
		border-top-right-radius: 0;
		border-bottom-left-radius: 0;
	}
	a:active {
		transform: translateY(0);
		color: var(--primary);
		background: rgba(var(--primary-rgb), 0.29);
	}
	@media all and (max-width: 550px) {
		h1 {
			font-size: 5.6vw;
		}
		ul {
			flex-direction: column;
			gap: 5vw;
		}
		a,
		li {
			width: 100%;
		}
	}
</style>
