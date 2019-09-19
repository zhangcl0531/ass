<template>
    <div class="login">
       <div class="wrapper">
           <div class="title">
               ASS
           </div>
           <div class="row">
               <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
           </div>
           <div class="row">
               <el-input placeholder="请输入密码" v-model="passwd" show-password></el-input>
           </div>
            <div class="login-button">
                <div class="row">
                    <el-button round>取消</el-button>
                    <el-button type="primary" round :loading=loading @click="login">登录</el-button>
                </div>
           </div>
            <div class="title-m">
                黑桃运维管理系统 © 2019
            </div>
       </div>
    </div>
</template>


<script>
export default {
    name:'login',
    data() {
        return {
            username:'',
            passwd:'',
            loading:false,
            posts:''
        }
    },
    methods: {
        login(){
            this.loading = true
            let info = {
                "username":this.username,
                'passwd':this.passwd
            }
            this.$http.post('http://rap2api.taobao.org/app/mock/231655/login',info)
            .then(res=>{
                this.loading = false
                console.log(res.data)
                this.posts = res.data
                console.log(this.posts.code) 
                if(this.posts.code < 300){
                    this.$router.push({name:'index'})
                }else{
                    this.errormessage(this.posts.error)
                }
            })
            .catch(function(err){
                console.log(err)
            })
        },
        errormessage(error) {
        this.$message({
            showClose: true,
            message: error,
            type: 'error'
        })
      }
    },
}
</script>


<style  scoped>
    .login{
        /* border: 1px solid red; */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
    .wrapper {
        /* border: 1px solid #ddd; */
        padding: 50px
    }
    .row {
            margin: 10px 0;
        }
    .title {
        text-align: center;
        font-size: 130px;
        font-weight: 800;
        color: #409EFF;;
    }
    .login-button {
        text-align: center;
    }
    .title-m {
        text-align: center;
        color: #676a6c;
        padding: 10px;
        font-size: 10px;
    }

    .el-button.is-round {
    padding: 14px 40px;
    }
</style>