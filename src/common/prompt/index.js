import React, { Component } from 'react'
import PromptWrap from "./styled"
export default class Prompt extends Component {
    render() {
        return (
            this.props.flag?
            <PromptWrap>
                <p>{this.props.info || "（づ￣3￣）づ╭❤～"}</p>  
                <p>{this.props.tip || "您确定要这么做吗"}</p>
                <div>
                    <div onClick={this.handleCancle.bind(this)}>取消</div>
                    <div onClick={this.handleSure.bind(this)}>确定</div>
                </div>
            </PromptWrap>:""
        )
    }
    handleCancle(){
        if(this.props.cancle)this.props.cancle()
      
    }
    handleSure(){
        if(this.props.sure) this.props.sure()
       
    }
    componentWillReceiveProps(...rest){
       console.log("穿过来的数据改变了")
    }
    // componentWillUpdate(){
    //     console.log("更新")
    //     this.setState({
    //         flag:this.props.flag
    //     })

    // }
}
Prompt.defaultProps={
    flag:true
}