<template>
    <div class="loginWrap">
        <div class="loginCaption">
            <div class="returnPrevBtn" @click="$router.go(-1)"><img src="../../static/imgs/returnPrevPage.png" alt=""></div>
            <div class="loginCaptionCon">注册</div>
            <div class="rgsBtn"></div>
        </div>
        <div class="login">
            <form v-on:submit.prevent="reg">
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/userIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请输入手机号" v-model="userName"></div>
                </div>
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/passwordIcon.png" alt=""></div>
                    <div class="loginInput"><input type="text" placeholder="请输入密码" v-model="userCode"></div>
                </div>
                <div class="loginItem">
                    <div class="loginItemIcon"><img src="../../static/imgs/codeTest.png" alt="" class="codeTest"></div>
                    <div class="loginInput indentCodeWrap">
                        <input type="text" placeholder="请输入验证码" v-model="userTest">
                        <div class="indentCode">
                            <div class="code">
                                <div :class="codeFlag?codeCon:codeConHide"  @click="verCode">验证码</div>
                                <div :class="codeFlag?codeConHide:codeTime">{{code_time}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="typeWrap clear">
                    <div class="typeItem clear" @click="typeChoice(0)">
                        <i :class="typeImgCheckedCompany"></i>
                        <span :style="{color:typeColorCompany}">我是企业</span>
                    </div>
                    <div class="typeItem clear" @click="typeChoice(1)">
                        <i :class="typeImgCheckedStar"></i>
                        <span :style="{color:typeColorStar}">我是艺人</span>
                    </div>
                </div>

                <button class="loginBtn">立即注册</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import store from '@/vuex/store';
    import {mapState,mapActions} from 'vuex';
    import { Indicator } from 'mint-ui';
    function indentCode() {//随机生成验证码
        let code = "";
        let codeLength = 4;
        let random = new Array(0,1,2,3,4,5,6,7,8,9);
        for (let i = 0; i < codeLength; i++) {
            let index = Math.floor(Math.random() * 9);
            code += random[index];
        }
        return code;
    }
    function countdown(that) {//倒计时
        let code_time = that.code_time;
        that.codeFlag=false;
        if (code_time == 0) {
            that.code_time= 59;
            that.codeFlag=true;
            return;
        }
        let time = setTimeout(()=>{
                that.code_time= code_time - 1;
                countdown(that);
            },1000)
    }
        export default {
        name: "reg",
        data(){
            return{
                userName:'',//手机号
                userCode:'',//密码
                userTest:'',//验证码
                indentCode:indentCode(),//随机验证码
                code_time:60,//倒计时
                codeFlag:true,//倒计时切换开关
                codeCon:'codeCon',//倒计时类名
                codeConHide:'codeConHide',//倒计时类名
                codeTime:'codeTime',//倒计时类名
                type:null,//类型选择
                typeImgCheckedCompany:'',//类型选择图片
                typeImgCheckedStar:'',//类型选择图片
                typeColorCompany:'',//类型选择字体颜色
                typeColorStar:'',//类型选择字体颜色
            }
        },
            computed:{
                ...mapState(['status'])
            },
        methods:{
            ...mapActions(['signIn']),
            verCode(){
                alert(this.indentCode)
                let that=this;
                this.$post('/inter/index/userdetail',{mobile:this.userName})
                    .then((res)=>{
                        if(this.userName.length!==11){
                            Toast({message:'请输入正确的手机号',position:'middle',duration:3000,})
                        }else{
                            if(res.status==1){
                                Toast({message:'该手机号已经注册过了',position:'middle',duration:3000,})
                            }else if(res.status==3){
                                countdown(that);
                                this.$post('/aliyun/regcode.php',{mobile:this.userName,authcode:this.indentCode});
                                Toast({message:'验证码已发送至您的手机',position:'middle',duration:3000,})
                            }
                        }
                    });
            },
            typeChoice(index){
                this.type=index;
                index==0?(this.typeColorCompany='#DC3B31',this.typeImgCheckedCompany='typeImgChecked'):(this.typeColorCompany='',this.typeImgCheckedCompany='');
                index==1?(this.typeColorStar='#DC3B31',this.typeImgCheckedStar='typeImgChecked'):(this.typeColorStar='',this.typeImgCheckedStar='');
            },
            reg(){
                Indicator.open({
                    text:'加载中',
                    spinnerType:'snake',
                });
                this.$post('/inter/index/userdetail',{mobile:this.userName})
                    .then((res) => {
                        Indicator.close();
                        if(this.userName.length!==11){
                            Toast({message:'请输入正确的手机号',position:'middle',duration:3000,})
                        }else{
                            if(res.status==1){
                                Toast({message:'该手机号已经注册过了',position:'middle',duration:3000,})
                            }else if(res.status==3){
                                if(this.userCode.length<6){
                                    Toast({message:'密码长度不得低于6位',position:'middle',duration:3000,})
                                }else if(this.userTest!==this.indentCode){
                                    Toast({message:'请输入正确的验证码',position:'middle',duration:3000,})
                                }else if(this.type==null){
                                    Toast({message:'请选择注册类型',position:'middle',duration:3000,})
                                }else{
                                    this.$post('/inter/index/register',{mobile:this.userName,pass:this.userCode,usertype:this.type+1})
                                        .then((res)=>{
                                            this.signIn({id:res.data.id,psd:this.userCode,type:res.data.usertype});
                                            this.$router.push('/home');
                                        })
                                }
                            }
                        }
                    });
            }
        },
        mounted(){


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
    .loginItemIcon img{width: 14.5px;height:16.5px;}
    .loginItemIcon .codeTest{width: 11px;height: 17.5px;}
    .loginInput{width: 100%;height: 100%;}
    .loginInput input{width: 100%;height: 100%;text-indent: 10px;}
    .loginBtn{width: 100%;height: 40px;background-color: #DC3B31;color: #FFFFFF;margin: 40px 0 25px;
        text-align: center;line-height: 40px;border-radius: 5px;}
    .indentCodeWrap{display: flex;}
    .indentCodeWrap input{flex: 1;}
    .indentCode{height: 48px;display: flex;align-items: center;}
    .code{width: 70px;height: 27px;border-radius: 25px;text-align: center;line-height: 27px;font-size: 12px;
        background-color: #C6C6C6;color: #FFFFFF;}
    .codeConHide{display: none;}
    .codeTime{background-color: #DC3B31;border-radius: 25px;}
    /*typeWrap*/
    .typeWrap{width: 100%;padding-top: 25px;}
    .typeWrap>div{float: left;line-height: 13px;margin-right: 25px;overflow: hidden;}
    .typeWrap i{float: left;width: 13px;height: 13px;margin-right: 10px;
    background: url("../../static/imgs/unChecked.png") no-repeat;
        background-size: 13px 13px;
    }
    .typeWrap .typeImgChecked{background-image:url("../../static/imgs/checked.png"); }
    .typeItem span{float: left;}
</style>