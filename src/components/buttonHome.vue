<style lang="less">
@import "./login.less";
</style>
<template>
    <div>
        <div class="loginDiv">
            <i-button type="ghost" icon="monitor" class="screenfull-button" @click="screenFull">全屏</i-button>
            <!-- 登录button -->
            <i-button type="ghost" class="login-button" @click="loginModal">登录</i-button>
        </div>
            
        <!-- 登录Modal -->
        <Modal class="modal loginModal_bg" v-model="login_modal" width="400">
            <p slot="header" style="color:rgb(241, 123, 123);   text-align:center;font-size:1.25rem;">
                <span class>欢迎登录</span>
            </p>
            <div>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <br>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <br>
                        <!-- <FormItem>
                            <Button class="login-bt" @click="handleSubmit" type="ghost" long>登录</Button>
                        </FormItem>-->
                    </Form>

                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </div>

            <div slot="footer">
                <i-button
                    type="circle"
                    size="large"
                    style="width:100%;background-color:rgb(241, 123, 123);color:white;"
                    @click="handleSubmit"
                >登录</i-button>
            </div>
        </Modal>
        <br><br><br>
        <div class="PageDiv">
            <h1 class="h1Font">{{ msg }}</h1>
            <br><br><br>
            <div class="buttonDiv">
                
                <div class="left-part">
                    <div>
                        <div class="left1">
                        <!-- 自主招生是page1 -->
                            <i-button id="bt1" @click="toIndependentRecruitment" icon="paper-airplane" type="primary" class="students">自主招生</i-button>
                        
                            <div>
                                <!-- 政策解读是page2 -->
                                <div class="left1-1">
                                    <i-button id="bt2" @click="toPolicy" type="primary" icon="android-document" class="policy">政策解读</i-button>
                                </div>
                                <!-- 名校直通车是page3 -->
                                <div class="right1-1">
                                    <i-button @click="toEliteSchool" type="primary" icon="key" class="direct">名校直通车</i-button>
                                </div>
                            </div>
                        </div>
                        <!-- 左上角左右部分的分割！！！！！！！！！！！！！！！ -->
                        <div class="right1">
                            <!-- 志愿填报（专业指导）是page4 -->
                            <i-button @click="toVoluntaryReporting" type="primary" icon="clipboard" class="voluntary">专业指导</i-button>
                        </div>
                    </div>
                    <!-- 左下角部分！！！！！！！！ -->
                    <div>
                        <div class="left2">
                            <i-button @click="toEnrollmentGuide" icon="document-text" type="primary" class="regulation">招生简章</i-button>
                        </div>
                        <div class="right2">
                        <i-button @click="toProfessionTest" icon="ios-paw" type="primary" class="test">职业测试</i-button>
                        </div>
                    </div>
                </div>
                <!-- 左右部分分割！！！！！！！ ！！-->
                <div class="right-part">
                    <!-- 查看成绩是page7 -->
                    <div>
                        <i-button @click="toCheckScores" type="primary" icon="ios-search" class="score">查看成绩</i-button>    
                    </div>
                        <!-- 专业详解是page8 -->
                    <div>
                        <i-button @click="toMajorExplanation" type="primary" icon="document-text" class="major">专业详解</i-button>
                    </div>
                </div>    
            </div>
        </div>

        <Button class="font" type="text" @click="signOut">
            <Icon type="android-arrow-back" size="32" color="#fff"></Icon>退出登录
        </Button>
    </div>
</template>

<script>
import screenfull from "screenfull";
import Cookies from "js-cookie";

