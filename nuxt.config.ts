export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',
    content: {
        watch: {
            ws: {
                hostname: process.env.NUXT_WS_PROXY_HOST || 'localhost',
            },
        },
    },
    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },
});
