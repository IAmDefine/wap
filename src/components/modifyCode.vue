<template>
    <div class="loginWrap">
        <div class="loginCaption">
            <div class="returnPrevBtn" @click="$router.go(-1)"><img src="../../static/imgs/returnPrevPage.png" alt=""></div>
            <div class="loginCaptionCon">修改密码</div>
            <div class="rgsBtn"></div>
        </div>
        <div class="login">
            <form v-on:submit.prevent="modifyCode">
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/passwordIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请输入原密码" v-model="oldCode"></div>
                </div>
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/passwordIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请输入新密码" v-model="newCode"></div>
                </div>
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/passwordIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请在此输入新密码" v-model="finalCode"></div>
                </div>
                <button class="loginBtn">确定</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import {mapState,mapActions} from 'vuex';
    import { Indicator } from 'mint-ui';
    export default {
        name: "modify-code",
        data(){
            return{
                oldCode:'',
                newCode:'',
                finalCode:'',
            }
        },
        computed:{
            ...mapState(['status'])
        },
        methods:{
            ...mapActions(['signIn']),
            modifyCode(){
                if(this.oldCode!==this.status.psd){
                    Toast({message:'请输入正确的原密码',position:'middle',duration:3000,})
                }else if(this.newCode.length<5||this.finalCode.length<5){
                    Toast({message:'密码长度不得低于6位',position:'middle',duration:3000,})
                }else{
                    if(this.newCode!==this.finalCode){
                        Toast({message:'请保证两次新密码输入一致',position:'middle',duration:3000,})
                    }else{
                        this.$post('/inter/index/useredit',{uid:this.status.id,pass:this.finalCode})
                            .then((res)=>{
                                Toast({
                                    message:'修改成功',
                                    position:'middle',
                                    duration:1000,
                                });
                                this.signIn({id:this.status.id,psd:this.finalCode,type:this.status.type});
                            })
                    }
                }
            }

        }
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

</style>