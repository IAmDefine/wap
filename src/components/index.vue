<template>
  <div class="yxkPage">
    <div class="tabWrap clear">
      <div class="tabItem" v-for="(tabArr,index) in tabArr" @click="linkChange(index)">
        <i :class="tabArr.cls"></i>
        <p :class="{yxkChecked:index==num}">{{tabArr.con}}</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
      data(){
          return {
              tabArr:[{'con':'星库','cls':'homeIcon homeIconChecked','linkTo':'/home'},
                  {'con':'找艺人','cls':'findIcon','linkTo':'/findStar'},
                  {'con':'星资讯','cls':'starIcon','linkTo':'/starNews'},
                  {'con':'我的','cls':'myIcon','linkTo':'/myInfo'}
              ],
              num:0,
              newPath:'',
          }
      },
        computed:{
            ...mapState(['status']),
        },
        methods:{
            linkChange(index){//针对点击首页下方tab切换 加交互效果
                this.$router.push(this.tabArr[index].linkTo);
                for(let i=0;i<this.tabArr.length;i++){
                    if(this.tabArr[i].cls.match('Checked')){
                        this.tabArr[i].cls=this.tabArr[i].cls.slice(0,this.tabArr[i].cls.indexOf(' '))
                    }
                }
                this.num=index;
                this.tabArr[index].cls+=' '+this.tabArr[index].cls+'Checked';
            }
        },
        mounted(){
          if(this.status==2){
            this.tabArr=[{'con':'星库','cls':'homeIcon homeIconChecked','linkTo':'/home'},
                {'con':'星资讯','cls':'starIcon','linkTo':'/starNews'},
                {'con':'订单','cls':'orderIcon','linkTo':'/starOrder'},
                {'con':'我的','cls':'myIcon','linkTo':'/myInfo'}]}
            for(let i=0;i<this.tabArr.length;i++){//判断当前所在路由 加交互效果 针对刷新当前页面
                if(this.tabArr[i].cls.match('Checked')){
                    this.tabArr[i].cls=this.tabArr[i].cls.slice(0,this.tabArr[i].cls.indexOf(' '))
                }
                if(this.tabArr[i].linkTo==this.newPath){
                    this.tabArr[i].cls+=' '+this.tabArr[i].cls+'Checked';
                    this.num=i;
                }
            }
        },
        updated:function(){
            this.newPath='/'+this.$route.name
        },
        watch:{
          newPath:function(newPath){//监控路由 并加交互效果 针对跳转/home
              for(let i=0;i<this.tabArr.length;i++){
                  if(this.tabArr[i].cls.match('Checked')){
                      this.tabArr[i].cls=this.tabArr[i].cls.slice(0,this.tabArr[i].cls.indexOf(' '))
                  }
                  if(this.tabArr[i].linkTo==newPath){
                      this.tabArr[i].cls+=' '+this.tabArr[i].cls+'Checked';
                      this.num=i;
                  }
              }
            }
        }
    }
</script>
<style scoped>
  .yxkPage{width: 100%;height: 100%;}
  .tabWrap{width: 100%;height: 50px;position: fixed;left:0;bottom: 0;border-top: 1px solid #E7E7E7;background-color: #FFFFFF;}
  .tabItem{display: block; float: left;width: 25%;height: 100%;padding-top: 7.5px;
    text-align: center;color: #666666;}
  .tabItem i{margin: 0 auto 4.5px auto;}
  .homeIcon{width: 19px;height: 18px;background-image: url("../../static/imgs/homeIcon.png");background-size: 100% 100%;}
  .findIcon{width: 18px;height: 18px;background-image: url("../../static/imgs/findIcon.png");background-size: 100% 100%;}
  .starIcon{width: 18px;height: 18px;background-image: url("../../static/imgs/starIcon.png");background-size: 100% 100%;}
  .myIcon{width: 17px;height: 18px;background-image: url("../../static/imgs/myIcon.png");background-size: 100% 100%;}
  .newsIcon{width: 18px;height: 18px;background-image: url("../../static/imgs/starIcon.png");background-size: 100% 100%;}
  .orderIcon{width: 18px;height: 18px;background-image: url("../../static/imgs/orderIcon.png");background-size: 100% 100%;}
  .homeIconChecked{background-image: url("../../static/imgs/homeIconChecked.png");}
  .findIconChecked{background-image: url("../../static/imgs/findIconChecked.png");}
  .starIconChecked{background-image: url("../../static/imgs/starIconChecked.png");}
  .myIconChecked{background-image: url("../../static/imgs/myIconChecked.png");}
  .newsIconChecked{background-image: url("../../static/imgs/starIconChecked.png");}
  .orderIconChecked{background-image: url("../../static/imgs/orderIconChecked.png");}


</style>
