<template>
    <div class="homePage">
        <div class="headerWrap">
            <div class="headerWrapBg" :style="headerBgObjs"></div>
            <div class="header">
                <div class="headerLink">
                    <div class="searchWrap" >
                        <div class="search" :style="{backgroundColor:searchBorCor}" @click="linkToSearch">
                            <img src="../../static/imgs/search.png" alt="">
                            <span>{{status}}--{{this.companySign}}</span>
                        </div>
                    </div>
                    <div class="filter" @click="linkToFilter">
                        <img :src="filterIconPath" alt="">
                        <span id="filterCon" :style="{color:filterTxtCor}">筛选</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <mt-swipe :auto="3000" :continuous="true" :speed="500" :stopPropagation="true" :prevent="true" :showIndicators="false">
                <mt-swipe-item v-for="bannerData in bannerData"><img :src="bannerData.img" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="channelWrap clear">
            <div class="channelItem" v-for="(items,index) in channelLink" @click="channelLinkTo(index)">
                <div class="channel">
                    <i :class="items.cls"></i>
                    <p>{{items.con}}</p>
                </div>
            </div>
        </div>
        <div class="starInfoWrap clear" v-for="(items,index,key) in starInfoData">
            <!--企业-->
            <div v-if="status.type==1">
                <router-link :to="{name:'detail',params:{id:childItems.id}}" class="starInfoItem" v-for="(childItems,childIndex) in items">
                    <div class="starInfo">
                        <div class="starInfoPicWrap">
                            <img :src="childItems.imgs" alt="">
                        </div>
                        <div class="starInfoDetail">
                            <p>{{childItems.names}}</p>
                            <div class="secrecy">
                                <img src="../../static/imgs/secrecy.png" alt="">
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <!--艺人-->
            <div v-else-if="status.type==2">
                <router-link :to="{name:'detail',params:{id:childItems.id}}" class="starInfoItem" v-for="(childItems,childIndex) in items">
                    <div class="starInfo">
                        <div class="starInfoPicWrap">
                            <img :src="childItems.imgs" alt="">
                        </div>
                        <div class="starInfoDetail">
                            <p>{{childItems.names}}</p>
                            <div class="secrecy" v-if="childItems.id==status.id">
                                <img src="../../static/imgs/secrecy.png" alt="">
                            </div>
                            <div class="price yxkChecked clear" v-else>
                                <span>￥</span>
                                <span>{{childItems.price}}</span>
                                <span>万</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <!--未登录-->
            <div v-else>
                <router-link to="/login" class="starInfoItem" v-for="(childItems,childIndex) in items">
                    <div class="starInfo">
                        <div class="starInfoPicWrap">
                            <img :src="childItems.imgs" alt="">
                        </div>
                        <div class="starInfoDetail">
                            <p>{{childItems.names}}</p>
                            <div class="price clear">
                                <span class="loginLimit">登陆</span>
                                <span>即可查看相关信息</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import { mapState } from 'vuex';
    import { Indicator } from 'mint-ui';
    export default {
        data(){
            return{
                bannerData:[],//轮播图
                channelLink:[
                    {'con':'肖像照片','cls':'channelPhoto'},
                    {'con':'形象代言','cls':'channelEndor'},
                    {'con':'自媒体','cls':'channelMedia'},
                    {'con':'商演活动','cls':'channelBus'},
                ],
                starInfoData:{},//艺人数据
                headerBgObjs:{//header背景
                    opacity:.5,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0))',
                },
                searchBorCor:'rgba(255,255,255,1)',//搜索框
                filterTxtCor:'rgba(255,255,255,1)',//筛选文字
                filterIconPath:'../../static/imgs/filter.png',//筛选icon
                starSign:'',
                companySign:'',
                companyIfauth:'',
            }
        },
        computed: {
            ...mapState(['status'])
        },
        methods:{
            channelLinkTo(index){
                // alert('频道页跳转')
            },
            linkToFilter(){
                this.$router.push('/filter')
            },
            detailLinkTo(childIndex){
                 if(!this.status.user){
                    this.$router.push('/login')
                 }else{
                     // alert('详情页')
                    // console.log(this.starInfoData)
                 }
            },
            scrollChange (e) {
                let scrollY=e.currentTarget.scrollY;
                scrollY>=255?scrollY=255:scrollY=scrollY;
                this.headerBgObjs.opacity=((scrollY/2+125)/125)*.5;
                this.headerBgObjs.background='linear-gradient(to bottom, rgba('+scrollY+','+scrollY+','+scrollY+',1),rgba('+scrollY+','+scrollY+','+scrollY+','+(1/250)*scrollY+'))';
                this.searchBorCor='rgba('+(255-((12*scrollY)/255))+','+(255-((12*scrollY)/255))+','+(255-((12*scrollY)/255))+',1)';
                this.filterTxtCor='rgba('+(255-((153*scrollY)/255))+','+(255-((153*scrollY)/255))+','+(255-((153*scrollY)/255))+',1)';
                scrollY>125?this.filterIconPath='../../static/imgs/filterChange.png':this.filterIconPath='../../static/imgs/filter.png';
            },
            linkToSearch(){
                this.$router.push('/search')
            }
        },
        mounted(){
            //轮播图
            this.$post('/inter/caches/adsget',{types:'1',advert_types:'2'})
                .then((res) => {this.bannerData=res.data;});
            //首页明星信息
            this.$post('/inter/caches/indexappget',{types:'1',advert_types:'2'})
                .then((res) => {
                    console.log(res);
                    Indicator.close();
                    this.starInfoData=res.data;});
            if(this.status.type==1){//企业
                this.$post('/inter/biz/lookbizinfo',{id:this.status.id})
                    .then((res)=>{
                        if(res.status==3){
                            this.companySign=res.status;
                        }
                    })
            }else if(this.status.type==2){//艺人

            }
        },
        created(){
            Indicator.open({
                text:'加载中',
                spinnerType:'snake',
            });
            window.addEventListener('scroll', this.scrollChange);
        },
        beforeRouteLeave:(to,from,next)=>{
            // alert('准备离开路由')
            next()
        },
        beforeRouteEnter:(to,from,next)=>{
            // alert(this.$route)
            next()
        },
        store
    }
