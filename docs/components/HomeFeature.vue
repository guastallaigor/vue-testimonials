<template>
  <div>
    <div class="flex items-center justify-center">
      <span
        class="
          h-12
          w-12
          rounded-md
          bg-mint-lighter
          flex
          items-center
          justify-center
        "
      >
        <!-- Heroicon name: outline/inbox -->
        <Component :is="feature.icon" class="text-mint-darker" />
      </span>
    </div>
    <div class="mt-6">
      <h3 class="text-lg text-center font-medium">{{ feature.title }}</h3>
      <p class="mt-2 text-base text-center" v-html="feature.description" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
})
</script>
