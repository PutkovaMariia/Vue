<template>
  <section>
    <h2>User name: {{ username }}</h2>
    <h3>Age : {{ userage }}</h3>
  </section>
</template>

<script>
export default {
  //props for managing parent and child components
  props:{
    username:{
      type: String,
      required: true,
    },
    userage:{
      type: Number,
      required: true,
    },
  }
}
</script>

