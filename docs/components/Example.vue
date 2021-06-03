<template>
  <div id="testimonials">
    <h1 id="main-title">Vue Testimonials</h1>
    <VueTestimonials :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueTestimonials from '@/component/VueTestimonials.vue'
import { Testimonial } from '@/types/global'

export default defineComponent({
  name: 'App',
  components: {
    VueTestimonials,
  },
  setup() {
    const items = ref<Testimonial[]>([
      {
        title: 'Excelent',
        content:
          '"I just updated my site and it was so simple! Thanks for being so awesome!"',
        image: 'https://i.pravatar.cc/160?img=13',
        author: 'Jason',
      },
      {
        title: 'Outstanding',
        content:
          '"She was thoughtful during the entire process and exceed my expectations!"',
        image: 'https://i.pravatar.cc/160?img=31',
        author: 'Emily',
      },
      {
        title: 'The best',
        content:
          '"My new site is so much faster and easier to work with. Thanks guys!"',
        image: 'https://i.pravatar.cc/160?img=45',
        author: 'Amelia',
      },
    ])
    return { items }
  },
})
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: #111827;
}
#app {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
#testimonials {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
}
#main-title {
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: 70px;
  text-align: center;
}
</style>
