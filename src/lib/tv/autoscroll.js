/**
 * Ping-pong auto-scroll attachment. Usage: <ul {@attach autoscroll()}>
 * Uses a float position so slow speeds work on 1x displays (scrollTop rounds to integers).
 * @param {{ speed?: number, delay?: number }} [opts] speed = px/second, delay = pause at each end (ms)
 */
export const autoscroll =
	({ speed = 30, delay = 3000 } = {}) =>
	(node) => {
		let raf = 0;
		let last = 0;
		let pos = 0;
		let dir = 1;
		let holdUntil = performance.now() + delay;

		const tick = (t) => {
			const max = node.scrollHeight - node.clientHeight;
			const dt = last ? Math.min(t - last, 100) : 0;
			last = t;

			if (max <= 0) {
				// nothing to scroll (yet) — keep waiting, re-check every frame
				pos = 0;
				dir = 1;
				node.scrollTop = 0;
				holdUntil = t + delay;
			} else if (t >= holdUntil) {
				pos += (dir * speed * dt) / 1000;
				if (pos >= max) {
					pos = max;
					dir = -1;
					holdUntil = t + delay;
				} else if (pos <= 0) {
					pos = 0;
					dir = 1;
					holdUntil = t + delay;
				}
				node.scrollTop = pos;
			}
			raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	};
