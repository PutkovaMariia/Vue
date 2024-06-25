<template>
  <section>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName">
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="enteredAge">
    </div>
    <button>Add User</button>
  </form>
  </section>
</template>

<script>
export default {
  emits: ['add-user'],
  data(){
    return{
      enteredName: '',
      enteredAge: '',
    }
  },
  methods: {
    submitData() {
      this.$emit('add-user', this.enteredName, this.enteredAge);
    }
  }
}
</script>

<style>
</style>