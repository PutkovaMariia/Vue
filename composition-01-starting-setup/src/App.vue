<template>
  <section class="container">
    <UserData :user-first-name-in-comp="firstName" :user-last-name-in-comp="lastName" :age-in-comp="age">
      <slot>hello from slot</slot>
    </UserData>
    <button @click="setNewAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import UserData from '@/components/UserData.vue';

// const userName = ref('Mariia');
const age = ref(30);
// const user = ref({
//   name: 'Mariia',
//   age: 30
// });
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

const fullName = computed(()=> firstName.value + ' ' + lastName.value);

watch([age, fullName], function(newVals, oldVals){
  console.log('newVals age ' + newVals[0]);
  console.log('oldVals age ' + oldVals[0]);
})

// setTimeout(function() {
//   user.value.name = 'Masha';
//   user.value.age = 31;
// }, 2000);

function setNewAge(){
  age.value = 31;
}

function setLastName(){
  lastName.value = lastNameInput.value.value;
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
