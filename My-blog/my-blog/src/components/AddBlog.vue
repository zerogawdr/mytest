<template>
    <div id="AddBlog">
        <h2>添加博客</h2>
        <form v-if="!summited">
            <label for="">博客标题</label>
            <input type="text" v-model="blog.title"  required >
            <label for="">博客内容</label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label >Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.categories">
                <label >Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label >React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label >Anglar4.js</label>
                <input type="checkbox" value="Anglar4.js" v-model="blog.categories">
            </div>
                <label for="">作者</label>
                <select v-model="blog.author">
                    <option  v-for="author in authors " :key="author" >
                        {{author}}
                    </option>
                </select>
                <button @click.prevent="post">添加博客</button>
        </form>
        <div v-if="summited">
            <h3>您的博客发布成功</h3>
        </div>
        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题:{{blog.title}}</p>
            <p>博客内容:</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="item in blog.categories" :key="item">
                    {{item}}
                </li>
            </ul>
            <p>作者:{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AddBlog',
        data() {
            return {
                blog:{
                    title:'',
                    content:'',
                    categories:[],
                    author:'',
                },
                authors:['陈旭','彭47','张志强'],
                summited:false
            }
        },
        methods: {
            post(){
                if(this.blog.title!=''){
                    this.$http.post("http://jsonplaceholder.typicode.com/posts",{
                    title:this.blog.title,
                    body:this.blog.content,
                    userId:1
                })
                 .then(data=>{
                     console.log(data);
                     this.summited=true;
                 })
                }else{
                    return
                }
            }
        },
    }
</script>

<style scoped>

    #AddBlog *{
        box-sizing: border-box;
    }
    #AddBlog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type='text'],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input{
         display: inline-block;
         margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #ffffff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #cccccc;
        margin: 30px 0;
    }
    #preview h3{
        margin-top: 10px;
    }
    textarea{
            height: 200px;
            resize: none
    }
</style>