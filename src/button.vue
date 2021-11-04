<template>
  <button @click="handleClick" class="g-button" >

      <svg class="icon" aria-hidden="true" v-if="className" :class="{[`icon-${iconPosition}`]:true}">
        <use v-bind:xlink:href="`#i-${className}`"></use>
      </svg>
      <slot name="button-name"></slot>

  </button>
</template>
<script>
 export default {
   data() {
     return {
       xxx:''
     }
   },
   props:{
     className:{},
     iconPosition:{
       type:String,
       default:'left'
     }
   },
   methods:{
     handleClick() {
       console.log('click true!')
       console.log(this.iconPosition==='right')
     }
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