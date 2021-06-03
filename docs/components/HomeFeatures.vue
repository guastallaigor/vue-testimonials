<template>
  <div class="d-container-content py-16 sm:pt-20 sm:pb-24 relative">
    <div
      class="
        grid grid-cols-1
        gap-x-6 gap-y-12
        sm:grid-cols-2
        lg:grid-cols-3
        lg:gap-x-8 lg:gap-y-16
      "
    >
      <HomeFeature
        v-for="(feature, index) of features"
        :key="index"
        :feature="feature"
      />
    </div>
    <footer
      class="
        flex flex-col
        z-0
        relative
        dark:bg-gray-900
        pt-10
        dark:text-white
        text-gray-900
      "
    >
      <section class="flex flex-col justify-center items-center text-center">
        <p>
          This documentation is a fork of
          <a
            href="https://image.nuxtjs.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nuxt Image Link"
            class="text-base font-normal hover:underline"
            style="color: #00bb6f"
            >Nuxt/Image</a
          >
        </p>
        <p class="mt-4">
          <a
            href="https://github.com/guastallaigor"
            target="_blank"
            aria-label="Github author link with date"
            rel="noopener noreferrer"
            class="
              text-base
              font-normal
              flex flex-row flex-nowrap
              hover:underline
            "
            >{{ new Date().getFullYear() }} &copy;
            <span
              class="
                transition-all
                duration-300
                ease-in-out
                flex flex-nowrap flex-row
                items-center
                pl-1
              "
            >
              guastallaigor</span
            ></a
          >
        </p>
      </section>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

const vite =
  '<a href="https://vitejs.dev" aria-label="Vite Link" rel="noopener noreferrer" target="_blank" class="hover:underline text-blue-500">Vite</a>'
const vue3 =
  '<a href="https://v3.vuejs.org" aria-label="Vue 3 Link" rel="noopener noreferrer" target="_blank" class="hover:underline text-blue-500">Vue 3</a>'
const typescript =
  '<a href="https://www.typescriptlang.org" aria-label="TypeScript Link" rel="noopener noreferrer" target="_blank" class="hover:underline text-blue-500">Typescript</a>'

export default defineComponent({
  setup() {
    const features = [
      {
        title: 'Vue 3 and TypeScript support',
        description: `Vue Testimonials supports ${vue3}, ${vite} and ${typescript} projects`,
        icon: 'IconSupport',
      },
      {
        title: 'Lightweight',
        description: `Very fast and lightweight made with the power of ${vite}`,
        icon: 'IconLightningBolt',
      },
      {
        title: 'Customizable',
        description:
          'You can customize it in several different ways, with a number of available props and classes',
        icon: 'IconPencilAlt',
      },
    ]
    return {
      features,
    }
  },
})
</script>
