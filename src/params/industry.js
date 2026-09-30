import { slugs } from '$lib/tv/industries.js';

/** @param {string} param */
export const match = (param) => slugs.includes(param);
