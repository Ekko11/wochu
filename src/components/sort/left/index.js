import React, { Component } from 'react'
import {LeftWrapper} from "./styled"
import {left_api} from "@api/sort"
import Observer from "../../../observer"
import {connect} from "react-redux"
import {mapStateToProps,mapDisPatchToProps} from "./mapState"
class Left extends Component {
   state={
        leftList:[],
        i:0
   }
    render() {
        let {leftList,i} = this.state
        Observer.$emit("handle",this.state.i)
        return (
            <LeftWrapper>
            <div className="left">
            <ul className="left-list" >
                <li
                onClick={this.handleparentId.bind(this)}
                ><p  className={i==0 ? 'active' : ''}>推荐</p></li>
                    {
                      leftList.map((item,index)=>(
                      <li key={index}
                        onClick={this.props.onclickHandle.bind(this,item.id,item.iconList[0].categoryId,item.name)}><p  className={item.id ==i ? 'active' : ''}>{item.name}</p></li>
                      ))  
                    }
            </ul>
            </div>
            </LeftWrapper>
        )
    }
    async componentDidMount(){
        let {leftList} = this.state
        let data= await left_api();
     this.setState({
        leftList:data.data
     })
    }
    handleparentId(){
     this.setState({
     i:0
     })
    }
}
export default connect(mapStateToProps,mapDisPatchToProps)(Left)