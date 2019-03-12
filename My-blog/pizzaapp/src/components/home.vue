<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center mt-3">
            <div class="background">
                <h1>欢迎大家品尝pizza!</h1>
                <h2>这里有你非常喜欢的pizza</h2>
            </div>
        </div>      
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #home{
        background: url('../../src//assets/timg.jpg') no-repeat;
        background-size: cover;
        height: 85vh;
        padding: 10%;
    }
    h1,h2{
        margin: 6%
    }
    .background{
        background: #eeeeee;
        opacity: .4;
        max-width: 70vw;
        /* margin: 0 auto; */
        margin-top: 150px;
        padding: 0;
    }
</style>