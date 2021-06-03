<div align="center">
  <img src="./.github/logo.png" width="200px">
  <h1>Vue Testimonials</h1>
</div>

<p align="center">
  Vue Testimonials is a Vue 3 testimonials component made with Vite and TypeScript
</p>

[![Version](https://img.shields.io/npm/v/vue-testimonials.svg)](https://github.com/guastallaigor/vue-testimonials/)
[![Downloads](https://img.shields.io/npm/dt/vue-testimonials.svg)](https://github.com/guastallaigor/vue-testimonials/)
[![Dependencies](https://img.shields.io/david/guastallaigor/vue-testimonials.svg)](https://github.com/guastallaigor/vue-testimonials/)

## Demo

[![Edit Checkbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o4o10xynoz)

## How to install

### npm

```bash
$ npm install vue-testimonials --save
```

### yarn (recommended)

```bash
$ yarn add vue-testimonials
```

## Quick start

### Vue.js

You can import in your `main.js` file

```js
import { createApp } from "vue";
import VueTestimonials from "vue-testimonials";

createApp.use(VueTestimonials);
```

Or locally in any component

```js
import VueHorizontalTimeline from "vue-testimonials";

export default {
  components: {
    VueHorizontalTimeline,
  },
};
```

## Basic usage

```html
<template>
  <vue-testimonials :items="items" />
</template>

<script>
  export default {
    data() {
      const example1 = {
        title: "Title example 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.",
      };
      const example2 = {
        title: "Title example 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.",
      };
      const example3 = {
        title: "Title example 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio.",
      };
      const items = [example1, example2, example3];

      return { items };
    },
  };
</script>
```

## Props

| Property name       | Type    | Default   | Description                                                                                    |
| ------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------- |
| items               | Array   | null      | Array of objects to be displayed. Must have at least a content property                        |
| item-selected       | Object  | {}        | Object that is set when it is clicked. Note that `clickable` prop must be set to true          |
| item-unique-key     | String  | ''        | Key to set a blue border to the card when it is clicked (`clickable` prop must be set to true) |
| title-attr          | String  | 'title'   | Name of the property inside the objects, that are in the items array, to set the cards title   |
| title-centered      | Boolean | false     | Centralizes the cards title                                                                    |
| title-class         | String  | ''        | If you want to set a custom class to the cards title, set it here                              |
| title-substr        | String  | 18        | Number of characters to display inside the cards title. Above this, will set a '...' mask      |
| content-attr        | String  | 'content' | Name of the property inside the objects, that are in the items array, to set the cards content |
| content-centered    | Boolean | false     | Centralizes all the cards content text                                                         |
| content-class       | String  | ''        | If you want to set a custom class to the cards content, set it here                            |
| content-substr      | String  | 250       | Number of characters to display inside the cards content. Above this, will set a '...' mask    |
| min-width           | String  | '200px'   | Min-width of the timeline                                                                      |
| min-height          | String  | ''        | Min-height of the timeline                                                                     |
| timeline-padding    | String  | ''        | Padding of the timeline                                                                        |
| timeline-background | String  | '#E9E9E9' | Background color of the whole timeline                                                         |
| line-color          | String  | '#03A9F4' | Color of the line inside the timeline                                                          |
| clickable           | Boolean | true      | Makes the card clickable that returns the object                                               |

## Development

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/guastallaigor/vue-testimonials/issues)

> **Note**: Contributions are very welcomed, however is very important to open a new issue using the issue template **before** you start working on anything, so we can discuss it before hand

Fork the project and enter this commands in your terminal

```sh
$ git clone https://github.com/YOUR_GITHUB_USERNAME/vue-testimonials.git
$ cd vue-testimonials
$ yarn
```

### Commitlint

This project follows the [commitlint](https://github.com/conventional-changelog/commitlint) guidelines, with minor changes.

You can commit using `npm run commit` to help you with that.

There's a `pre-push` hook that checks for lint errors before you can push it.

If an error occurs, you can use the `npm run commit:retry` command that runs the previous `npm run commit` that you already filled.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C1C63QCB8)

## License

MIT © [guastallaigor](https://github.com/guastallaigor/vue-testimonials/blob/master/LICENSE)
