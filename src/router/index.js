import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import findStar from '@/components/findStar'
import starNews from '@/components/starNews'
import myInfo from '@/components/myInfo'
import login from '@/components/login'
import reg from '@/components/reg'
import reset from '@/components/reset'
import set from '@/components/set'
import modifyCode from '@/components/modifyCode'
import starOrder from '@/components/starOrder'
import detail from '@/components/detail'
import search from '@/components/search'
import searchResult from '@/components/searchResult'
import filter from '@/components/filter'

Vue.use(Router);
const router=new Router({
    routes: [
        {
            path: '/',
            component: index,
            children:[
                {
                    path: '/home',
                    name:'home',
                    component: home,
                    alias:'/'
                },
                {
                    path: '/findStar',
                    name:'findStar',
                    component: findStar,
                    // meta: { status: true }
                },
                {
                    path: '/starNews',
                    name:'starNews',
                    component: starNews
                },
                {
                    path: '/myInfo',
                    name: 'myInfo',
                    component: myInfo,
                    meta: { status: true }
                },
                {
                    path: '/starOrder',
                    name: 'starOrder',
                    component: starOrder,
                    meta: { status: true }
                },
            ]
        },{
            path: '/login',
            name :'login',
            component: login
        },{
            path: '/reg',
            name:'reg',
            component: reg
        },{
            path: '/reset',
            name:'reset',
            component: reset
        },{
            path: '/set',
            name:'set',
            component: set
        },{
            path: '/modifyCode',
            name:'modifyCode',
            component: modifyCode
        },{
            path: '/detail',
            name:'detail',
            component: detail
        },{
            path: '/search',
            name:'search',
            component: search
        },{
            path: '/searchResult',
            name:'searchResult',
            component: searchResult
        },{
            path: '/filter',
            name:'filter',
            component: filter
        },


    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.status)) {
        if (!router.app.$store.state.status.id) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router;
