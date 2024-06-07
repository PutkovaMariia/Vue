<script>
export default {
  data() {
    return {
      users: ['Mariia', 'Masha', "Mary"]
    }
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user)
    }
  }
}
</script>

<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput"/>
    <button @click="addUser">Add user</button>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  margin-bottom: 3px;
}
.user-list-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}
.user-list-enter-active{
  transition: all 0.5s ease-out;
}
.user-list-enter-to,
.user-list-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.user-list-leave-active{
  transition: all 0.5s ease-in;
  position: absolute;
}
.user-list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.user-list-move{
  transition: transform 0.8s ease;
}
</style>