export default {
    name: "buttonHome",
    data() {
        return {
            msg: "服务中心自助终端",
            login_modal: false,
            form: {
                userName: "",
                password: ""
            },
            rules: {
                userName: [
                    { required: true, message: "账号不能为空", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "密码不能为空", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        screenFull() {
            if (!screenfull.enabled) {
                // 如果不允许进入全屏，发出不允许提示
                this.$message({
                    message: "不支持全屏",
                    type: "warning"
                });
                return false;
            }
            screenfull.toggle();
            this.$message({
                message: "全屏啦",
                type: "success"
            });
        },
        loginModal() {
            this.login_modal = true;
        },
        handleSubmit() {
            this.$http({
                method:'post',
                url:"https://fantuan.wxhulu.com:8086/home/login",
                data:{
                    "userName":this.form.userName,
                    "password":this.form.password
                }
            }).then(resp =>{
                if(resp.data.code==123){
                    this.$Message.error("没有此用户");
                }else if(resp.data.code==124){
                    this.$Message.warning("密码错误请重新输入");
                }else if(resp.data.code==200){
                    this.$Message.success("亲爱的，您已登陆");
                    this.login_modal = false;
                }
                
            }).catch(resp => {
                console.log('请求失败：'+resp.status+','+resp.statusText);
              });
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    Cookies.set("user", this.form.userName);
                    Cookies.set("password", this.form.password);
                    if (this.form.userName === "iview_admin") {
                        Cookies.set("access", 0);
                    } else {
                        Cookies.set("access", 1);
                    }
            
                }
            });
        },
        signOut() {
            Cookies.remove('userName')
            Cookies.remove('userId')
            this.$Message.info("亲爱的, 您已退出");
        },
        toIndependentRecruitment() {
            this.$router.push({
                //自主招生
                path:
                    "/buttonHome/independentRecruitment/main/independentRecruitmentPolicy"
            });
        },
        toPolicy() {
            this.$router.push({
                //政策解读
                path: "/buttonHome/policy"
            });
        },
        toMajorExplanation() {
            this.$router.push({
                //专业详解
                path: "/buttonHome/majorExplanation"
            });
        },
        toEnrollmentGuide() {
            this.$router.push({
                //招生简章
                path: "/buttonHome/enrollmentGuide"
            });
        },
        toEliteSchool() {
            this.$router.push({
                //名校直通车
                path: "/buttonHome/eliteSchool"
            });
        },
        toVoluntaryReporting() {
            this.$router.push({
                //志愿填报查询
                path: "/buttonHome/voluntaryReporting"
            });
        },
        toProfessionTest() {
            this.$router.push({
                //职业测试
                path: "/buttonHome/professionTest"
            });
        },
        toCheckScores() {
            this.$router.push({
                //查看成绩
                path: "/buttonHome/checkScores"
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginDiv{
    float: right;
}
.h1Font{
    color: #f0f8ff;
    font-size:2.5rem;
}
.PageDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}
.buttonDiv{
    width: 71.9rem;
}
.left-part{
  float: left;
}
.left1{
  float:left;
}
.right1{
  float:right;
}
.left1-1{
  float:left;
}
.right1-1{
  float:right;
}
.left2{
  float:left;
}
.right2{
  float:right;
}
.right-part{
  float:right;
}

.screenfull-button {
    opacity: 0;
}
.login-bt {
    background-color: #ff9999;
}
.login-tip {
    font-size: 0.625rem;
    text-align: center;
    color: #c3c3c3;
}
.font {
    color: #f0f8ff;
}
/* .allButtons {
    padding: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;
    text-align: center;
    margin: 0 auto;
} */
.students {
    font-size: 250%;
    border-radius: 0.3rem;
    width: 37.5rem;
    height: 9.375rem;
    border: none;
    background-color: rgb(99, 146, 235);
    color: #f0f8ff;
}
.voluntary {
    background-color: rgb(51, 218, 162);
    border-radius: 0.3rem;
    width: 15.625rem;
    height: 25rem;
    font-size: 250%;
    color: #f0f8ff;
}
.score {
    font-size: 250%;
    width: 18.75rem;
    height: 25rem;
    border-radius: 0.3rem;
    background-color: #4d438a;
    color: #f0f8ff;
}
.policy {
    font-size: 250%;
    width: 18.75rem;
    height: 15.625rem;
    border-radius: 0.3rem;
    background-color: #2e2c2c;
    color: #f0f8ff;
}
.direct {
    font-size: 250%;
    width: 18.75rem;
    height: 15.625rem;
    border-radius: 0.3rem;
    background-color: rgb(241, 123, 123);
    color: #f0f8ff;
}
.regulation {
    font-size: 250%;
    width: 18.75rem;
    height: 12.5rem;
    border-radius: 0.3rem;
    background-color: #f0622f;
    color: #f0f8ff;
}
.test {
    font-size: 250%;
    width: 34.375rem;
    height: 12.5rem;
    border-radius: 0.3rem;
    background-color: rgb(247, 139, 193);
    color: #f0f8ff;
}
.major {
    font-size: 250%;
    width: 18.75rem;
    height: 12.5rem;
    border-radius: 0.3rem;
    background-color: #2d2d8b;
    color: #f0f8ff;
}
.shadow {
    box-shadow: 0.0625rem 0.4375rem 1.5625rem #fd8fd9;
}
</style>
