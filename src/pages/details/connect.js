
export const mapStateToProps=(state)=>({
    categoryId:state.goodsList.categoryId,
    shoppingList:localStorage.getItem("shoppingList")||state.goodsList.goodsList,
    titleName:state.goodsList.titleName
})
export const mapDispatchToProps=(dispatch)=>({
    
})