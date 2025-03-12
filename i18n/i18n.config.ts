export default {
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'language/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'uz', file: 'uz.json' },
      { code: 'ru', file: 'ru.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  }
  