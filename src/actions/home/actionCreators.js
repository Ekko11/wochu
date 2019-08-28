import {home_list,garden} from "./actionTypes";
import { home_apis,garden_api } from "@api/home";
export const home_lists=(datas)=>({
    type:home_list,
    value:datas
})

export const home_async_lists=()=>{
    return async(dispatch)=>{
        let datas=await home_apis();
        dispatch(home_lists(datas));
    }
}


export const garden_lists=(datas)=>({
    type:garden,
    value:datas
})

export const garden_async_lists=()=>{
    return async(dispatch)=>{
        let datas=await garden_api();
        dispatch(garden_lists(datas));
    }
}

