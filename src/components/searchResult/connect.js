import { addShop_order} from "@store/orderAction"
export const mapStateToProps=(state)=>({
    searchVal:state.goodsList.searchVal,
    isLogin:state.order.isLogin
})
export const mapDispatchToProps=(dispatch)=>({
    handleToCategory(item){
        if(this.props.isLogin){
            dispatch(addShop_order(item))
            this.props.history.push({pathname:"/order"})
        }else{
            this.props.history.push("/login")
        }
    },
    handleToDetail(goodsGuid){
        sessionStorage.setItem("goodsGuid",goodsGuid)
        this.props.history.push({ pathname: "/details",query:{goodsGuid:goodsGuid}})
    }
})