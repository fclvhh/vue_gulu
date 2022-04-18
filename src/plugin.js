import Toast from './toast';
export default {
  install(Vue,options) {
    Vue.prototype.$toast = function (message) {
      console.log("I am toast !")
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:{
          closeButton:{
            text:"知道了@@",
            callback() {
              console.log('user say  know!')
            }
          }
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el) // Vue 自然应该插入组件，而不是div
    }
 }
}