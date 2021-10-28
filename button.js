
Vue.component('g-button',{
    template:`
        <button @click="handleClick" class="g-button">点我</button>
    `,
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
})