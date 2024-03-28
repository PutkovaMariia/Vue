<script>
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  components: {ErrorAlert},
  data() {
    return {
      inputValid: false
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputValid = true;
      }
    },
    confirmError() {
      this.inputValid = false;
    }
  }
}
</script>

<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set goal</button>
    <teleport to="body">
      <error-alert v-if="inputValid">
        <h2>Input is invalid</h2>
        <p>Please, enter something</p>
        <button @click="confirmError">OK</button>
      </error-alert>
    </teleport>
  </div>
</template>

<style scoped>

</style>
