<template >
  <svg class="icon"  aria-hidden="true" v-if="iconName" :class="{[`icon-${iPosition}`]:true,
    'loading':iState}"
  >
    <use v-bind:xlink:href="`#i-${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: "g-icon",
  props:{
    iconName:{},
    iPosition:{
      type: String,
      default:'left'
    },
   iState:{
      type:Boolean,
     default: false
   },
    validator(value) {
      if (!(value !== "left" || value !== "right")) {
        return;
      }
      console.log('false');
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.icon-right {
  order: 2;
  margin-left: .5rem;
  margin-right: 0;
}
.icon-left {
  order: -1;
  margin-right: .5rem;
}
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
  animation: spin 2s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>