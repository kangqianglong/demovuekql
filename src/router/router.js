//该文件专门创建整个应用的路由器
import VueRouter from 'vue-router'
import Vue from 'vue'
//引入组件
import About from '../views/About'
import Home from '../views/Home'
import Ruizhong from '../views/Ruizhong.vue'

// 将组件挂载在实例上
Vue.use(VueRouter)

//创建并暴露一个路由器
const router=new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/ruizhong',
            component:Ruizhong
        },
    ],
    mode:'history'
})

// 向外抛出路由组件
export default router