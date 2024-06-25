<template>
  <active-user
      :username="user.nameMain"
      :userage="user.ageMain"
  ></active-user>
  <!--we listen for add-user from addUser component
  and when it has triggered there we will call
  addUser method-->
  <user-data @add-user="addUser"></user-data>
</template>

<script>
export default {
  data(){
    return{
      user:{
        nameMain: 'Mariia',
        ageMain: 29,
      },
    }
  },
  methods:{
    addUser (name, age){
      this.user = {
        nameMain: name,
        ageMain: +age,
      };
    }
  }
}
</script>

<style>
html{
  font-family: sans-serif;
}
section{
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>