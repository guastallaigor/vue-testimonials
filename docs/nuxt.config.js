import { withDocus } from 'docus'

export default withDocus({
  rootDir: __dirname,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'VueTestimonials',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@guastallaigor' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://vue-testimonials.netlify.app/social.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://vue-testimonials.netlify.app/social.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'VueTestimonials',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://vue-testimonials.netlify.app/social.png',
      },
    ],
  },
})
