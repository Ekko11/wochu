import {searchAction} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({

})
export const mapDispatchToProps=(dispatch)=>({
    addHandle(){
        this.state.searchList.push(this.state.inputVal)
        dispatch(searchAction(this.state.inputVal))
        sessionStorage.setItem("searchList",JSON.stringify(this.state.searchList))
        this.setState({
            searchList:this.state.searchList,
            inputVal:"",
            flag:false
        })
    }
})