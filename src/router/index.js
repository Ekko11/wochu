import { Home,Find,Order,Mine,Login,Classify,Search,Details} from "@pages"

export const tabBarRoute =[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue61a"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
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
            flag:true
        },
        name:"订单",
        icon:"\ue69e"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            auth:true
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