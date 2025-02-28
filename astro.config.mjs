// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwindcss(), react()]
});