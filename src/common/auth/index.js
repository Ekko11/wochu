import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
export default (PageWrapper)=>{
    return class extends Component {
        render(){
            //  使用高阶组件时，会代理被包裹组件的props
            let {path,meta} = this.props
            if(meta.auth && path!=="/login"){
                let token = sessionStorage.getItem("token")
                if(!token){
                  return  <Redirect to="/login"/>
                }else{
                    return <PageWrapper {...this.props}/>
                }
            }


            return <PageWrapper {...this.props}/>
        }


    }
   
}

