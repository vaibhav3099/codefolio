import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from '@astrojs/partytown';

import { SITE } from './astro-build-config';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [mdx(), sitemap(), tailwind(), partytown()],
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'localhost:4321'
				}
			]
		]
	}
});
