<template>
    <div class="setWrap" :style="{height:minHeight}">
        <div class="loginCaption">
            <div class="returnPrevBtn" @click="$router.go(-1)"><img src="../../static/imgs/returnPrevPage.png" alt=""></div>
            <div class="loginCaptionCon">设置</div>
            <span></span>
        </div>
        <div class="set">
            <div class="setItem" @click="modifyCode">
                <div class="setCon clear">
                    <span>修改密码</span>
                    <img src="../../static/imgs/linkIcon.png" alt="">
                </div>
            </div>
        </div>
        <div class="set">
            <div class="setItem">
                <div class="setCon clear">
                    <span>用户协议</span>
                    <img src="../../static/imgs/linkIcon.png" alt="">
                </div>
            </div>
            <div class="setItem">
                <div class="setCon clear">
                    <span>隐私政策</span>
                    <img src="../../static/imgs/linkIcon.png" alt="">
                </div>
            </div>
            <div class="setItem">
                <div class="setCon clear">
                    <span>关于平台</span>
                    <img src="../../static/imgs/linkIcon.png" alt="">
                </div>
            </div>
        </div>
        <div class="loginOut" @click="loginOut">安全退出</div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import store from '@/vuex/store';
    import {mapActions} from 'vuex';
    export default {
        name: "set",
        data(){
            return{
                minHeight:'100%',//最小高度，背景色的设置
            }
        },
        mounted(){
            this.minHeight=document.documentElement.clientHeight+'px';
        },
        methods:{
            ...mapActions(['signIn','signOut']),
            modifyCode(){//修改密码
                this.$router.push('/modifyCode')
            },
            loginOut(){//退出登录
                this.signOut();
                this.$router.push('/home')
            }
        },
        store
    }
</script>

<style scoped>
    .setWrap{width: 100%;background-color: #F3F3F3;}
    .loginCaption{width: 100%;height: 44px;padding: 0 15px;border-bottom: 1px solid #DBDBDB;background-color: #FFF;
        display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;
    }
    .returnPrevBtn{width: 8px;height: 14px;}
    .returnPrevBtn img{width: 100%;height: 100%;}
    .loginCaptionCon{font-size: 16px;}
    /*set*/
    .set{width: 100%;border-top: 1px solid #EAEAEA;border-bottom: 1px solid #EAEAEA;
        margin-bottom: 10px;padding-left: 15px;background-color: #FFF;}
    .setItem{width: 100%;height: 44px;line-height: 44px; border-bottom: 1px solid #EAEAEA;padding-right: 15px;}
    .setItem:nth-last-of-type(1){border-bottom: 0;}
    .setCon{width: 100%;}
    .setCon>span{float: left;}
    .setCon>img{width: 6px;height: 10px;float: right; margin-top: 17px;}
    .loginOut{width: 100%;height: 44px;text-align: center;line-height: 44px;background-color: #FFF;}
</style>