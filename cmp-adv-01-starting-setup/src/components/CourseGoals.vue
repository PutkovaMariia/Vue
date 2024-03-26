<script>
export default {
data(){
  return{
    goals: ['finish the course', 'learn vue']
  }
}
}
</script>

<template>
<ul>
  <li v-for="goal in goals" :key="goal">
    <slot :item="goal"></slot>
  </li>
</ul>
</template>

<style scoped>

</style>
