import { Home,Find,Order,Mine,Login,Garden} from "@pages"

export const tabBarRoute =[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true,
            bgFlag:false,
            index:0
        },
        name:"首页",
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true,
            bgFlag:false,
            index:1
        },
        name:"分类",
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true,
            bgFlag:false,
            index:2

        },
        name:"订单",
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            bgFlag:false,
            index:3,
            auth:false
        },
        name:"我的",
    }
]

export const noTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登录",

    },
    {
        path:"/garden",
        component:Garden,
        meta:{
            flag:false
        },
        name:"我的菜园",

    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)