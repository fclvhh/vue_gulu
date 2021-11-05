<template>
  <div class="g-button-group">
    <slot :option1="this.nameAndPosition" :option2="this.nameAndPosition2"></slot>
  </div>
</template>

<script>
import gButton from "./button"

export default {
  name: "buttonGroup",
  data() {
    return {
      xxx: '',
      nameAndPosition: 'left',
      nameAndPosition2: 'right'
    }
  },
  components: {
    "g-button": gButton,
  }
}
</script>

<style scoped lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
  &:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  &:last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }


}

</style>