import { Home,Find,Order,Mine,Login,Classify,Search,Details} from "@pages"

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
        icon:"\ue626",
        // children:{
        //     path:"/find/classify",
        //     component:Classify,
        //     meta:{
        //         flag:false,
        //     },
        //     name:"二级分类",
        // }
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
        icon:"\ue61c"
    },
   
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
        path:"/classify/:categoryId/:displayIndex",
        component:Classify,
        meta:{
            flag:false
        },
        name:"二级分类",
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:false,
        },
        name:"搜索",
        icon:"\ue61c"
    },
    {
        path:"/details",
        component:Details,
        meta:{
            flag:false,
        },
        name:"详情",
        icon:"\ue61c"
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)