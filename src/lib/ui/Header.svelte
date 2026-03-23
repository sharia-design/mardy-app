<script lang="ts">
	import { FloatingMenu } from '$lib/motion-core';
	import Mardy from '$lib/img/Mardy.svelte'

	const menuGroups = [
		{
			title: 'პროდუქტი',
			variant: 'muted',
			links: [
				{ label: 'მიმოხილვა', href: '#' },
				{ label: 'შედარება', href: '#' },
				{ label: 'ფასი', href: '#' }
			]
		},
		{
			title: 'რესურსები',
			variant: 'default',
			links: [
				{ label: 'უსაფრთხოება და დაცულობა', href: '#' },
				{ label: 'დოკუმენტაცია', href: '/docs/pdf' },
				{ label: 'FAQ', href: '/faq' },
				{ label: 'პარტნიორები', href: '#' }
			]
		},
		{
			title: 'კომპანია',
			variant: 'muted',
			links: [
				{ label: 'მარდი', href: '#' },
				{ label: 'ბლოგი', href: '#' },
				{ label: 'კარიერა', href: '#' }
			]
		}
	];
	let demoContainer;
</script>

<FloatingMenu
	portalTarget={demoContainer}
	{menuGroups}
	primaryButton={{ label: 'Docs | PDF', href: '/docs/pdf' }}
>
	{#snippet logo()}
		<a href="/" data-sveltekit-reload class="flex items-center">
			<strong
				class="inline-flex shrink-0 items-center text-accent [&>svg]:h-6 [&>svg]:w-auto [&>svg]:fill-current"
				aria-hidden="true"
			>
				<Mardy />
			</strong>
		</a>
	{/snippet}
</FloatingMenu>
