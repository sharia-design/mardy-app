<script>
import Header from '$lib/ui/Header.svelte'
	import { PortableText } from '@portabletext/svelte';
	import '$lib/css/docs.css';

	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { data } = $props();

	const { categories } = data;

	let openKey = $state(null);
	let lang = $state('ka');

	function toggle(key) {
		openKey = openKey === key ? null : key;
	}
</script>


<svelte:head>
<title>FAQ | Mardy.app</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Header />

<section class="faq-page" style="margin-top: 100px">
	<div class="faq-header">
		<h1>{lang === 'ka' ? 'ხშირად დასმული კითხვები' : 'Frequently Asked Questions'}</h1>
		<div class="lang-toggle">
			<button class:active={lang === 'ka'} onclick={() => (lang = 'ka')}>ქართული</button>
			<button class:active={lang === 'en'} onclick={() => (lang = 'en')}>English</button>
		</div>
	</div>

	{#each categories as category, ci}
		{#if category.items?.length}
			<div class="faq-category">
				<h2 class="category-title">
					{lang === 'ka' ? category.title.ka : category.title.en || category.title.ka}
				</h2>

				<div class="faq-list">
					{#each category.items as item, ii}
						{@const key = `${ci}-${ii}`}
						{@const question =
							lang === 'ka' ? item.question_ka : item.question_en || item.question_ka}
						{@const answer = lang === 'ka' ? item.answer_ka : item.answer_en || item.answer_ka}
						{@const isOpen = openKey === key}

						<div class="faq-item" class:open={isOpen}>
							<button class="faq-question" onclick={() => toggle(key)} aria-expanded={isOpen}>
								<span>{question}</span>
								<svg
									class="chevron"
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</button>

							{#if isOpen}
								<div class="faq-answer" transition:slide={{ duration: 280, easing: cubicOut }}>
									{#if answer}
										<PortableText value={answer} />
									{/if}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</section>

<style>
	.faq-page {
		max-width: 920px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.faq-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2.5rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.faq-header h1 {
		font-size: 2rem;
		font-weight: 700;
		margin: 0;
		color: #fff;
	}

	/* ── Lang toggle ─────────────────────────────────── */
	.lang-toggle {
		display: flex;
		gap: 0.25rem;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 10px;
		padding: 0.25rem;
	}

	.lang-toggle button {
		padding: 0.35rem 0.9rem;
		border: none;
		background: transparent;
		border-radius: 7px;
		cursor: pointer;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.45);
		transition: all 0.2s;
	}

	.lang-toggle button.active {
		background: var(--primary);
		color: #fff;
		font-weight: 600;
		box-shadow: 0 2px 10px rgba(var(--primary-rgb), 0.35);
	}

	/* ── Category section ────────────────────────────── */
	.faq-category {
		margin-bottom: 2.5rem;
	}

	.category-title {
		font-size: 1.3rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--primary);
		margin-bottom: 0.85rem;
		padding-bottom: 0.6rem;
		border-bottom: 1px solid rgba(var(--primary-rgb), 0.2);
	}

	/* ── FAQ list ────────────────────────────────────── */
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.faq-item {
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.03);
		transition:
			border-color 0.2s,
			background 0.2s,
			box-shadow 0.2s;
	}

	.faq-item.open {
		border-color: rgba(var(--primary-rgb), 0.35);
		background: rgba(var(--primary-rgb), 0.05);
		box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.08);
	}

	/* ── Question button ─────────────────────────────── */
	.faq-question {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1.25rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		font-size: 1.1rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.85);
		transition: color 0.2s;
	}

	.faq-question:hover {
		color: #fff;
	}

	.faq-item.open .faq-question {
		color: #fff;
	}

	/* ── Chevron ─────────────────────────────────────── */
	.chevron {
		flex-shrink: 0;
		color: rgba(255, 255, 255, 0.25);
		transition:
			transform 0.28s cubic-bezier(0.4, 0, 0.2, 1),
			color 0.2s;
	}

	.faq-item.open .chevron {
		transform: rotate(180deg);
		color: var(--primary);
	}

	/* ── Answer ──────────────────────────────────────── */
	.faq-answer {
		padding: 0 1.25rem 1.1rem;
		font-size: 1rem;
		color: rgba(239, 251, 246, 0.92);
		line-height: 1.75;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

</style>
