import {createAction} from "redux-actions";
import {goodsList_api} from "@api/sort"
export const goodsListIndexAction=createAction("GOODSLISTINDEX",(val,value)=>({categoryId:val,titleName:value}))
//同步
export const goodsListAction = createAction("GOODS_LIST",(val)=>val);
//异步
export const goodsListAsyncAction = (categoryId)=>{
    return async (dispatch)=>{
        let data = await goodsList_api(JSON.parse(sessionStorage.getItem("categoryId"))||categoryId);
        dispatch(goodsListAction(data));
    }
}
export const searchAction=createAction("SEARCH",(val)=>val)