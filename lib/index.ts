import { App } from 'vue'
import VueTestimonials from './component/VueTestimonials.vue'

let installed = false

function install(Vue: App): void {
  if (installed) return
  installed = true
  Vue.component(VueTestimonials.name, VueTestimonials)
}

let GlobalVue: any

const plugin = { install }

if (window && 'Vue' in window) {
  GlobalVue = window['Vue']
} else if (global && 'Vue' in global) {
  GlobalVue = global['Vue']
}

if (GlobalVue && typeof GlobalVue.use === 'function') {
  GlobalVue.use(plugin)
}

export default { install }
