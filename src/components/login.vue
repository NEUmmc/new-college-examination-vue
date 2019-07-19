<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">

        <i-button type="ghost" icon="monitor" class="screenfull-button" @click="screenFull">全屏</i-button>
        
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button class="login-bt" @click="send" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
                
            </Card>
        </div>
    </div>
</template>

<script>
import screenfull from 'screenfull'
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            form: {
                userName: 'iview_admin',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        send(){
            console.log("LSKDMNOLASKD")
            this.$http({
                method:'post',
                url:"http://118.202.11.253:8085/home/login",
                data:{
                    "userName":form.userName,
                    "password":form.password
                }
            }).then(function(resp){
                console.log(resp.data);
            }).catch(resp => {
                console.log('请求失败：'+resp.status+','+resp.statusText);
              });
            },
        screenFull(){
            if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
                this.$message({
                    message: '不支持全屏',
                    type: 'warning'
                })
                return false
            }
                screenfull.toggle()
                this.$message({
                    message: '全屏啦',
                    type: 'success'
                })
        },
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        path: '/buttonHome'                        
                    });
                    this.$Message.success('亲爱的，您已登陆');

                }
            });
        },
    }
};
</script>

<style>
.screenfull-button{
    opacity: 1;
}
.login-bt{
    background-color: #FF9999 ;
}

</style>
