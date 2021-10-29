<template>
  <button @click="handleClick" class="g-button">
    <template v-if="iconPosition==='left'">
      <svg class="icon" aria-hidden="true" v-if="className">
        <use v-bind:xlink:href="`#i-${className}`"></use>
      </svg>
      <slot name="button-name"></slot>
    </template>
    <template v-else-if="iconPosition==='right'" >
      <slot name="button-name"></slot>
      <svg class="icon" aria-hidden="true" v-if="className">
        <use v-bind:xlink:href="`#i-${className}`"></use>
      </svg>
    </template>
    <template v-else>
      <slot name="button-name"></slot>
      <svg class="icon" aria-hidden="true" v-if="className">
        <use v-bind:xlink:href="`#i-${className}`"></use>
      </svg>
    </template>
  </button>
</template>
<script>
 export default {
   data() {
     return {
       xxx:''
     }
   },
   props:['className','iconPosition'],
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
}
</style>