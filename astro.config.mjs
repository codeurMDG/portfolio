import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://rovafiti.netlify.app",
    trailingSlash: "always",
    build: {
        assetsPrefix: "./"
    },
	integrations: [tailwind()],
});