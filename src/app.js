
import button from "./button";
import Vue from "vue";
import icon from "./icon";
import buttonGroup from "./buttonGroup";
Vue.component("g-button",button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',buttonGroup)
new Vue({
  "el":'#app',
  "data":{
    "message": '只有我一个人嘛？',
    "iconName":'settings',
    "position":'up',
    "icon":'download',
    "iconState":true,
    'loadingName':'loading',

  },
  methods: {
    handleToggle() {
      this.iconState = !this.iconState;
      console.log(this.$refs.theOne.whatState )
    }
  }
})
