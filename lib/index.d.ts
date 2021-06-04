export interface Testimonial {
  readonly title: string
  readonly content: string
  readonly image: string
  readonly imageAlt?: string
  readonly author: string
}

declare module 'vue-testimonials' {
  const _default: import('vue').DefineComponent<
    {
      interval: {
        type: NumberConstructor
        default: number
      }
      items: {
        type: () => Testimonial[]
        required: true
      }
      arrowColor: {
        type: StringConstructor
        default: string
      }
      arrowWidth: {
        type: (NumberConstructor | StringConstructor)[]
        default: string
      }
      arrowHeight: {
        type: (NumberConstructor | StringConstructor)[]
        default: string
      }
      ballActiveColorClass: {
        type: StringConstructor
        default: null
      }
      ballInactiveColorClass: {
        type: StringConstructor
        default: null
      }
      ballWidth: {
        type: (NumberConstructor | StringConstructor)[]
        default: string
      }
      ballHeight: {
        type: (NumberConstructor | StringConstructor)[]
        default: string
      }
      titleClasses: {
        type: (StringConstructor | ObjectConstructor)[]
        default: null
      }
      authorClasses: {
        type: (StringConstructor | ObjectConstructor)[]
        default: null
      }
      contentClasses: {
        type: (StringConstructor | ObjectConstructor)[]
        default: null
      }
    },
    {
      clearCarousel: () => void
      startCarousel: () => void
      previousTestimonial: () => void
      nextTestimonial: () => void
      goToTestimonial: (index: number) => void
      active: import('vue').Ref<number>
      arrowStyle: import('vue').ComputedRef<{
        color: string
        width: string | number
        height: string | number
      }>
      ballStyle: import('vue').ComputedRef<{
        width: string | number
        height: string | number
      }>
    },
    unknown,
    unknown,
    unknown,
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    Record<string, any>,
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      {
        interval: number
        items: Testimonial[]
        arrowColor: string
        arrowWidth: string | number
        arrowHeight: string | number
        ballActiveColorClass: string
        ballInactiveColorClass: string
        ballWidth: string | number
        ballHeight: string | number
        titleClasses: null
        authorClasses: null
        contentClasses: null
      } & unknown
    >,
    {
      interval: number
      arrowColor: string
      arrowWidth: string | number
      arrowHeight: string | number
      ballActiveColorClass: string
      ballInactiveColorClass: string
      ballWidth: string | number
      ballHeight: string | number
      titleClasses: null
      authorClasses: null
      contentClasses: null
    }
  >

  export default _default
}
