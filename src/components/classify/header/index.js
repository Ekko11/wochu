import React, { Component } from 'react'
import {ClassifyHeaderWrapper} from "./styled"
import {withRouter} from "react-router-dom"
 class ClassifyHeader extends Component {
    constructor(){
        super()
        this.state={
            title:"我厨优选"
        }
    }
    componentWillMount(){
        this.state.title=this.props.title
    }
    render() {
        let {title} = this.state
        return (
            <ClassifyHeaderWrapper>
                <div className="search-ctl">
                <div className="back" onClick={this.handleBack.bind(this)}>&lt;</div>
                <div className="parent-name">
                    <p>
                        <span>{title}</span>
                    </p>
                </div>
                <div className="header_right">
                <div className="go-cart">
                购物车
                </div>
                <div className="search-key">
                搜索
                </div>
                </div>
                </div>
               
            </ClassifyHeaderWrapper>
        )
    }
    handleBack(){
       this.props.history.goBack()
    }
}

export default withRouter(ClassifyHeader)