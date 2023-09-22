// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/reset.css'],
  modules: ['@nuxtseo/module'],
  site: {
    url: 'https://taekker.dk',
    name: 'Tækker Group',
    indexable: true,
    description: 'Med respekt og engagement arbejder vi med ejendoms- og projektudvikling, ingeniør- og arkitektarbejde, nybyggeri, renovering og ejendomsadministration.',
    defaultLocale: 'da',
    trailingSlash: true,
    identity: {
      type: 'Organization'
    },
  }
})
