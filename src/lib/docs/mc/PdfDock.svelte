<script>
	import { MacosDock } from "$lib/motion-core";

	const items = [
		{
			src: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Kimberly",
			alt: "ადმინისტრატორი",
			label: "Admin",
			href: "/docs/pdf/admin",
		},
		{
			src: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Maria",
			alt: "რეგისტრატორი თანამშრომელი",
			label: "Desk",
			href: "/docs/pdf/desk",
		},
		{
			src: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Sawyer",
			alt: "ექიმი თანამშრომელი",
			label: "Doctor",
			href: "/docs/pdf/doctor",
		},
		{
			src: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Amaya",
			alt: "დამხმარე თანამშრომელი",
			label: "Helper",
			href: "/docs/pdf/helper",
		},
		{
			src: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Brian",
			alt: "ავტორიზაცია [თანამშრომლებისთვის]",
			label: "auth",
			href: "/docs/pdf/auth",
		},

		
	];
</script>

<div
	class="inset-shadow absolute bottom-4 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center gap-1 rounded-sm bg-background-inset p-1"
>
	<div class="absolute bottom-0">
		<MacosDock {items} />
	</div>
</div>
