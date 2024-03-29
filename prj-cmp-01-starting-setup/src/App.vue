<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import theResources from "@/components/learning-resources/TheResources.vue";
export default {
  components: {
    TheHeader,
    theResources
  }
}
</script>

<template>
  <the-header title="Remember Me"></the-header>
  <the-resources></the-resources>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
