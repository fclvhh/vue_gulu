<template>
  <div class="tabs-body">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "tabs-nav"
}
</script>

<style scoped lang="scss">
.tabs-nav {

}
</style>