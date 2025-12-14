<script>
	import Logo from '$lib/img/Logo.svelte';
</script>

<div class="mardy">
	<Logo />
	<h1>რიგის მართვის სისტემა</h1>
	<ul>
		<li>
			<a href="mailto:email@mardy.com">email@mardy.com</a>
		</li>
		<li>
			<a href="tel:+995500103010">+(995) 500 10 30 10</a>
		</li>
	</ul>
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
	}
	ul {
		display: flex;
		gap: 5vw;
		align-items: center;
	}
	a {
		color: inherit;
		display: inline-flex;
		padding: 11px 29px;
		text-decoration: none;
		transition: 0.5s ease;
	}
	a:hover {
		background: #6aff00;
		color: #11111d;
	}
	@media all and (max-width: 550px) {
		h1 {
			font-size: 5.6vw;
		}
        ul {
            flex-direction: column;
        }
	}
</style>
