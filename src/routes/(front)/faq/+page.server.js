import { getFaqs } from '$lib/sanity/db'

export async function load() {
  const categories = await getFaqs()
  return { categories }
}