
import button from "./button";
import Vue from "vue";
import icon from "./icon";
import buttonGroup from "./buttonGroup";
import Input from "./input";
import Toast from "./toast";
import plugin from "./plugin";
Vue.component("g-button",button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',Input)
Vue.component("g-toast",Toast)

Vue.use(plugin)

new Vue({
  "el":'#app',
  "data":{
    "message": '只有我一个人想笑吗？',
    "iconName":'settings',
    "position":'up',
    "icon":'download',
    "iconState":true,
    'loadingName':'loading',
    "value":'张三',
    btn:"点我",
    msg:"这是提示message"
  },

  methods: {
    handleToggle() {
      this.iconState = !this.iconState;
      console.log(this.$refs.theOne.whatState )
    },
    showToast() {
      this.$toast(this.msg)
    }
  }
})

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)
try {
  // 1. 测试 className
  {
    const Constructor = Vue.extend(button)
    console.log(Constructor);
    const Button = new Constructor(
      {
        propsData:{
          className:'xiazai'
        }
      }
    )
    Button.$mount()
    console.log(Button.$el);
    let ele = Button.$el.querySelector('use')
    console.log(ele);
    expect(ele.getAttribute('xlink:href')).to.eq('#i-xiazai')

  }
  // 2.测试loading
  {
    const Constructor = Vue.extend(button)
    console.log(Constructor);
    const Button = new Constructor(
      {
        propsData:{
          className:"xiazai",
          loadingIconName:'loading',
          whatState:false,

        }
      }
    )
    Button.$mount()
    console.log(Button.$el);
    let ele = Button.$el.querySelector('use')
    console.log(ele);
    // expect(ele.getAttribute('xlink:href')).to.eq('#i-loading')

  }
  // 3. 测试 position
  {
    const Constructor = Vue.extend(button)
    console.log(Constructor);
    const Button = new Constructor(
      {
        propsData:{
          className:"xiazai",
          loadingIconName:'loading',
          whatState:false,
          iconPosition:'right',

        }
      }
    )
    Button.$mount()
    console.log(Button.$el);
    let ele = Button.$el.querySelector('svg')
    console.log(ele.classList.contains('icon-right'));
    // expect(ele.getAttribute('xlink:href')).to.eq('#i-loading')

    // 打扫战场
    Button.$el.remove()
    Button.$destroy()

  }
  // 4.测试按钮上的事件
  {
    const Constructor = Vue.extend(button)
    console.log(Constructor);
    const Button = new Constructor(
      {
        propsData:{
          className:"xiazai",
          loadingIconName:'loading',
          whatState:false,
          iconPosition:'right',

        }
      }
    )
    Button.$mount()
    console.log(Button.$el);
    let spy = chai.spy(function (){
      console.log('click emit');
    });
    Button.$el.onclick = spy
    Button.$el.click()
    // 打扫战场
    expect(spy).to.have.been.called()
    Button.$el.remove()
    Button.$destroy()

  }
}catch (err) {
  console.log(err);
}finally {
  console.log('测试结束，看看是否有报错')
}
