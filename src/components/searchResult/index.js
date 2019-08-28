import React, { Component } from 'react'
import {SearchWrapper} from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
class SearchResult extends Component {
    render() {
        console.log(this.props)
        return (
            <SearchWrapper>
                <div className="ul">
                    <ul>
                        <li className="li-on">
                            <div className="fl">
                                <img />
                            </div>
                            <div className="fr">
                                <div className="goods-name">00</div>
                                <div className="goods-intro">88</div>
                                <div className="goods-price">
                                    <p>￥88<del>55</del></p>
                                    <span>111</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </SearchWrapper>
        )
    }
   async componentDidMount(){
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult)