<template>
  <button @click="handleClick" class="g-button">点我</button>
</template>
<script>
 export default {
   data() {
     return {
       xxx:''
     }
   },
   methods:{
     handleClick() {
       console.log('click true!')
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
</style>