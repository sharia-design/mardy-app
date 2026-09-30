<script lang="ts">
	import { FloatingMenu } from '$lib/motion-core';
	import Mardy from '$lib/img/Mardy.svelte'

	const menuGroups = [
		{
			title: 'პროდუქტი',
			variant: 'muted',
			links: [
				{ label: 'ტელევიზორი (TV)', href: '/tv' },
				{ label: 'ჩეკი / ქვითარი (Kiosk)', href: '/kiosk' },
				{ label: 'ადმინი (CRM)', href: '/docs/pdf' }
			]
		},
		{
			title: 'ინდუსტრია',
			variant: 'muted',
			links: [
				{ label: 'ჯანდაცვა / ჰოსპიტალი', href: '/tv/healthcare' },
				{ label: 'კურიერი (Delivery)', href: '/tv/healthcare' },
				{ label: '(Fast Food)', href: '/tv/healthcare' },
				{ label: '(Restourant)', href: '/tv/healthcare' }
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
		},
	];
	let demoContainer;
</script>

<FloatingMenu
	portalTarget={demoContainer}
	{menuGroups}
	primaryButton={{ label: 'Contact', href: 'mailto:email@mardy.app' }}
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
