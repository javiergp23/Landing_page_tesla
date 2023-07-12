import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://javiergp23.github.io/',
  base: '/Landing_page_tesla/',
  integrations: [tailwind()]
});