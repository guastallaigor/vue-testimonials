export type TEmit = (event: string, ...args: unknown[]) => void
export type TProps = { [key: string]: any }
export interface Testimonial {
  readonly title: string
  readonly content: string
  readonly image: string
  readonly imageAlt?: string
  readonly author: string
}
