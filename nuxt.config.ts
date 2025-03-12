// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', "@nuxt/image"],
  i18n: {
    strategy: "no_prefix",
    lazy: true,
    langDir: "language/",
    defaultLocale: "uz",
    locales: [
      { code: "en", file: "en.json" },
      { code: "uz", file: "uz.json" },
      { code: "ru", file: "ru.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
})