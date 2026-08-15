import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nukaysw.com',
  base: '/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => ![
        '/about/', '/contact/', '/dashboard/', '/changelog/',
        '/components/', '/advanced-components/',
        '/blog/', '/blog/getting-started-with-ai/', '/markdown-page/',
      ].some((path) => page.endsWith(path)),
    }),
    mdx()
  ]
});
