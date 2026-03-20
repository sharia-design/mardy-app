<script>
	import { navigation } from '$lib/docs/config/navigation.js';
	import { page } from '$app/stores';
	import '$lib/css/docs.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex min-h-screen">
	<!-- Sidebar -->
	<aside class="w-64 shrink-0 border-r border-gray-200 px-4 py-8 hidden md:block">
		<a href="/" data-sveltekit-reload class="text-lg font-bold mb-8 block">Mardy</a>
		<nav>
			{#each navigation as group}
				<div class="mb-6">
					<p class="text-xs font-semibold uppercase text-gray-400 mb-2">{group.title}</p>
					<ul class="space-y-1">
						{#each group.items as item}
							<li>
								<a
									href={item.href}
									class="block px-2 py-1 rounded text-sm transition-colors
                    {$page.url.pathname === item.href
										? 'bg-gray-100 font-medium text-gray-900'
										: 'text-gray-600 hover:text-gray-900'}"
								>
									{item.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</aside>

	<!-- Main content -->
	<main class="flex-1 px-8 py-10 max-w-3xl docs-content">
		{@render children()}
	</main>
</div>
