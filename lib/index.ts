import { App } from 'vue'
import VueTestimonials from './component/VueTestimonials.vue'

let installed = false

const installFunction = (Vue: App) => {
  if (installed) return
  installed = true
  Vue.component(VueTestimonials.name, VueTestimonials)
}

const plugin = { install: installFunction }

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = (global as any).Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

VueTestimonials.install = installFunction

export default VueTestimonials
