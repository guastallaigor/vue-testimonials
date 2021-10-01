/*eslint no-undef: "off"*/
import { mount } from '@vue/test-utils'
import Component from './VueTestimonials.vue'

describe('When I create the VueTestimonials component', () => {
  const items = [
    {
      title: 'Excelent',
      content:
        '"I just updated my site and it was so simple! Thanks for being so awesome!"',
      image: 'https://i.pravatar.cc/160?img=11',
      author: 'Jason',
    },
    {
      title: 'Outstanding',
      content:
        '"She was thoughtful during the entire process and exceed my expectations!"',
      image: 'https://i.pravatar.cc/160?img=31',
      author: 'Emily',
    },
    {
      title: 'The best',
      content:
        '"My new site is so much faster and easier to work with. Thanks guys!"',
      image: 'https://i.pravatar.cc/160?img=45',
      author: 'Amelia',
    },
  ]

  const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const createComponent = (props = {}, mocks = {}) => {
    return mount(Component, {
      props,
      global: {
        mocks,
      },
    })
  }

  it('should test clicking on the small ball', async () => {
    const wrapper = createComponent({ items })
    expect(wrapper.vm.active).toBe(1)
    wrapper.vm.goToTestimonial(1)
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.active).toBe(2)
  })

  it('should go to the next testimonial', async () => {
    const wrapper = createComponent({ items })
    expect(wrapper.vm.active).toBe(1)
    wrapper.vm.nextTestimonial()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.active).toBe(2)
  })

  it('should go to the previous testimonial', async () => {
    const wrapper = createComponent({ items })
    expect(wrapper.vm.active).toBe(1)
    wrapper.vm.previousTestimonial()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.active).toBe(3)
  })

  it('should stop the carousel', async () => {
    const wrapper = createComponent({ items, interval: 1 })
    expect(wrapper.vm.active).toBe(1)
    wrapper.vm.clearCarousel()
    await timeout(100)
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.active).toBe(1)
  })

  it('should match default component snapshot', () => {
    const wrapper = createComponent({ items })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
