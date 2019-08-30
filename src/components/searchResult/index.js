import React, { Component } from 'react'
import { SearchWrapper } from "./styled"
import { connect } from "react-redux"
import { search_api } from "@api/sort"
import add from "@static/img/add_cart.png"
import {withRouter} from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./connect"
class SearchResult extends Component {
    constructor() {
        super()
        this.state = {
            searchList:[]
        }
    }
    render() {
        console.log(this, 888)
        let { searchList } = this.state
        console.log(searchList)
        return (
            <SearchWrapper>
                <div className="ul">
                    <ul>
                        {searchList.map((item,index)=>(
                        <li className="li-on" key={index}>
                            <div className="fl">
                                <img src={item.picUrl} onClick={this.props.handleToDetail.bind(this,item.goodsGuid)}/>
                            </div>
                            <div className="fr">
                                <div className="goods-name">{item.goodsName}</div>
                                <div className="goods-intro">{item.description}</div>
                                <div className="goods-price">
                                    <p>￥{item.price}<del>{item.marketPrice}</del></p>
                                    <span><img src={add} onClick={this.props.handleToCategory.bind(this,item)}/></span>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </SearchWrapper>
        )
    }
    async componentDidMount() {
        console.log(this.props.searchVal, 999)
        let data = await search_api(this.props.searchVal)
        this.setState({
           searchList:data.data.items
        })
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult))