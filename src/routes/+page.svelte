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
				<a href="mailto:email@mardy.com">email@mardy.com</a>
			</li>
			<li in:fly={{ y: 40, duration: 650, delay: 1333 }}>
				<a href="tel:+995500103010">+(995) 500 10 30 10</a>
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
		padding: 11px 22px;
		text-decoration: none;
		font-size: 1.1rem;
		border: 1px solid #6aff00;
		transition: 0.5s ease;
	}
	a:hover {
		transform: translateY(-5px);
		background: #6aff00;
		color: #11111d;
	}
	a:active {
		transform: translateY(0);
		opacity: 0.74;
		border-radius: 11px;
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
