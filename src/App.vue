<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './nav/TheHeader.vue';

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
