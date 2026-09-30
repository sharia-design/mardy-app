/** Reactive HH:MM clock. Call once during component init. */
export function createClock() {
	let time = $state('');
	const fmt = () =>
		new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

	$effect(() => {
		time = fmt();
		const id = setInterval(() => (time = fmt()), 1000);
		return () => clearInterval(id);
	});

	return {
		get time() {
			return time;
		}
	};
}
