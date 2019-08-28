import {goodsListIndexAction} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({
    categoryId:state.goodsList.categoryId
})
export const mapDisPatchToProps=(dispatch)=>({
    onclickHandle(id,categoryId,titleName){
        this.setState({
            i:id
        })
     dispatch(goodsListIndexAction(categoryId,titleName))

    },
  
})