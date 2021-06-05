import { App } from 'vue'
import VueTestimonials from './component/VueTestimonials.vue'

let installed = false

function installFunction(Vue: App): void {
  if (installed) return
  installed = true
  Vue.component(VueTestimonials.name, VueTestimonials)
}

let GlobalVue = null

const plugin = { install: installFunction }

if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = (global as any).Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default { install: installFunction }
