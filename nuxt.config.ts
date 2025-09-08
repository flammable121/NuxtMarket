// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gothic+A1&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
                }
            ]
        }
    },
    css: [
        '@/assets/style/reset.scss',
        '@/assets/fonts/font.scss',
    ],
    vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `
                    @use "@/assets/style/color.scss" as *;
                    @use "@/assets/style/typography.scss" as *;
                  `
              }
          }
      }
    },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-svgo'],
})