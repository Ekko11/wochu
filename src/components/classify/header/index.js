import React, { Component } from 'react'
import {ClassifyHeaderWrapper} from "./styled"
import {withRouter} from "react-router-dom"
import gwc from "@static/img/25.png"
import search from "@static/img/home_search.png"
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
                <img src={gwc} onClick={this.toCategory.bind(this)}/>
                </div>
                <div>
                <img src={search} onClick={this.toSearch.bind(this)} className="search-key"/>
                </div>
                </div>
                </div>
               
            </ClassifyHeaderWrapper>
        )
    }
    handleBack(){
       this.props.history.goBack()
    }
    toSearch(){
        this.props.history.push({pathname:"/search"})
    }
    toCategory(){
        this.props.history.push({pathname:"/order"})
    }
}

export default withRouter(ClassifyHeader)