import http from "@utils/http"
export const sort_left=(parameters="%7B%22menu%22%3A0%7D")=>http.get("/client/v1/goods/GetCategoryListByMenuId",{parameters:parameters})
export const commend_api=()=>http.get("/client/v1/goods/GetCategoryRecommendList")
export const left_api=(parameters="%7B%22parentId%22%3A0%7D")=>http.get("/client/v1/Goods/GetCategoryListFromPid",{parameters:parameters})
export const goodsList_api=(categoryId,orderId=1)=>http.get("/api/goods/getcategoryandgoods",{categoryId:categoryId,orderId:orderId})
export const hot_search=()=>http.get("/client/v1/goods/SearchByTag")
export const details_api=(goodsGuid)=>http.get("/api/goods/goods/detail",{goodsGuid:goodsGuid})
export const get_img=(goodsGuid)=>http.get("/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22"+goodsGuid+"%22%7D")
export const details_relative=(goodsGuid)=>http.get("/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%22"+goodsGuid+"%22%7D")
export const search_api=(keyword,orderId=0,pageIndex=1,pageSize=20)=>http.get("/api/goods/searchbykeyword",{keyword:keyword,orderId:orderId,pageIndex:pageIndex,pageSize:pageSize})


// http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=3&pageSize=20&keyword=%E