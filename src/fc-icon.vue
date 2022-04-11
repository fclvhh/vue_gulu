<template>
  <svg aria-hidden="true" class="icon" :class="{loading:loadState}">
    <use xlink:href="#i-settings"></use>
  </svg>
</template>

<script>
export default {
  name: "fc-icon",
  data() {
    return {
      loadState: this.loadState
    }
  },
  props:["loadState"],
  mounted() {
    console.log(this.loadState)
  }

}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  order: 0;
  margin-right: .5rem;
}
.loading {
  animation: spinMy 1s linear infinite;
}
@keyframes spinMy {
    from {
      transform: rotate(0deg);
    }
  to {
    transform: rotate(360deg);
  }
}
</style>