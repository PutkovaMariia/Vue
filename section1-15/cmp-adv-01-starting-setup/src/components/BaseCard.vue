<script>
export default {
mounted() {
  console.log(this.$slots);
}
}
</script>

<template>
<div>
  <header v-if="$slots.header">
    <slot name="header">
<!--      <h2>The default</h2> --
if we don't assign any slot to 'header' (in this case) in other files,
 the content inside would be visible by default-->
    </slot>
  </header>
  <slot></slot>
</div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
