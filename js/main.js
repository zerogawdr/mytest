Vue.component("greeting", {
    template:`
    <p>
    {{name}}:大家哈，给大家介绍我的女朋友
    <button v-on:click="changeName">改名</button>
    </p>`,
    data:function(){
        return {
            name:"鹿晗"
        }
    },
    methods: {
        changeName:function(){
            this.name="陈旭"
        }
    },
})

new Vue({
    el:'#vue-app-one'
});
new Vue({
    el:'#vue-app-tow'
})