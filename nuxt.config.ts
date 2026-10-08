import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'The Journey of Microplastics - Adelaide PYP Exhibition',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: 'An Adelaide Year 5 exhibition exploring how sunlight and time turn plastic litter into tiny fragments.' },
        { name: 'theme-color', content: '#f5f7ee' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
