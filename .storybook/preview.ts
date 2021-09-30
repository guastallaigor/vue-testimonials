import { Parameters } from '@storybook/addons'
import { themes } from '@storybook/theming'
import './storybook.css'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
}
