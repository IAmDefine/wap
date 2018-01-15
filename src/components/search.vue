<template>
    <div class="searchWrap">
        <div class="searchOutWrap">
            <div class="search clear">
                <div class="searchInput">
                    <div class="searchInputPic"><img src="../../static/imgs/search.png" alt=""></div>
                    <input type="text" placeholder="输入要搜索的艺人名称" v-model="searchTxt" autofocus>
                </div>
                <div class="searchCancel" @click="searchLink">{{searchLinkTxt}}</div>
            </div>
        </div>
        <div v-if="Boolean(hisStorage.length)" v-show="hisStatus">
            <div class="searchTitle">
                <span>搜索历史</span>
                <img src="../../static/imgs/searchDelIcon.png" alt="" class="searchDelIcon" @click="delStorage">
            </div>
            <div class="hisWrap clear" >
                <div class="hisItem" v-for="(data,index) in hisStorage" @click="hisBtn(index)">{{data.con}}</div>
            </div>
        </div>
        <div class="searchTitle">
            <span>热门搜索</span>
            <img src="../../static/imgs/hotSearchIcon.png" alt="" class="hotSearchIcon">
        </div>
        <div class="hisWrap clear">
            <div class="hisItem">周润发</div>
            <div class="hisItem">三重刘德华</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "search",
        data(){
            return{
                searchTxt:'',//搜索内容
                hisStoragedata:[],
                hisStatus:1,
            }
        },
        computed:{
            searchLinkTxt(){
                return this.searchTxt?'搜索':'取消'
            },
            hisStorage(){//搜索历史
                return Boolean(sessionStorage.getItem('searchStorage'))?JSON.parse(sessionStorage.getItem('searchStorage')):this.hisStoragedata;
            }

        },
        methods:{
            searchLink(){//搜索结果页:返回首页
                this.searchTxt?this.$router.push('/searchResult'):this.$router.push('/home');
                // this.$post('/search/index.php',{keys:this.searchTxt})
                //     .then((res)=>{
                //         console.log(res)
                //     });
                this.hisStatus=1;
                if(!Boolean(sessionStorage.getItem('searchStorage'))){//搜索历史
                    this.hisStoragedata.push({con:this.searchTxt});
                    sessionStorage.setItem('searchStorage',JSON.stringify(this.hisStoragedata));
                }else{
                    this.hisStoragedata=JSON.parse(sessionStorage.getItem('searchStorage'));
                    this.hisStoragedata.push({con:this.searchTxt});
                    sessionStorage.setItem('searchStorage',JSON.stringify(this.hisStoragedata));
                }
            },
            delStorage(){//删除搜索历史
                sessionStorage.removeItem('searchStorage');
                this.hisStoragedata='';
                this.hisStatus=0;
            },
            hisBtn(index){//搜索历史
                alert(this.hisStorage[index].con)
            }
        },
        watch:{
            // hisStorage:function(hisStorage,old){
            //     alert(hisStorage)
            //     alert(old)
            // }
        }
    }
</script>
<style scoped>
    .searchOutWrap{padding: 10px 0;margin-bottom: 28px;}
    .searchWrap{width: 100%;}
    .search{width: 100%;padding: 0 15px 0 318px; position: relative;}
    .searchCancel{height: 30px;line-height: 30px;float: right;}
    .searchInput{width: 303px;height: 30px;padding-left: 32px; background-color: #F2F2F2;border-radius: 20px;
        position: absolute;left: 15px;top: 0;overflow: hidden;}
    .searchInputPic{width: 32px;height: 100%;position: absolute;left: 0;top: 0;
        display: flex;justify-content: center;align-items: center;
    }
    .searchInputPic>img{width: 12px;height: 12px;}
    .searchInput>input{width: 100%;height: 98%;background-color: #F2F2F2}
    /*searchTitle*/
    .searchTitle{width: 100%;height: 15px;line-height: 15px;padding: 0 15px;
    display: flex;justify-content: space-between;align-items: center;
    }
    .searchTitle img{display: block;}
    .searchDelIcon{width: 12px;height: 14px;}
    .hisWrap{width: 100%;padding: 0 15px;font-size: 12px;margin-bottom: 25px;}
    .hisItem{padding: 8px 17px;border-radius: 25px;float: left;margin: 10px 10px 0 0;background-color: #F5F5F5;}
    .hotSearchIcon{width: 14px;height: 13px;}
    
    
    
    
    
    
    
    
    
    
    
    
</style>