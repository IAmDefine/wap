<template>
    <div class="detailWrap">
        <div class="loginCaption">
            <div class="returnPrevBtn" @click="$router.go(-1)"><img src="../../static/imgs/returnPrevPage.png" alt=""></div>
            <div class="loginCaptionCon">
                <div class="detailNav" v-for="(navArr,index) in navArr" @click="navShow(index)">
                    <span :class="{yxkChecked:index==num}">{{navArr.con}}</span>
                    <i :class="{lineChecked:index==num}"></i>
                </div>
            </div>
            <div class="rgsBtn"></div>
        </div>
        <div class="inWrap">
            <div :class="{detailShow:this.num==0}">
                <div class="starPic">
                    <img :src="starData.imgs" alt="">
                </div>
                <div class="starCaption">
                    <div class="starCaptionName clear">
                        <i class="grant">授权</i>
                        <span>{{starData.names}}</span>
                    </div>
                    <div class="choiceTypeShow">
                        自媒体+形象代言+商业活动+肖像照片
                    </div>
                    <div class="priceInfoWrap clear">
                        <div class="price">
                            <span>￥</span>
                            <span>{{basePrice}}</span>
                        </div>
                        <div class="browse clear">
                            <i><img src="../../static/imgs/browse.png" alt=""></i>
                            <span>{{starData.clicks}}</span>
                        </div>
                    </div>
                </div>
                <div class="choiceIndustry clear">
                    <span>请选择适用行业</span>
                    <div class="choiceIndustryCon clear">
                        <span>地板</span>
                        <img src="../../static/imgs/linkIcon.png" alt="">
                    </div>
                </div>
                <div class="choiceType">
                    <div class="choiceTypeTitle">选择产品类型</div>
                    <div class="choiceTypeBtnWrap">
                        <div class="choiceTypeBtn">形象代言</div>
                        <div class="choiceTypeBtn">肖像照片</div>
                        <div class="choiceTypeBtn">商演活动</div>
                        <div class="choiceTypeBtn">自媒体</div>
                    </div>
                </div>
                <div class="detailItemTitle">产品详情</div>
                <div class="produInfo">
                    <table>
                        <tr>
                            <td class="produInfoTitle">艺人编号</td>
                            <td class="produInfoCon">{{id}}</td>
                        </tr>
                        <tr>
                            <td class="produInfoTitle">使用地区</td>
                            <td class="produInfoCon">中国大陆地区(不包括香港、澳门、台湾)</td>
                        </tr>
                        <tr>
                            <td class="produInfoTitle">适用行业</td>
                            <td class="produInfoCon">{{showiid}}</td>
                        </tr>
                        <tr>
                            <td class="produInfoTitle">适用渠道及方式</td>
                            <td class="produInfoCon">
                                <ul class="orderStatus">
                                    <li>形象代言：</li>
                                    <li>1.平面广告及媒体：包装、报纸、杂志、灯箱、网站、海报等平面广告物及户外广告、公共汽车车身广告、 广告小礼品（非卖品）、宣传单及人型立牌等；</li>
                                    <li> 2.影视广告及媒体：经由中国大陆境内（台湾、香港、澳门除外）的电视频道（包括有线、无线及卫星频道）和电影、新媒体平台传播的影视广告，且不超过30秒的广告片。该广告片只可剪辑为30秒、10秒、15秒、5秒。影视广告不能以电视购物的形式播放。</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>肖像照片：</li>
                                    <li>平面广告及媒体：包装、报纸、杂志、灯箱、网站、海报等平面广告物及户外广告、公共汽车车身广告、 广告小礼品（非卖品）、宣传单及人型立牌等</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>商演活动：</li>
                                    <li>只针对活动当天的新闻报道。</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td class="produInfoTitle">付款方式</td>
                            <td class="produInfoCon">
                                <ul class="orderStatus">
                                    <li>形象代言：</li>
                                    <li>2次  签约当日付全款的50%，第一次工作开始前三日内或合约约定时间内付清另50%。</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>肖像照片：</li>
                                    <li>在线签约后，一次性支付全部款项</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>商演活动：</li>
                                    <li>2次  签约当日付全款的50%，第一次工作开始前三日内或合约约定时间内付清另50%。</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>自媒体：</li>
                                    <li>在线签约后，一次性支付全部款项</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td class="produInfoTitle">产品内容说明</td>
                            <td class="produInfoCon">
                                <ul class="orderStatus">
                                    <li>形象代言：</li>
                                    <li>平面拍摄：1个工作天内的连续6-8小时工作，包括化妆、换造型及用餐时间。</li>
                                    <li>影视拍摄：1个工作天内的连续10-12小时工作，包括化妆、换造型、用餐及录音时间。</li>
                                    <li>商务活动：1个工作天内的连续2小时工作，包括候场时间。</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>肖像照片：</li>
                                    <li>肖像照片中包含6张合法版权照片，企业可以自主选择6张照片下载，用于自己的产品宣传。照片为：TIF格式，大小50MB，未压缩过的高清大图。</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>商演活动：</li>
                                    <li>演唱嘉宾：现场演唱。</li>
                                    <li>直播活动：1个工作天内的连续2小时工作，包括候场时间；合影在10张以内；媒体采访；现场互动。</li>
                                    <li>表演嘉宾：现场表演。</li>
                                </ul>
                                <ul class="orderStatus">
                                    <li>自媒体：</li>
                                    <li>具体内容由品牌与甲方协商决定。品牌只可使用截取的艺人转发或直发的自媒体图片.</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="starPrintPicWrap clear">
                    <div class="starPrintItem" v-for="starPrintData in starPrintData">
                        <div class="starPrint">
                            <img :src="starPrintData.imgurl" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{detailShow:this.num==1}">
                <div class="circumCaption clear">
                    <div :class="{yxkChecked:index==circumNum}" v-for="(circumArr,index) in circumArr" @click="circumShow(index)">{{circumArr.con}}</div>
                </div>
                <div class="circumCon">
                    <div :class="{circumConShow:this.circumNum==0}">
                        <div class="circumInfoTitle">艺人信息</div>
                        <div class="produInfo">
                            <table>
                                <tr>
                                    <td class="produInfoTitle">姓名</td>
                                    <td class="produInfoCon">{{starData.names}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">外文名</td>
                                    <td class="produInfoCon">{{enname}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">曾用名</td>
                                    <td class="produInfoCon">{{oldname}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">民族</td>
                                    <td class="produInfoCon">{{starData.nation}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">星座</td>
                                    <td class="produInfoCon">{{starData.astr}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">身高</td>
                                    <td class="produInfoCon">{{starData.height}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">国籍</td>
                                    <td class="produInfoCon">{{starData.country}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">出生日期</td>
                                    <td class="produInfoCon">{{birthdate}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">血型</td>
                                    <td class="produInfoCon">{{starData.blood}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">体重</td>
                                    <td class="produInfoCon">{{starData.weight}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">职业</td>
                                    <td class="produInfoCon">
                                        <span v-for="jobs in starData.jobs">{{jobs}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">毕业院校</td>
                                    <td class="produInfoCon">{{starData.graduinst}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">出生地</td>
                                    <td class="produInfoCon">{{starData.birthplace}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">婚姻状况</td>
                                    <td class="produInfoCon">{{marriage}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">配偶</td>
                                    <td class="produInfoCon">{{mate}}</td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">自我评价</td>
                                    <td class="produInfoCon">
                                        <span v-for="tid in starData.tid">{{tid}}，</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">代表作品</td>
                                    <td class="produInfoCon clear">
                                        <p v-for="opus in opus" class="produInfoOpus">《{{opus.names}}》</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="produInfoTitle">个人爱好</td>
                                    <td class="produInfoCon">{{hid}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div :class="{circumConShow:this.circumNum==1}">
                        <div class="viedeoTitle">电影</div>
                        <div class="starPrintPicWrap clear">
                            <div class="starPrintItem" v-for="opus in movie">
                                <div class="starPrint">
                                    <img :src="opus.img" alt="">
                                </div>
                                <div class="videoExp">《{{opus.names}}》</div>
                            </div>
                            <div v-if="this.movie==''" class="videoNull">目前还木有该艺人电影的相关信息哎~</div>
                        </div>
                        <div class="viedeoTitle">电视剧</div>
                        <div class="starPrintPicWrap clear">
                            <div class="starPrintItem" v-for="opus in tv">
                                <div class="starPrint">
                                    <img :src="opus.img" alt="">
                                </div>
                                <div class="videoExp">《{{opus.names}}》</div>
                            </div>
                            <div v-if="this.tv==''" class="videoNull">目前还木有该艺人电视剧的相关信息哎~</div>
                        </div>
                        <div class="viedeoTitle">综艺</div>
                        <div class="starPrintPicWrap clear">
                            <div class="starPrintItem" v-for="opus in variety">
                                <div class="starPrint">
                                    <img :src="opus.img" alt="">
                                </div>
                                <div class="videoExp">《{{opus.names}}》</div>
                            </div>
                            <div v-if="this.variety==''" class="videoNull">目前还木有该艺人综艺的相关信息哎~</div>
                        </div>
                    </div>
                    <div :class="{circumConShow:this.circumNum==2}">
                        <div v-if="prize.length!==0">
                            <div class="experienceTitle">
                                <!--<i><img src="../../static/imgs/experienceTitle1.png" alt="" class="experienceTitle1"></i>-->
                                <h3>获奖记录</h3>
                            </div>
                            <div class="experienceDetail">
                                <div class="experienceDetailItem" v-for="exp in prize">
                                    <div class="experienceDetailItemPic"><img :src="exp.img" alt=""></div>
                                    <ul>
                                        <li>
                                            <div class="experienceHeading">类型：</div>
                                            <div class="experienceCon">{{exp.types}}</div>
                                        </li>
                                        <li>
                                            <div class="experienceHeading">名称：</div>
                                            <div class="experienceCon">{{exp.names}}</div>
                                        </li>
                                        <li v-if="exp.types=='电影'||exp.types=='电视剧'&&exp.rolename!==null">
                                            <div class="experienceHeading">饰演：</div>
                                            <div class="experienceCon">{{exp.rolename}}</div>
                                        </li>
                                        <li>
                                            <div class="experienceHeading">日期：</div>
                                            <div class="experienceCon">{{exp.years}}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div v-if="Boolean(this.opusHandle.length)">
                            <div class="experienceTitle">
                                <!--<i><img src="../../static/imgs/experienceTitle1.png" alt="" class="experienceTitle1"></i>-->
                                <h3>所有作品</h3>
                            </div>
                            <div class="experienceDetail">
                                <div class="experienceDetailItem" v-for="exp in opusHandle">
                                    <div class="experienceDetailItemPic"><img :src="exp.img" alt=""></div>
                                    <ul>
                                        <li>
                                            <div class="experienceHeading">类型：</div>
                                            <div class="experienceCon">{{exp.types}}</div>
                                        </li>
                                        <li>
                                            <div class="experienceHeading">名称：</div>
                                            <div class="experienceCon">{{exp.names}}</div>
                                        </li>
                                        <li v-if="exp.types=='电影'||exp.types=='电视剧'&&exp.rolename!==null">
                                            <div class="experienceHeading">饰演：</div>
                                            <div class="experienceCon">{{exp.rolename}}</div>
                                        </li>
                                        <li>
                                            <div class="experienceHeading">日期：</div>
                                            <div class="experienceCon">{{exp.years}}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="{circumConShow:this.circumNum==3}">
                        <div class="experienceDetail" v-for="exp in busListsFilter">
                            <div class="businessDetailItem" >
                                <div class="experienceDetailItemPic"><img :src="exp.imgs" alt=""></div>
                                <ul>
                                    <li>
                                        <div class="experienceHeading">类型：</div>
                                        <div class="experienceCon">{{exp.types}}</div>
                                    </li>
                                    <li>
                                        <div class="experienceHeading">产品：</div>
                                        <div class="experienceCon">{{exp.prod}}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div :class="{circumConShow:this.circumNum==4}">艺人动态</div>
                </div>
            </div>
            <div :class="{detailShow:this.num==2}">
                <div class="circumCaption clear">
                    <div :class="{yxkChecked:index==evalNum}" v-for="(evalArr,index) in evalArr" @click="evalShow(index)">{{evalArr.con}}</div>
                </div>
                <div class="circumCon">
                    <div :class="{circumConShow:this.evalNum==0}">全部评价</div>
                    <div :class="{circumConShow:this.evalNum==1}">好评</div>
                    <div :class="{circumConShow:this.evalNum==2}">中评</div>
                    <div :class="{circumConShow:this.evalNum==3}">差评</div>
                    <div :class="{circumConShow:this.evalNum==4}">晒图</div>
                </div>
            </div>
        </div>
        <div class="detailOperationWrap">
            <div class="detailOperationService">
                <i><img src="../../static/imgs/service.png" alt=""></i>
                <p>客服</p>
            </div>
            <div class="collection">
                <i><img src="../../static/imgs/collectIcon.png" alt=""></i>
                <p>收藏</p>
            </div>
            <div class="purchase">立即购买</div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    function formatTime(val) {//时间戳转换成时间格式
        val = parseInt(val);
        let time=new Date(val*1000);
        let y=time.getFullYear();
        let m=time.getMonth() + 1;
        let d=time.getDate();
        m<10?m ='0'+m:m;
        d<10?d='0'+d:d;
        let timestr = y+"-"+m+"-"+d;
        return timestr;
    }
    //格式化时间成时间戳
    // function getTime(dateStr){
    //     let newstr=dateStr.replace(/-/g,'/');
    //     let date=new Date(newstr);
    //     let time_str=date.getTime().toString();
    //     return time_str; // 时间戳毫秒形式
    // }
    // function format(val){
    //     var time = new Date(val*1000);
    //     var y = time.getFullYear();//年
    //     var m = time.getMonth() + 1;//月
    //     var d = time.getDate();//日
    //     var h = time.getHours();//时
    //     var mm = time.getMinutes();//分
    //     var date ={"year":y+"."+m+"."+d,"hour":h+':'+mm};
    //     return date;
    // }
    export default {
        name: "detail",
        data(){
            return{
                navArr:[{'con':'产品'},{'con':'详情'},{'con':'评价'},],
                num:1,//产品、详情、评价num
                id:'',//首页传递过来的id
                starData:{//艺人详情data
                    showiid:[],//适用行业
                    enname:'',//详情-外文名
                    oldname:'',//曾用名
                    birthdate:'',//出生日期
                    marriage:{},//婚姻状况
                    mate:'',//配偶
                    hid:{},//爱好
                },
                starPrintData:[],//艺人图片列表data
                opus:{},//代表作品
                movie:[],//照片视频-电影
                tv:[],//照片视频-电视剧
                variety:[],//照片视频-综艺
                prize:[],//获奖记录
                circumArr:[{'con':'基本详情'},{'con':'照片视频'},{'con':'演艺经历'},{'con':'明星商务'},{'con':'艺人动态'}],//详情 二级
                circumNum:4,//详情 二级
                evalArr:[{'con':'全部评价'},{'con':'好评'},{'con':'中评'},{'con':'差评'},{'con':'晒图'}],//评价 二级
                evalNum:0,//评价 二级
                hide:'hide',
                show:'show',
                busLists:[],//商务列表
                evalData:[],//评价列表
            }
        },
        computed: {
            ...mapState(['status']),
            basePrice(){//产品-价格显示
                return this.starData.baseprice/10000+'万'
            },
            showiid(){//产品-适用行业
                return  this.starData.showiid.join('、')
            },
            enname(){//外文名
                return this.starData.enname.length==0?'—':this.starData.enname;
            },
            oldname(){//曾用名
                return this.starData.oldname.length==0?'—':this.starData.oldname;
            },
            birthdate(){//出生日期
                return this.starData.birthdate==''?'':formatTime(this.starData.birthdate);
            },
            marriage(){//婚姻状况
                switch(this.starData.marriage){
                    case 1:return '未婚';break;
                    case 2:return '已婚';break;
                    case 3:return '已婚已育';break;
                    default:return '—';break;}
            },
            mate(){//配偶
                return this.starData.mate.length==0?'—':this.starData.mate;
            },
            hid(){//爱好
                let hidArr = [];
                for (let y in this.starData.hid) {
                    if (this.starData.hid.hasOwnProperty(y)) {
                        hidArr.push(this.starData.hid[y])
                    }
                }
                if (hidArr.length > 0) {
                    return this.starData.hid = hidArr.join(', ');
                } else {
                    return this.starData.hid ='—';
                }
            },
            opusHandle(){
                // 作品类型：1电影 2、电视剧 3、综艺 4音乐、5获奖记录、6社会活动、7商务、8时尚
                for(let i=0;i<this.opus.length;i++){
                    switch (this.opus[i].types) {
                        case 1:this.opus[i].types='电影';break;
                        case 2:this.opus[i].types='电视剧';break;
                        case 3:this.opus[i].types='综艺';break;
                        case 4:this.opus[i].types='音乐';break;
                        case 5:this.opus[i].types='获奖记录';break;
                        case 6:this.opus[i].types='社会活动';break;
                        case 7:this.opus[i].types='商务';break;
                        case 8:this.opus[i].types='时尚';break;
                        default:this.opus[i].types='—';break;
                    }
                }
                return this.opus;
            },
            busListsFilter(){
                for(let i=0;i<this.busLists.length;i++){
                    switch (this.busLists[i].types) {
                        case 1:this.busLists[i].types='形象大使(非独家)';break;
                        case 2:this.busLists[i].types='形象代言(独家)';break;
                        case 3:this.busLists[i].types='品牌活动嘉宾';break;
                        default:this.busLists[i].types='—';break;
                    }
                }
                return this.busLists;
            },
        },
        updated:function(){
            // this.id=this.$route.params
        },
        methods:{
            navShow(index){
                this.num=index;
            },
            circumShow(index){
                this.circumNum=index;
            },
            evalShow(index){
                this.evalNum=index;
            },
        },
        mounted(){
            this.id=this.$route.params.id;
            this.$post('/inter/star/startinfolook',{id:2588})//2588
                .then((res) => {//明星详情
                    if(res==1){
                    this.starData=res.data}});
            this.$post('/inter/star/lookstarsimg',{sid:1263,types:1})
                .then((res)=>{//图片列表
                    this.starPrintData=res.data.data;
                    });
            this.$post('/inter/star/workslist',{sid:1263})
                .then((res)=>{//作品列表
                    if(res.status==1){
                        this.opus=res.data.data;
                        for(var i=0;i<res.data.data.length;i++){
                            if(res.data.data[i].types==1){
                                this.movie.push(res.data.data[i])
                            }else if(res.data.data[i].types==2){
                                this.tv.push(res.data.data[i])
                            }else if(res.data.data[i].types==3){
                                this.variety.push(res.data.data[i])
                            }else if(res.data.data[i].types==5){
                                this.prize.push(res.data.data[i])
                            }
                        }
                    }
                });
            this.$post('/inter/starbus/lists',{sid:1998,showrow:1000})
                .then((res)=>{//商务列表
                    // console.log(res);
                    if(res.status==1){
                        this.busLists=res.data.data;
                    }
                });
            this.$post('/inter/infomation/evallist',{sid:1998,showrow:1000})
                .then((res)=>{//评价列表
                    console.log(res.data.data);
                    if(res.status==1){
                        this.evalData=res.data.data;
                    }
                });

        }
    }
</script>
<style scoped>
    .detailWrap{width: 100%;background-color: #F3F3F3;}
    .loginCaption{width: 100%;height: 44px;padding: 0 15px;border-bottom: 1px solid #D6D6D6;background-color: #FFF;z-index: 3;
        position: fixed;left: 0;top: 0;
        display: flex;justify-content: space-between;align-items: center;
    }
    .returnPrevBtn{width: 8px;height: 14px;}
    .returnPrevBtn img{width: 100%;height: 100%;}
    .loginCaptionCon{font-size: 16px;height: 100%;}
    .rgsBtn{font-size: 14px;}
    .detailNav{float: left;height: 100%;line-height: 44px;margin-right: 35px;position: relative;font-size: 16px;}
    .detailNav:nth-last-of-type(1){margin-right: 0;}
    .detailNav i{display: none; width: 100%;height: 2px;position: absolute;bottom: 0;left: 0;background-color: #DC3B31;
        transition: all 1s;
    }
    .detailNav .lineChecked{display: block;}
    .inWrap{padding:44px 0 60px 0;}
    .inWrap>div{display: none;}
    .inWrap>.detailShow{display: block;}
    /*starPic*/
    .starPic{width: 100%;height: 450px;}
    .starPic img{width: 100%;height: 100%;}
    .starCaption{width: 100%;padding: 15px 15px 15px 10px;background-color: #FFFFFF;margin-bottom: 10px;}
    .starCaptionName{width: 100%;margin-bottom: 7px;}
    .starCaptionName>i{width: 30px;height: 15px;text-align: center;line-height: 15px;
        background-color: #62A8EA;float: left;margin-right: 10px;font-size: 10px;
        color: #FFF;border-top-left-radius: 8px;border-bottom-right-radius: 8px;}
    .starCaptionName>span{float: left;line-height: 15px;}
    .choiceTypeShow{width: 100%;font-size: 12px;color: #666;margin-bottom: 11px;}
    .priceInfoWrap{width: 100%;font-size: 12px;color: #666;}
    .price{float: left;color: #DC3B31;}
    .browse{float: right;}
    .browse>i{float: left;width: 13px;height: 9px;margin-right: 5px;}
    .browse>i>img{width: 100%;height: 100%;}
    .browse>span{float: left;}
    .choiceIndustry{width: 100%;padding: 0 15px 0 10px;height: 44px;line-height: 44px;background-color: #FFF;margin-bottom: 10px;}
    .choiceIndustry>span{float: left;}
    .choiceIndustryCon{float: right;}
    .choiceIndustryCon>span{float:left;color: #999;}
    .choiceIndustryCon>img{display: inline-block; width: 6px;height: 10px;float: left;margin: 17px 0 0 10px;}
    .choiceType{width: 100%;padding: 15px 15px 15px 10px;background-color: #FFF;margin-bottom: 10px;}
    .choiceTypeTitle{width: 100%;margin-bottom: 10px;}
    .choiceTypeBtnWrap{width: 100%;display: flex;justify-content: space-between;}
    .choiceTypeBtn{padding: 5px;background-color: #DC3B31;color: #FFF;text-align: center;border-radius: 3px;font-size:12px;}
    .detailItemTitle{width: 100%;height: 44px;background-color: #FFF;padding: 0 10px;line-height: 44px;}
    .produInfo{width: 100%;background-color: #FFF;margin-bottom: 10px;}
    .produInfo table{width: 100%;}
    .produInfo tr{width: 100%;}
    .produInfo td{ border-top: 1px solid #E7E7E7;}
    .produInfoTitle{width: 72px;border-right: 1px solid #E7E7E7;text-align: center;color: #666;padding: 6px 5px;}
    .produInfoCon{padding: 7px 5px;}
    .orderStatus{line-height: 22px;}
    .orderStatus li:nth-of-type(1){color: #000;}
    .detailOperationWrap{width: 100%;height: 44px;position: fixed;left: 0;bottom: 0;border-top: 1px solid #E7E7E7;background-color: #FFF;z-index:3;}
    .detailOperationWrap>div{width: 33.33333333%;float: left;text-align: center;height: 100%;}
    .detailOperationWrap i img{width: 100%;height: 100%;}
    .detailOperationService,.collection{border-right: 1px solid #E7E7E7;color: #666;font-size: 12px;}
    .detailOperationService>i{width: 17px;height: 14px;margin: 6px auto 1px auto;}
    .collection>i{width: 15px;height: 13px;margin: 6px auto 2px auto;}
    .purchase{background-color: #DC3B31;color: #FFF;font-size: 14px;line-height: 44px;}
    .starPrintPicWrap{width: 100%;padding: 3px 3px 0 0;background-color: #FFF;}
    .starPrintItem{width:50%;float: left;padding: 0 0 3px 3px;}
    .starPrint{width: 100%;height: 220px;}
    .starPrint img{width: 100%;height: 100%;}
    /*circumCaption*/
    .circumCaption{width: 100%;border-bottom: 1px solid #D6D6D6;position: fixed;left: 0;top: 44px;background-color: #FFF;z-index: 2;
    display: flex;justify-content: left;
    }
    .circumCaption>div{width: 25%;height:40px;text-align: center;line-height: 40px;}
    .circumCon{width: 100%;padding-top: 40px;}
    .circumCon>div{display: none;}
    .circumCon>.circumConShow{display: block;}
    .circumInfoTitle,.viedeoTitle,.experienceTitle{width: 100%;height: 40px;background-color: #FFF;padding: 0 5px;line-height: 40px;font-weight: bold;margin-top: 10px;}
    .produInfoOpus{float: left;margin-bottom: 2px;}
    /*viedeoTitle*/
    .viedeoTitle{border-bottom: 1px solid #E7E7E7;}
    .videoExp{width: 100%;height: 40px;text-align: center;line-height: 40px;
    overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .videoNull{width: 100%;padding: 20px 5px;color: #999;}
    /*experience*/
    .experienceTitle{border-bottom: 1px solid #E7E7E7;}
    /*.experienceTitle>i{float: left;height: 100%;margin-right: 10px;*/
    /*display: flex;align-items: center;*/
    /*}*/
    /*.experienceTitle>i img{display: block;}*/
    .experienceTitle>h3{float: left;font-size: 14px;}
    /*.experienceTitle1{width: 14.5px;height: 14px;}*/
    .experienceDetail{width: 100%;padding: 0 10px;background-color: #FFF;}
    .experienceDetailItem,.businessDetailItem{width: 100%;padding: 10px 0 10px 165px;border-bottom: 1px solid #E7E7E7;position: relative;}
    .experienceDetailItem:nth-last-of-type(1){border-bottom: 0;}
    .experienceDetailItemPic{width: 150px;height: 200px;position: absolute;left: 0;top: 10px;z-index: 1;}
    .experienceDetailItemPic>img{width: 100%;height: 100%;}
    .experienceDetailItem>ul{width: 100%;height: 200px;}
    .experienceDetailItem>ul li,.businessDetailItem>ul li{width: 100%;line-height: 20px;margin-bottom: 4px;
    display: flex;
    }
    .experienceCon{color: #666;flex: 1;}
    .businessDetailItem{background-color: #FFF;margin-bottom: 10px;padding: 10px 0 10px 130px;border-bottom: 0;}
    .businessDetailItem .experienceDetailItemPic{width: 115px;height: 115px;}
    .businessDetailItem>ul{width: 100%;height: 115px;}











    .show{display: block;}
    .hide{display: none;}
</style>