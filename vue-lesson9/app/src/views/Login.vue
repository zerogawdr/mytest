<template>
    <Layout >

        <Content class="content">
            
        </Content>
        <Sider :width="450" class="sider">
            <Layout class="form">
                <Form  :model='form' :rules="formRule">
                    <FormItem>
                        <h1>管理系统登录</h1>
                    </FormItem>
                     <FormItem prop="username">
                        <Input :v-model="form.username" prefix='md-person' clearable />
                    </FormItem>
                    <FormItem>
                        <Input prefix="md-lock" clearable />
                    </FormItem>
                    <FormItem>
                        <Input prefix="md-image" clearable />
                       
                    </FormItem>
                    <FormItem>
                       <Button type="primary" long>登录</Button>
                    </FormItem>
                </Form>
            </Layout>
        </Sider>

    </Layout>

</template>

<script>
    export default {
        data() {
            return {
                form:{
                    username:'string'
                },
                formRule:{
                    username:[
                        {max:10,min:3,message:'长度错啦，必须3-10位',trigger:'blur'}
                    ]
                }
            }
        },
    }
</script>

<style scoped>
.sider{
    background: white;
    border-left: 1px solid #cccccc;
}
.form{
    padding: 20px;
    height:100%;
    justify-content: center
}
 .content{
     background: #dddddd
 }
</style>