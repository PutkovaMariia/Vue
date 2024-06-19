<script>
export default {
  methods:{
    login(){
      this.$store.dispatch('login');
    },
    logout(){
      this.$store.dispatch('logout');
    },
  },
  computed:{
    isAuth(){
      return this.$store.getters.userIsAuthenticated;
    }
  }
}
</script>

<template>
<button @click="login" v-if="!isAuth">Log In</button>
<button @click="logout" v-if="isAuth">Log Out</button>
</template>

<style scoped>

</style>
