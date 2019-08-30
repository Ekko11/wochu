import React, { Component } from 'react'
import { NavWrapper } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "@pages/classify/connect"
import Observer from "../../../observer"
import {withRouter} from "react-router-dom"
class Nav extends Component {
    state={
        togIndex:1,
        m:1
    }
    componentDidMount(){
        let {displayIndex} = this.props.match.params;
        this.state.togIndex=displayIndex;
    }
    render() {
      let {shoppingList} = this.props
    
      let {togIndex} = this.state
        return (
            <NavWrapper>
                <ul>
                    { shoppingList.map((item,index)=>(
                        <li key={index} >
                        <p onClick={this.togglePageHandle.bind(this,item.displayIndex)} className={item.displayIndex==togIndex?"active":""}>{item.name}</p>
                    </li>
                    ))    }
                </ul>
                <div className="container">
                        <div id="zuo" className={this.state.m==1?"active1":""} onClick={this.changeData.bind(this) }>特惠</div>
                        <div id="you" onClick={this.changeColor.bind(this)}className={this.state.m==2?"active1":""}>价格</div>
                </div>
            </NavWrapper>
        )
    }
    togglePageHandle(displayIndex){
        sessionStorage.setItem("displayIndex",displayIndex)
        this.setState({
            togIndex:displayIndex
        })
        Observer.$emit("handletog",displayIndex)
    }
    changeColor(){
        this.setState({
            m:2
        })  
  
   
 
    }
    changeData(){
        this.setState({
            m:1
        })
          this.props.handleGetGoodsList(this.props.categoryId)
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
