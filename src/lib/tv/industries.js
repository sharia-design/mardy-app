/** Registry of TV boards. `load` keeps each board in its own chunk. */
export const industries = [
	{
		slug: 'healthcare',
		label: 'Healthcare',
		labelKa: 'ჯანდაცვა',
		icon: '🏥',
		load: () => import('./industries/Healthcare.svelte')
	},
	{
		slug: 'fast-food',
		label: 'Fast food',
		labelKa: 'სწრაფი კვება',
		icon: '🍔',
		load: () => import('./industries/FastFood.svelte')
	},
	{
		slug: 'restaurant',
		label: 'Restaurant',
		labelKa: 'რესტორანი',
		icon: '🍽️',
		load: () => import('./industries/Restaurant.svelte')
	},
	{
		slug: 'delivery',
		label: 'Delivery',
		labelKa: 'მიტანა',
		icon: '🛵',
		load: () => import('./industries/Delivery.svelte')
	},
	{
		slug: 'amanatebi',
		label: 'Amanatebi',
		labelKa: 'ამანათები',
		icon: '📦',
		load: () => import('./industries/Amanatebi.svelte')
	}
];

export const defaultIndustry = 'healthcare';
export const slugs = industries.map((i) => i.slug);
export const bySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));

/** @param {string} slug */
export async function loadBoard(slug) {
	return (await bySlug[slug].load()).default;
}
