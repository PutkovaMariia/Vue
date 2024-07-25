<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps(
  [
    'userFirstNameInComp',
    'userLastNameInComp',
    'ageInComp'
  ]
);
// function userNameInComp(userFirstNameInComp, userLastNameInComp){
//   return `${userFirstNameInComp} ${userLastNameInComp}`;
// }
const userNameInComp = computed(() => {
  return props.userFirstNameInComp + ' ' + props.userLastNameInComp;
});
</script>

<template>
  <div>
    <h2>{{ userNameInComp }}</h2>
    <h3>{{ props.ageInComp }}</h3>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
