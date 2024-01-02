// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt Argon",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css",
        },
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://kit.fontawesome.com/42d5adcbca.js",
          async: true,
        },
        {
          type: "text/javascript",
          src: "https://buttons.github.io/buttons.js",
          async: true,
        },
      ],
    },
  },
  css: ['@/assets/sass/main.scss', 
  '@/assets/sass/editPage.scss',
  '@/assets/sass/userId.scss',
  '@/assets/sass/viewDetail.scss',
],
});
