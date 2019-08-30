import {goodsListAsyncAction} from "@actions/actionCreator"
import { addShop_order} from "@store/orderAction"

export const mapStateToProps=(state)=>({
    categoryId:state.goodsList.categoryId,
    shoppingList:state.goodsList.goodsList,
    titleName:state.goodsList.titleName,
    isLogin:state.order.isLogin
})
export const mapDispatchToProps=(dispatch)=>({
    handleGetGoodsList(categoryId){
        dispatch(goodsListAsyncAction(JSON.parse(sessionStorage.getItem("sort")).categoryId||categoryId))
    },
    ClassifytoCategory(item){
           if(this.props.isLogin){
            dispatch(addShop_order(item))
        }else{
            this.props.history.push("/login")
        }
    }
})