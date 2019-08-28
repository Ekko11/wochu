import React, { Component, Fragment } from 'react';
import store from "@store";
import { Gardens } from "./styled";
import { garden_async_lists } from "../../actions/home/actionCreators";
import { connect } from "react-redux";
import add_cart from "@static/img/add_cart.png"
class Garden extends Component {
    render() {
        let { gardenData } = this.props;
        return (
            <Fragment>
                {
                    gardenData[0] ?
                        <Gardens>
                            <div>
                                <div>
                                    <img src={gardenData[0].imageUrl} alt="" />
                                    <img src={gardenData[1].imageUrl} alt="" />
                                    <img src={gardenData[2].imageUrl} alt="" />
                                    <img src={gardenData[3].imageUrl} alt="" />
                                </div>
                                <div className="gardenSix">
                                    {
                                        gardenData[4].shelveList.map((item, index) => (
                                            <div  key={index}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt=""/>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="gardenSix">
                                    {
                                        gardenData[5].shelveList.map((item, index) => (
                                            <div  key={index}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt=""/>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Gardens>
                        : ""
                }
            </Fragment>
        )
    }
    async componentDidMount() {
        store.dispatch(garden_async_lists())
    }
}

const mapStateToProps = (state) => ({
    gardenData: state.home.gardenData,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Garden);

