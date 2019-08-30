import React, { Component, Fragment } from 'react'
import ClassifyHeader from "@components/classify/header"
import Nav from "@components/classify/nav"
import { connect } from "react-redux"
import { ClassifyWrapper } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import observer from '../../observer';
import { withRouter } from "react-router-dom"
class Classify extends Component {
    state = {
        getIndex: 0
    }
    componentWillMount() {
        let { displayIndex } = this.props.match.params;
        this.state.getIndex = displayIndex;
    }
    render() {
        let { shoppingList } = this.props
        let { getIndex } = this.state
        return (
            <Fragment>
                <ClassifyHeader title={this.props.titleName} />
                <Nav categoryId={this.props.categoryId} />
                <ClassifyWrapper>
                    <div className="ul">
                        {
                            shoppingList.map((item, index) => (
                                <ul key={index}>
                                    {
                                        item.displayIndex == getIndex ? item.goods.map((child, idx) => (
                                            <li className="li-on" key={idx} onClick={this.classifyToDetail.bind(this,child.goodsGuid)}>
                                                <div className="fl">
                                                    <img src={child.picUrl} />
                                                </div>
                                                <div className="fr">
                                                    <div className="goods-name">{child.goodsName}</div>
                                                    <div className="goods-intro">{child.description}</div>
                                                    <div className="goods-price">
                                                        <p>￥{child.price}<del>{child.marketPrice}</del></p>
                                                        <span>111</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )) : ""
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </ClassifyWrapper>
            </Fragment>
        )
    }
    classifyToDetail(goodsGuid) {
        this.props.history.push({ pathname: "/details",query:{goodsGuid:goodsGuid}})
    }
    componentDidMount() {
        let { categoryId } = this.props;
        this.props.handleGetGoodsList(categoryId);
        observer.$on("handletog", (val) => {
            this.setState({
                getIndex: val
            })
        })
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Classify))
