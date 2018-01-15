<template>
    <div class="myWrap" :style="{height:minHeight}">
        <div class="loginCaption">
            <div class="loginCaptionCon">我的</div>
        </div>
        <div class="portraitWrap clear">
            <div class="portrait">
                <div class="portraitPic">
                    <img src="../../static/imgs/myPortrait.png" alt="">
                </div>
                <p class="myName">{{userName}}</p>
            </div>
        </div>
        <div class="myOptionWrap signWrap" v-if="status.type==2">
            <div class="myOptionItem">
                <div class="myOption">
                    <div class="optionIcon">
                        <img src="../../static/imgs/myinfoStarSign.png" alt="" class="myinfoStarSign">
                    </div>
                    <div class="optionCon clear">
                        <div class="optionTitle">签约优星库</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="myOptionWrap">
            <div v-if="status.type==2">
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo1.png" alt="" class="myInfo1">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">个人中心</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo2.png" alt="" class="myInfo2">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的认证</div>
                            <div class="optionDetail">
                                <span>认证状态</span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfoStar3.png" alt="" class="myInfoStar3">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的档期</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo1.png" alt="" class="myInfo1">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">个人中心</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo2.png" alt="" class="myInfo2">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的认证</div>
                            <div class="optionDetail">
                                <span>认证状态</span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo3.png" alt="" class="myInfo3">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的订单</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="myOptionWrap">
            <div v-if="status.type==2">
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo4.png" alt="" class="myInfo4">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的积分</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo6.png" alt="" class="myInfo6">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的消息</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo7.png" alt="" class="myInfo7">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">服务中心</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo4.png" alt="" class="myInfo4">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的积分</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo5.png" alt="" class="myInfo5">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的需求</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo6.png" alt="" class="myInfo6">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">我的消息</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="myOptionWrap">
            <div v-if="status.type==2">
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo8.png" alt="" class="myInfo8">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">分享优星库</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo7.png" alt="" class="myInfo7">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">服务中心</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myOptionItem">
                    <div class="myOption">
                        <div class="optionIcon">
                            <img src="../../static/imgs/myInfo8.png" alt="" class="myInfo8">
                        </div>
                        <div class="optionCon clear">
                            <div class="optionTitle">分享优星库</div>
                            <div class="optionDetail">
                                <span></span>
                                <img src="../../static/imgs/linkIcon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="myOptionItem" @click="linkSet">
                <div class="myOption">
                    <div class="optionIcon">
                        <img src="../../static/imgs/myInfo9.png" alt="" class="myInfo9">
                    </div>
                    <div class="optionCon clear">
                        <div class="optionTitle">设置</div>
                        <div class="optionDetail">
                            <span></span>
                            <img src="../../static/imgs/linkIcon.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import { mapState } from 'vuex';
    import { Indicator } from 'mint-ui';
    export default {
        name: "my-info",
        data(){
            return{
                userName:'',//公司名字
                minHeight:'100%',//最小高度，背景色的设置
            }
        },
        computed: {
            ...mapState(['status'])
        },
        beforeMount(){
            Indicator.open({
                text:'加载中',
                spinnerType:'snake',
            });
        },
        mounted(){
            this.minHeight=document.documentElement.clientHeight+'px';
            if(this.status.type==1){
                this.$post('/inter/biz/lookbizinfo',{uid:this.status.id})
                    .then((res)=>{//获取企业用户名
                        Indicator.close();
                        if(res.status==1){
                            this.userName=res.data.names
                        }
                    });
            }else{
                this.$post('/inter/star/startinfolook',{uid:this.status.id})
                    .then((res)=>{//获取艺人用户名
                        Indicator.close();
                        if(res.status==1){
                            this.userName=res.data.names
                        }
                    });
            }
        },
        updated(){

        },
        methods:{
            linkSet(){
                this.$router.push('/set')
            }
        },
        beforeRouteLeave:(to,from,next)=>{
            // alert(this.name)
            next()
        },
        store
    }
</script>
<style scoped>
    .myWrap{width: 100%;min-height: 100%;background-color: #F3F3F3;}
    .loginCaption{width: 100%;height: 44px;padding: 0 15px;border-bottom: 1px solid #DBDBDB;
       text-align: center;line-height: 44px;background-color: #FFF;}
    .loginCaptionCon{font-size: 16px;}
    /*portraitWrap*/
    .portraitWrap{width: 100%;padding: 16px 35px;background-color: #FFF;margin: 10px 0;}
    .portrait{width: 100%;height: 100%;padding-left: 72px;position: relative;}
    .portraitPic{width: 60px;height: 60px;border-radius: 50%;overflow: hidden;position: absolute;
    left: 0;top: 0;}
    .portraitPic>img{width:60px;height: 100%;}
    .myName{line-height: 60px;font-size: 15px;margin-left: 12px;height: 60px;
    text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
    /*myOption*/
    .myOptionWrap{width: 100%;background-color: #FFF;margin-bottom: 10px;}
    .myOptionItem{width: 100%;padding:0 15px;height: 46px;line-height: 46px;}
    .myOption{width: 100%;padding-left: 27px;position: relative;}
    .optionIcon{position: absolute;left: 0;top: 0;height: 46px;display: flex;align-items: center;}
    .optionTitle{float: left;}
    .optionDetail{float: right;color: #CCC;font-size: 12px;}
    .optionDetail>span{float: left;}
    .optionDetail>img{width: 6px;height: 10px;margin: 18px 0 0 10px;}
    .signWrap{border-bottom: 2px dashed #DC3B31;}
    .myInfo1{width: 13px;height: 16px;}
    .myInfo2{width: 15px;height: 15px;}
    .myInfo3{width: 14px;height: 16px;}
    .myInfo4{width: 14px;height: 14px;}
    .myInfo5{width: 14px;height: 14px;}
    .myInfo6{width: 15px;height: 15px;}
    .myInfo7{width: 15.5px;height: 13.5px;}
    .myInfo8{width: 15px;height: 12px;}
    .myInfo9{width: 15px;height: 15px;}
    .myinfoStarSign{width: 17px;height: 17px;}
    .myInfoStar3{width: 15px;height: 15px;}
</style>