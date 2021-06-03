<template>
  <div id="testimonials">
    <img src="@/static/1.png" alt="First image" />
    <img class="middle-image" src="@/static/2.png" alt="Second image" />
    <img class="last-image" src="@/static/3.png" alt="Third image" />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: #111827;
}
#app {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
#main-title {
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: 70px;
  text-align: center;
}
.middle-image {
  margin: 50px 0;
}
.last-image {
  margin-bottom: 50px;
}
</style>
