<template>
    <div class="loginWrap">
        <div class="loginCaption">
            <div class="returnPrevBtn" @click="$router.go(-1)"><img src="../../static/imgs/returnPrevPage.png" alt=""></div>
            <div class="loginCaptionCon">登陆</div>
            <div class="rgsBtn" @click="goReg">注册</div>
        </div>
        <div class="login">
            <form v-on:submit.prevent="loginTest">
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/userIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请输入账号" v-model="userName"></div>
                </div>
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/passwordIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请输入密码" v-model="userCode"></div>
                </div>
                <button class="loginBtn">登陆</button>
                <div class="forgetPwd clear">
                    <span @click="linkToReset">忘记密码？</span>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import {mapState,mapActions} from 'vuex';
    import {Toast} from 'mint-ui';
    import { Indicator } from 'mint-ui';
    export default {
        name: "login",
        data(){
            return {
                userName:'',
                userCode:'',
            }
        },
        computed:{
            ...mapState(['status'])
        },
        methods:{
            ...mapActions(['signIn']),
            loginTest(){
                Indicator.open({
                    text:'加载中',
                    spinnerType:'snake',
                });
                this.$post('/inter/index/login',{mobile:this.userName,pass:this.userCode})
                    .then((res) => {
                        console.log(res);
                        Indicator.close();
                        if(res.status=='1'){
                            this.signIn({id:res.data.id,psd:this.userCode,type:res.data.usertype});
                            this.$router.go(-1);
                        }else{
                            Toast({message:'手机号或密码错误',position:'middle',duration:1000,})
                        }
                    })
            },
            goReg(){
                this.$router.push({path:'/reg'});
            },
            linkToReset(){
                this.$router.push({path:'/reset'});
            }
        },
        beforeRouteLeave:(to,from,next)=>{
            next()
        },
        store
    }
</script>

<style scoped>
    .loginWrap{width: 100%;}
    .loginCaption{width: 100%;height: 44px;padding: 0 15px;border-bottom: 1px solid #DBDBDB;
    display: flex;justify-content: space-between;align-items: center;
    }
    .returnPrevBtn{width: 8px;height: 14px;}
    .returnPrevBtn img{width: 100%;height: 100%;}
    .loginCaptionCon{font-size: 16px;}
    .rgsBtn{font-size: 14px;}
    /*login*/
    .login{width: 100%;padding: 35px 25px 0;}
    .loginItem{width: 100%;height: 48px;border-bottom: 1px solid #DBDBDB;
        padding-left: 25px;position: relative;line-height: 48px;}
    .loginItemIcon{width: 25px;height: 100%;position: absolute;left: 0;top: 0;
    display: flex;justify-content: center;align-items: center;
    }
    .loginItemIcon img{width: 15px;height:17px;}
    .loginInput{width: 100%;height: 100%;}
    .loginInput input{width: 100%;height: 98%;text-indent: 10px;}
    .loginBtn{width: 100%;height: 40px;background-color: #DC3B31;color: #FFFFFF;margin: 40px 0 25px;
    text-align: center;line-height: 40px;border-radius: 5px;}
    .forgetPwd{width: 100%;color: #666666;font-size: 12px;}
    .forgetPwd span{float: right;margin-right: 15px;}
</style>