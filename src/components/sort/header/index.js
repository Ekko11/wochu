import React, { Component } from 'react'
import {HeaderWrapper} from './styled'
import {withRouter} from "react-router-dom"
class Sort extends Component {
    render() {
        return (
            <HeaderWrapper>
            <div className="search-ctl">
               1111
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
