<template>
    <div class="filterWrap">
        <div class="loginCaption">
            <div class="returnPrevBtn" @click="$router.go(-1)"><img src="../../static/imgs/returnPrevPage.png" alt=""></div>
            <div class="loginCaptionCon">筛选</div>
            <span></span>
        </div>
        <div class="filter">
            <div class="filterItem clear" @click="types">
                <span>产品类型</span>
                <p class="clear">
                    <span>{{choiceArr[0].result}}</span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
        </div>
        <div class="filter">
            <div class="filterItem clear" @click="sex">
                <span>性别</span>
                <p class="clear">
                    <span>{{choiceArr[1].result}}</span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
            <div class="filterItem clear" @click="age">
                <span>年龄</span>
                <p class="clear">
                    <span>{{choiceArr[2].result}}</span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
            <div class="filterItem clear">
                <span>家庭状态</span>
                <p class="clear">
                    <span>{{choiceArr[3].result}}</span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
        </div>
        <div class="filter">
            <div class="filterItem clear">
                <span>艺人地区</span>
                <p class="clear">
                    <span></span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
        </div>
        <div class="filter">
            <div class="filterItem clear">
                <span>适用行业</span>
                <p class="clear">
                    <span></span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
            <div class="filterItem clear">
                <span>艺人职业</span>
                <p class="clear">
                    <span></span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
            <div class="filterItem clear">
                <span>艺人特质</span>
                <p class="clear">
                    <span></span>
                    <i><img src="../../static/imgs/linkIcon.png" alt=""></i>
                </p>
            </div>
        </div>
        <div class="filter">
            <div class="filterItem clear">
                <span>价格范围</span>
                <div class="priceRange">
                    <input type="text" placeholder="请输入金额">
                    <span class="decorate">—</span>
                    <input type="text" placeholder="请输入金额">
                    <span>万</span>
                </div>
            </div>
        </div>
        <mt-picker :slots="slots"  :showToolbar="true"  :itemHeight="30" @change="get">
            <div class="pickerTitle" v-show="maskStatus">
                <div @click="pickerClose">取消</div>
                <div class="pickerTitleCon">{{choiceArr[pickNum].con}}</div>
                <div @click="pickerBtn">确定</div>
            </div>
        </mt-picker>
        <div class="mask" v-show="maskStatus" @click="maskclick"></div>
    </div>
</template>

<script>
    import { Picker } from 'mint-ui';
    import Vue from 'vue'
    export default {
        name: "filter-page",
        data() {
            return {
                maskStatus:0,//蒙层状态
                slots: [],//picker
                pickerVal:'',//选择器的内容
                pickNum:0,
                choiceArr1:[
                    {con:'类型选择',result:'',typesCon:''},
                    {con:'性别',result:'',sexCon:''},
                    {con:'年龄',result:'',ageCon:''},
                    {con:'家庭状态',result:'',familyCon:''},
                    {con:'艺人地区',result:'',regionCon:''},
                    {con:'适用行业',result:'',industryCon:''},
                    {con:'艺人职业',result:'',jobCon:''},
                    {con:'艺人特质',result:'',traitCon:''},
                ],
            };
        },
        computed:{
            choiceArr(){
                return this.choiceArr1;
            }
        },
        methods: {
            types(){//产品类型
                this.pickNum=0;
                this.maskStatus=1;
                this.slots=[{
                    flex: 1,
                    values: ['全部', '肖像照片', '商演活动', '形象代言', '自媒体'],
                    textAlign: 'center',
                    itemHeight:10
                }];
            },
            sex(){//性别
                this.pickNum=1;
                this.maskStatus=1;
                this.slots=[{
                    flex: 1,
                    values: ['全部', '男', '女'],
                    textAlign: 'center',
                    itemHeight:10
                }];
            },
            age(){//年龄
                this.pickNum=2;
                this.maskStatus=1;
                this.slots=[{flex: 1,values: ['全部', '男', '女'],textAlign: 'center', itemHeight:10}];
            },
            get(picker, values) {
                this.pickerVal=picker.getSlotValue(0)
            },
            pickerBtn(){//picker确认按钮
                // this.pickerVal//picker选中的值
                this.slots=[];
                this.maskStatus=0;
                this.choiceArr[this.pickNum].result=this.pickerVal;
                Vue.set(
                    this.choiceArr,
                    this.pickNum,
                    this.choiceArr[this.pickNum]
                );
            },
            pickerClose(){//picker取消按钮
                this.slots=[];
                this.maskStatus=0;
            },
            maskclick(){//点击蒙层
                this.slots=[];
                this.maskStatus=0;
            }
        },

    }
</script>

<style scoped>
    .filterWrap{width: 100%;background-color: #F3F3F3;}
    .loginCaption{width: 100%;height: 44px;padding: 0 15px;border-bottom: 1px solid #DBDBDB;background-color: #FFF;
        display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;
    }
    .returnPrevBtn{width: 8px;height: 14px;}
    .returnPrevBtn img{width: 100%;height: 100%;}
    .loginCaptionCon{font-size: 16px;}
    /*filter*/
    .filter{width: 100%;border-top: 1px solid #E7E7E7;border-bottom: 1px solid #E7E7E7;padding-left: 15px;margin-bottom: 10px;background-color: #FFF;}
    .filterItem{width: 100%;padding-right:15px;height: 40px;line-height: 40px;border-bottom: 1px solid #E7E7E7;}
    .filterItem:nth-last-of-type(1){border-bottom: 0;}
    .filterItem>span{float: left;}
    .filterItem>p{float: right;}
    .filterItem>p>span{float: left;color: #999;}
    .filterItem>p>i{width: 6px;height: 10px;float: left;margin: 15px 0 0 10px;}
    .filterItem>p>i>img{width: 100%;height: 100%;display: block;}
    .priceRange{float: right;height: 100%;}
    .priceRange>input{width: 75px;height: 98%;float: left;}
    .priceRange>span{float: left;}
    .decorate{margin: 0 10px;}
    /*picker*/
    .picker{width: 100%;background-color: #F3F3F3;border-top-left-radius: 5px;border-top-right-radius: 5px;overflow: hidden;
        position: fixed;left: 0;bottom: 0;z-index: 4;}
    .picker-item{color: #999;}
    .picker-selected{color: #333;}
    .picker-toolbar{border-radius: 10px;}
    .pickerTitle{width: 100%;height: 40px;background-color: #FFF;padding: 0 10px;line-height: 40px;font-size: 16px;color: #666;
    display: flex;justify-content: space-between;
    }
    .pickerTitle>div{height: 100%;}
    .pickerTitleCon{color: #333;font-size: 14px;}
    .mask{width: 100%;height: 100%;background-color: rgba(0,0,0,.5);position: fixed;left: 0;top: 0;z-index: 3;}
</style>