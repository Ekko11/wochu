import {handleActions} from "redux-actions"
const defaultState = {
  categoryId:1,
  goodsList:[],
  titleName:"我厨优选",
  searchVal:""
}
export default handleActions({
    GOODSLISTINDEX:(state,action)=>{
        let goodsListIndexState=Object.assign({},state)
        goodsListIndexState.categoryId=action.payload.categoryId;
        goodsListIndexState.titleName=action.payload.titleName;
        return goodsListIndexState
    },
    GOODS_LIST:(state,action)=>{
      let goodsListState=Object.assign({},state)
      goodsListState.goodsList = action.payload.data.categories;
      localStorage.setItem("shopingList",goodsListState)
      return goodsListState
    },
    SEARCH:(state,action)=>{
       let searchState=Object.assign({},state)
       searchState.searchVal=action.payload
       return searchState
    }
},defaultState)