<template>
    <h1>Admin</h1>
</template>

<script>
    export default {
        data() {
            return {
                name:'chenx'
            }
        },
        //进入之前可以做的事
        // beforeRouteEnter (to, from, next) {
        //     next(vm=>{
        //         alert('hello,'+vm.name)
        //     })
        // }
        //进入之后可以做的事
        // beforeRouteLeave (to, from, next) {
        //     if(confirm('确定离开吗？')==true){
        //         next()
        //     }else{
        //         next(false)
        //     }
        // }
    }
</script>

<style scoped>

</style>