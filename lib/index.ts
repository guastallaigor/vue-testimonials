// Import vue component
import VueTestimonials from './component/VueTestimonials.vue'

// install function executed by Vue.use()
const install = function (Vue: any) {
  if ((install as any).installed) return
  ;(install as any).installed = true
  Vue.component('VueTestimonials', VueTestimonials)
}

// Create module definition for Vue.use()
const plugin = { install }

// To auto-install when vue is found
let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = (global as any).Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
VueTestimonials.install = install

// Export component by default
export default VueTestimonials

// Export single (backwards compatibility)
export { VueTestimonials }
