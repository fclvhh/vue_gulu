<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabs-item",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item {

}
</style>