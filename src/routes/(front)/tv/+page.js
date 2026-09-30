import { defaultIndustry, loadBoard } from '$lib/tv/industries.js';

export async function load() {
	return { Board: await loadBoard(defaultIndustry) };
}