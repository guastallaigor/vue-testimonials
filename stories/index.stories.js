import VueTestimonials from '../lib/component/VueTestimonials.vue'

export default {
  title: 'VueTestimonials',
  component: VueTestimonials,
  argTypes: {
    interval: { control: 'number' },
    items: { control: 'object' },
    arrowColor: { control: 'color' },
    arrowWidth: { control: 'number' },
    arrowHeight: { control: 'number' },
    ballActiveColorClass: { control: 'text' },
    ballInactiveColorClass: { control: 'text' },
    ballWidth: { control: 'number' },
    ballHeight: { control: 'number' },
    titleClasses: { control: 'text' },
    authorClasses: { control: 'text' },
    contentClasses: { control: 'text' },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      inlineStories: true,
    },
  },
}

const Template = (args) => ({
  components: { VueTestimonials },
  setup() {
    return { args }
  },
  template: '<vue-testimonials v-bind="args" />',
})

export const Main = Template.bind({})
Main.args = {
  interval: 8000,
  items: [
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
  ],
}
