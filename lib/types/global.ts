export interface Testimonial {
  readonly title: string
  readonly content: string
  readonly image: string
  readonly imageAlt?: string
  readonly author: string
}

export type VueTestimonialsProps = {
  interval: number
  items: Testimonial[]
  arrowColor: string
  arrowWidth: number | string
  arrowHeight: number | string
  ballActiveColorClass?: string | null
  ballInactiveColorClass?: string | null
  ballWidth: number | string
  ballHeight: number | string
  titleClasses?: unknown | string
  authorClasses?: unknown | string
  contentClasses?: unknown | string
}
