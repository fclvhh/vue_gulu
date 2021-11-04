<template>
  <button class="g-button"  @click="changeState">
      <g-icon :i-state="whatState" :icon-name="loadingIconName" v-if="whatState===true && loadingIconName" ></g-icon>
      <g-icon :icon-name="className" :i-position="iconPosition" v-if="whatState===false && loadingIconName"></g-icon>
      <slot name="button-name"></slot>

  </button>
</template>
<script>

import icon from "./icon";

 export default {
   data() {
     return {
       xxx:'xxx'
     }
   },
   components:{
     "g-icon":icon
   },
   props:{
     className:{},
     iconPosition:{
       type:String,
       default:'left',
     },
     whatState:{},
     loadingIconName:{}
   },
   methods:{
     changeState() {
       this.$emit("toggle")
     },

   }
 }
</script>
<style lang="scss">
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  .icon-right {
    order: 2;
    margin-left: .5rem;
    margin-right: 0;
  }
  .icon-left {
    order: -1;
    margin-right: .5rem;
  }
}

.g-button:hover {
  border-color: var(--border-color-hover);
}

.g-button:active {
  background-color: var(--button-active-bg);
}

.g-button:focus {
  outline: none;
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
</style>