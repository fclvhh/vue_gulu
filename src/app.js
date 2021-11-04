
import button from "./button";
import Vue from "vue";
Vue.component("g-button",button)
new Vue({
  "el":'#app',
  "data":{
    "message": '只有我一个人嘛？',
    "iconName":'settings',
    "position":'',
  }
})
