<template>
  <section class="vue-testimonials">
    <div class="flex-row flex flex-nowrap text-white mt-6 pb-10 lg:pb-20 mb-40">
      <div class="mx-auto">
        <div @mouseover="clearCarousel" @mouseout="startCarousel">
          <div class="relative">
            <div class="w-full">
              <div
                v-for="(item, key) in items"
                :key="`${item.title}-${item.author}`"
                class="
                  item
                  transition-opacity
                  duration-300
                  ease-in-out
                  px-16
                  lg:px-0
                "
                :class="{
                  active: active === key + 1,
                  inactive: active !== key + 1,
                }"
              >
                <div
                  class="flex justify-center flex-wrap items-center text-center"
                >
                  <img
                    :src="item.image"
                    class="
                      mr-3
                      lazyload
                      rounded-full
                      object-cover
                      image
                      w-40
                      h-40
                    "
                    :alt="item.imageAlt || item.author"
                  />
                  <div class="media-body w-full">
                    <h1
                      :class="titleClasses"
                      class="
                        mt-12
                        text-2xl
                        uppercase
                        tracking-wider
                        font-normal
                      "
                    >
                      {{ item.title }}
                    </h1>
                    <h2
                      :class="contentClasses"
                      class="mt-5 text-lg"
                      v-html="item.content"
                    ></h2>
                    <div
                      :class="authorClasses"
                      class="mt-5 text-md font-bold select-none"
                    >
                      {{ item.author }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                mt-5
                w-full
                fill-current
                flex
                justify-center
                items-center
                flex-row
                z-20
                relative
              "
            >
              <ball
                v-for="(item, key) in items"
                :key="`${item.title}-${item.author}-B`"
                class="
                  overflow-hidden
                  cursor-pointer
                  hover:opacity-70
                  transition-opacity
                  ease-in-out
                  duration-300
                  mr-1
                  ball
                "
                :style="ballStyle"
                :class="{
                  [ballActiveColorClass || 'text-gray-600']: active === key + 1,
                  [ballInactiveColorClass || 'empty-circle']:
                    active !== key + 1,
                }"
                @click="goToTestimonial(key)"
              />
            </div>
            <a
              class="absolute top-1/2 left-0"
              role="button"
              rel="noopener noreferrer"
              aria-label="Previous arrow button"
              href="#"
              @click.prevent.stop="previousTestimonial"
            >
              <icon-chevronleft-lg
                :style="arrowStyle"
                class="
                  hover:opacity-70
                  transition-opacity
                  ease-in-out
                  duration-500
                  lg:w-full
                  arrow
                "
              />
            </a>
            <a
              class="absolute top-1/2 right-0"
              role="button"
              href="#"
              aria-label="Next arrow button"
              rel="noopener noreferrer"
              @click.prevent.stop="nextTestimonial"
            >
              <icon-chevronright-lg
                :style="arrowStyle"
                class="
                  hover:opacity-70
                  transition-opacity
                  ease-in-out
                  duration-500
                  lg:w-full
                  arrow
                "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { Testimonial, VueTestimonialsProps } from '@/types/global'
import IconChevronrightLg from '@/assets/images/icon-chevronright-lg.svg'
import IconChevronleftLg from '@/assets/images/icon-chevronleft-lg.svg'
import Ball from '@/assets/images/ball.svg'
import './style.css'

const defaultColor = '#FFFFFF'
const defaultArrowSize = '64px'
const defaultBallSize = '20px'

export default defineComponent({
  name: 'VueTestimonials',
  components: {
    IconChevronrightLg,
    IconChevronleftLg,
    Ball,
  },
  props: {
    interval: {
      type: Number,
      default: 8000,
    },
    items: {
      type: Object as () => Testimonial[],
      required: true,
    },
    arrowColor: {
      type: String,
      default: defaultColor,
    },
    arrowWidth: {
      type: [Number, String],
      default: defaultArrowSize,
    },
    arrowHeight: {
      type: [Number, String],
      default: defaultArrowSize,
    },
    ballActiveColorClass: {
      type: String,
      default: null,
    },
    ballInactiveColorClass: {
      type: String,
      default: null,
    },
    ballWidth: {
      type: [Number, String],
      default: defaultBallSize,
    },
    ballHeight: {
      type: [Number, String],
      default: defaultBallSize,
    },
    titleClasses: {
      type: [Object, String],
      default: null,
    },
    authorClasses: {
      type: [Object, String],
      default: null,
    },
    contentClasses: {
      type: [Object, String],
      default: null,
    },
  },
  setup(props: VueTestimonialsProps) {
    const time = ref<ReturnType<typeof setTimeout>>()
    const active = ref<number>(1)
    const arrowStyle = computed(() => ({
      color: props.arrowColor,
      width: props.arrowWidth,
      height: props.arrowHeight,
    }))
    const ballStyle = computed(() => ({
      width: props.ballWidth,
      height: props.ballHeight,
    }))

    const clearCarousel = (): void => {
      if (time.value) clearInterval(time.value)
    }

    const startCarousel = (): void => {
      time.value = setInterval(() => {
        nextTestimonial()
      }, props.interval)
    }

    const previousTestimonial = (): void => {
      if (active.value <= 1) {
        active.value = props.items?.length
        return
      }

      active.value -= 1
    }

    const nextTestimonial = (): void => {
      if (active.value >= props.items?.length) {
        active.value = 1
        return
      }

      active.value += 1
    }

    const goToTestimonial = (index: number): void => {
      active.value = index + 1
    }

    onMounted(() => {
      startCarousel()
    })

    onUnmounted(() => {
      clearCarousel()
    })

    return {
      clearCarousel,
      startCarousel,
      previousTestimonial,
      nextTestimonial,
      goToTestimonial,
      active,
      arrowStyle,
      ballStyle,
    }
  },
})
</script>
