import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({ extensions: ['.svx', '.md'] })
  ],
  extensions: ['.svelte', '.svx', '.md'],
};

export default config;
