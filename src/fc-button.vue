<template>
  <button @click="changeIconState">
    <slot name="btn-name"></slot>
    <fcIcon :loadState="iconState"></fcIcon>
  </button>
</template>

<script>
import fcIcon from "./fc-icon"
export default {
  name: "fc-button",
  data() {
    return {
      iconState:false
    }
  },
  methods:{
    changeIconState() {
      console.log('click!')
      this.iconState = !this.iconState
    }
  },
  components:{
    fcIcon:fcIcon
  }
}
</script>

<style scoped>

</style>