<template>
    <div id="SingleBlog">
        <h1>{{blog.title}}</h1>
        <article>
            {{blog.body}}
        </article>
    </div>
</template>

<script>
    export default {
        name:'SingleBlog',
        data() {
            return {
                id:this.$route.params.id,
                blog:{}
            }
        },
        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
            .then(function(data){
                this.blog=data.body
            })
        },
    }
</script>

<style scoped>
    #SingleBlog {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eeeeee;
        border: 1px dotted #aaaaaa;
    }
</style>