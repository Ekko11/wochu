import http from "@utils/http"

export const order_api =()=>(http.get("/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D"))

export const good_time = ()=>(http.get("/client/v1/sameday/getLoadHomeSameDayInfo"))

// http://api9.wochu.cn/client/v1/sameday/getLoadHomeSameDayInfo