</script>
<style scoped>
    .homePage{width: 100%;background-color: #f3f3f3;padding-bottom: 50px;}
    .banner{width: 100%;height: 250px;margin-bottom: 10px;}
    .banner .mint-swipe-item img{width: 100%;height: 100%;}
    /*channelWrap*/
    .channelWrap{width: 100%;padding: 20px 0 15px 0; background-color: #FFFFFF;}
    .channelItem{width: 25%;float: left;}
    .channel>i{margin:0 auto 7px auto;background-repeat: no-repeat; background-size: 100% 100%;}
    .channel>p{text-align: center;}
    .channelPhoto{width: 30px;height: 30px; background-image: url("../../static/imgs/photo.png");}
    .channelEndor{width: 28.5px;height: 33.5px; background-image: url("../../static/imgs/endorsement.png");}
    .channelMedia{width: 29.5px;height: 31px; background-image: url("../../static/imgs/media.png");}
    .channelBus{width: 29.5px;height: 31px; background-image: url("../../static/imgs/activity.png");}
    /*infoWrap*/
    .starInfoWrap{width: 100%;padding: 5px 3px 0 0;}
    .starInfoItem{width: 50%;float: left;padding: 3px 0 0 3px;box-sizing: border-box;}
    .starInfo{width: 100%;background-color: #FFFFFF;}
    .starInfoPicWrap{width: 100%;height: 220px;}
    .starInfoPicWrap>img{width: 100%;height: 100%;}
    .starInfoDetail{width: 100%;padding: 7px 10px;}
    .starInfoDetail p{margin-bottom: 5px;}
    .starInfoDetail .price span{float: left;}
    .loginLimit{text-decoration: underline;color: #DC3B31;margin-right: 3px;}
    .secrecy{width: 100%;}
    .secrecy img{width: 10.5px;height: 11px;}
    /*searchWrap*/
    .headerWrap{width: 100%;height: 80px;position: fixed;left: 0;top: 0;z-index: 9;}
    .headerWrapBg{width: 100%;height: 80px;position: absolute;left: 0;top: 0;z-index: 1;

    }
    .header{width: 100%;padding:27px 10px 0;position: absolute;left: 0;top: 0;z-index: 2;}
    .headerLink{width: 100%;height: 30px;display: flex;}
    .searchWrap{width: 309px;height: 30px;flex: 1;padding-right: 10px;}
    .search{width: 100%;height: 100%;border-radius:10px;
        display: flex;align-items: center;}
    .filter{overflow: hidden;display: flex;align-items: center;}
    .filter img{width: 13px;height: 14px;float: left;margin-right: 5px;}
    .filter span{float: left;}
    .search img{width: 12px;height: 12px;margin: 0 7px 0 10px;}
    .search span{color: #BDBDBD;}



</style>
