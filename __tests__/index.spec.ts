import { mount } from '@vue/test-utils'
// @ts-ignore: Vue component TS import error
import Component from '../lib/component/VueTestimonials.vue'

describe('vue-testimonials', () => {
  test('component can be created', () => {
    const wrapper = mount(Component)
    expect(wrapper.element).toMatchSnapshot()
  })
})
