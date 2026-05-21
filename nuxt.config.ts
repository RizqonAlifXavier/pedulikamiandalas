// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'PeduliKami Andalas - Yayasan Kemanusiaan Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'PeduliKami Andalas adalah yayasan kemanusiaan yang bergerak dalam bidang bantuan bencana, pendidikan, kesehatan, dan pemberdayaan masyarakat di seluruh Indonesia.'
        },
        { name: 'keywords', content: 'yayasan, kemanusiaan, donasi, bantuan, bencana, pendidikan, kesehatan, Indonesia' },
        { property: 'og:title', content: 'PeduliKami Andalas - Yayasan Kemanusiaan Indonesia' },
        { property: 'og:description', content: 'Bersama membangun harapan untuk Indonesia yang lebih baik.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
})
