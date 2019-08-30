import React, { Component } from 'react'
import {HeaderWrapper} from './styled'
import {withRouter} from "react-router-dom"
import search from "@static/img/home_search.png"
class Sort extends Component {
    render() {
        return (
            <HeaderWrapper>
            <div className="search-ctl">
              <img src={search}/>
            </div>
            <div className="search-key">
                <input type="text" placeholder="支持首字母搜索" onClick={this.toSearch.bind(this)}/>
            </div>
            </HeaderWrapper>
        )
    }
    toSearch(){
       this.props.history.push({pathname:"/search"})
    }
}
export default withRouter(Sort)
