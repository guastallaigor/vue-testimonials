<template>
  <main class="d-container">
    <!-- Hero card -->
    <div class="relative sm:overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 hero-bg-wrapper">
        <div class="absolute inset-0 mix-blend-multiply" />
      </div>

      <!-- Content -->
      <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1
          class="
            text-center text-4xl
            font-extrabold
            tracking-tight
            sm:text-5xl
            lg:text-6xl
          "
        >
          <span class="block text-white">Vue Testimonials</span>
        </h1>

        <p
          class="
            mt-6
            max-w-lg
            mx-auto
            text-center text-xl
            sm:max-w-3xl
            text-white
          "
        >
          Vue 3 testimonials component made with Vite and TypeScript
        </p>

        <div
          class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
        >
          <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid">
            <nuxt-link
              to="/getting-started/installation"
              class="
                flex
                items-center
                justify-center
                px-4
                py-3
                transition
                duration-300
                hover:bg-primary-600
                ring-white
                focus:ring-2
                ring-offset-2 ring-offset-primary-800
                border border-transparent
                text-base
                font-medium
                rounded-md
                shadow-sm
                text-white
                bg-primary-500
                sm:px-8
              "
            >
              Get started
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero-bg-wrapper {
  background-image: url('@/static/bg.jpg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
