<script lang="ts">
	import { Globe } from '$lib/motion-core';
	import { cn } from '$lib/motion-core/utils/cn';

	const locations = [
		{
			name: 'თბილისი',
			location: [41.6938, 44.8015],
			label: 'თბილისი',
			color: '#645ece'
		},
		{
			name: 'New York',
			location: [40.7128, -74.006],
			label: 'New York',
			color: '#ff2376'
		},
		{
			name: 'Tokyo',
			location: [35.6762, 139.6503],
			label: 'Tokyo',
			color: '#e6f0ff'
		}
	];

	let focusOn = $state(null);
</script>

<Globe
	radius={3}
	pointCount={25000}
	class="h-full min-h-96 w-full"
	markers={locations}
	landPointColor="#00bd8c"
	{focusOn}
	autoRotate={!focusOn}
	lockedPolarAngle={false}
	fresnelConfig={{
		color: '#111113',
		rimColor: '#00bd8c',
		rimPower: 6,
		rimIntensity: 1.5
	}}
	atmosphereConfig={{
		color: '#00bd8c'
	}}
/>
<!-- <div
	class="inset-shadow absolute bottom-4 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center gap-1 rounded-sm bg-background-inset p-1"
>
	<button
		class={cn(
			'gap-1.5 rounded px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap uppercase transition-all duration-150 ease-out',
			focusOn === null
				? 'light:text-card card  bg-background-muted shadow-md dark:text-foreground'
				: 'text-foreground-muted hover:text-foreground'
		)}
		onclick={() => (focusOn = null)}
	>
		Auto Rotate
	</button>
	{#each locations as loc (loc.name)}
		<button
			class={cn(
				'gap-1.5 rounded px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap uppercase transition-colors duration-150 ease-out',
				focusOn?.[0] === loc.location[0] && focusOn?.[1] === loc.location[1]
					? 'light:text-card card bg-background-muted dark:text-foreground'
					: 'text-foreground-muted hover:text-foreground '
			)}
			onclick={() => (focusOn = loc.location)}
		>
			{loc.name}
		</button>
	{/each}
</div> -->
