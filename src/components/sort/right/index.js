import React, { Component } from 'react'
import {RightWrapper} from "./styled"
import {commend_api,sort_left} from "@api/sort"
import Observer from "../../../observer"
import {connect} from "react-redux"
import {mapStateToProps,mapDisPatchToProps} from "../left/mapState"
import {withRouter} from "react-router-dom"
 class Right extends Component {
  constructor(){
      super()
      this.state={
        rightList:[],
        flag:true,
        rightGoodsList:[],
        togIndex:0,
        categoryId:0
    }
  }
  componentWillReceiveProps(){
      this.state.categoryId=this.props.categoryId
  }
    render() {
        let {rightList,flag,rightGoodsList,togIndex}=this.state
        return (
            <RightWrapper>
            <div className="right">
              {  flag?<div className="right1">
                {
                   rightList.map((item,index)=>(
                       <div className="class-item" key={index}>
                       <div className="title-wrap">
                           <div className="float-wrap">
                           <span className="f1"></span>
                           <p className="label">{item.name}</p>
                           <span className="fr"></span>
                           </div>
                       </div>
                       <ul className="tuijian">
                        {
                            item.children.map((child,idx)=>(
                                <li key={idx} >
                                <div className="imgCon">
                                <img src={child.imgUrl}/>
                                <p>{child.name}</p>
                                </div>
                                </li>
                            ))
                        }
                       </ul>
                   </div>
                   ))   
              }
               </div>:<div className="details">
                 <ul className="tuijian">
                 {
                    rightGoodsList.map((it,inx)=>(
                        togIndex==it.parentId?
                        <li key={inx} onClick={this.handleToClassify.bind(this,this.props.categoryId,it.displayIndex)}>
                        <div className="imgCon">
                        <img src={it.checkicon}/>
                        <p>{it.name}</p>
                        </div>
                        </li>:""
                    ))
                 }
                 </ul>
              </div>}
              </div>
            </RightWrapper>
        )
    }
    async componentDidMount(){
        let data= await commend_api();
        let data1=await sort_left()
        Observer.$on("handle",(val)=>{
            if(val!==0){
                this.setState({
                    flag:false
                })
            }else if(val===0){
                this.setState({
                    flag:true
                })
            } 
            this.setState({
                 togIndex:val
           })
         })
    this.setState({
        rightList:data.data,
        rightGoodsList:data1.data,
     })
    
    }
    handleToClassify(categoryId,displayIndex){
        console.log(categoryId,222)
       this.props.history.push("/classify/"+categoryId+"/"+displayIndex)
       console.log(displayIndex,2233)
    }
   
}
export default withRouter(connect(mapStateToProps,mapDisPatchToProps)(Right))