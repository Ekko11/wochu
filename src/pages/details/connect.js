import { addShop_order} from "@store/orderAction"
export const mapStateToProps=(state)=>({
    categoryId:state.goodsList.categoryId,
    shoppingList:localStorage.getItem("shoppingList")||state.goodsList.goodsList,
    titleName:state.goodsList.titleName,
    isLogin:state.order.isLogin

})
export const mapDispatchToProps=(dispatch)=>({
    handleToGwc(item){
        if(this.props.isLogin){
            dispatch(addShop_order(item))
            this.props.history.push({pathname:"/order"})
        }else{
            this.props.history.push("/login")
        }
    },
    relativeToCategroy(item){
        if(this.props.isLogin){
            dispatch(addShop_order(item))
        }else{
            this.props.history.push("/login")
        }
    }
})