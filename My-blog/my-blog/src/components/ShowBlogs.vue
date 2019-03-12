<template>
    <div  v-theme="'wide'" id="ShowBlogs">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div v-for="blog in filteredBlogs" class="single-blog"  >
            <router-link :to="'/blog/'+blog.id">
            <h2 v-chen>{{blog.title | to-uppercase}}</h2>
            </router-link >
            <article>
                {{blog.body |snippet}}
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ShowBlogs',
        data() {
            return {
                blogs:[],
                search:''
            }
        },
        created() {
            this.$http.get("./../static/posts.json")
            .then(data=>{
                // console.log(data);
               this.blogs= data.body.slice(0,10);
               console.log(this.blogs)
            })
        },
        computed: {
            filteredBlogs(){
                return this.blogs.filter(blog=>{
                    return  blog.title.match(this.search);
                })
            }
        },
        filters:{
            // "to-uppercase":function(value){
            //     return value.toUpperCase();
            // },
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        directives:{
            "chen":{
                bind(el,binding,vnode){
                    el.style.color='#'+Math.random().toString(16).slice(2,8)
                }
            }
        }
    }
</script>

<style scoped>
    #ShowBlogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eeeeee;
    }
    #ShowBlogs input{
        width: 100%;
        height: 30px;
        border-radius: 5px;
        border: 1px #cccccc solid;
        outline: none;
        text-indent: 20px;
    }
    #ShowBlogs input::placeholder{
        text-align: center;
    }
</style>