<template>
    <div class="resultWrap">
        搜索结果页
        <!--<div v-if="status.type==1">-->
            <!--<router-link :to="{name:'detail',params:{id:childItems.id}}" class="starInfoItem" v-for="(childItems,childIndex) in items">-->
                <!--<div class="starInfo">-->
                    <!--<div class="starInfoPicWrap">-->
                        <!--<img :src="childItems.imgs" alt="">-->
                    <!--</div>-->
                    <!--<div class="starInfoDetail">-->
                        <!--<p>{{childItems.names}}</p>-->
                        <!--<div class="secrecy">-->
                            <!--<img src="../../static/imgs/secrecy.png" alt="">-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</router-link>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "search-result",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .resultWrap{width: 100%;}
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
</style>