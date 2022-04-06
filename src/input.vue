<template>
  <div class="container">
    <input type="text" :value="value" :disabled="disabled"
        :readonly="readonly"
    >
  </div>
</template>

<script>
export default {
  name: "xxx-input",
  props:{
    value:{
      type:String
    },
    disabled: {
      type:Boolean,
      default:false
    },
    readonly: {
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped lang="scss">

  $height:32px;
  $border-color:#999;
  $border-color-hover:#666;
  $border-radius:4px;
  $font-size:12px;
  $box-shadow-color:rgba(0,0,0.5);
  .container {
    margin-bottom: 20px;
    font-size: $font-size;
    display: inline-block;
    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border: 1px solid $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled]{
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
      &[readonly]{
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
    }
  }
</style>