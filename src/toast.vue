<template>
  <div class="toast">
    <slot></slot>
    <div class="line" ref="line"></div>
    <span v-if="closeButton"  class="close"  @click="onClickHandle">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: "g-toast",
  props: {
    // 自动关闭
    autoClose:{
      type: Boolean,
      default: true,
    },
    // 关闭时延
    autoCloseDelay:{
      type: Number,
      default:5
    },
    closeButton:{
      type:Object,
      default() {
        return {
          text:"关闭",
          callback:(toast)=>{
            toast.close()
          }
        }
      }
    }
  },
  mounted() {
    if(this.autoClose) {
      setTimeout(()=>{
        this.close();
      },this.autoCloseDelay * 1000)
    }
  },

  methods:{
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickHandle() {
      this.close();
      this.closeButton.callback()
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
}

.close {
  padding-left: 16px;
  flex-shrink: 0;
}
.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>