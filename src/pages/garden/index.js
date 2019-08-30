import React, { Component, Fragment } from 'react';
import store from "@store";
import { Gardens } from "./styled";
import { garden_async_lists } from "../../actions/home/actionCreators";
import { connect } from "react-redux";
import add_cart from "@static/img/add_cart.png";
import scroll_top from "@static/img/scroll_top.png";
import ac_cart from "@static/img/ac_cart.png";
import {addShop_order} from "@store/orderAction"
class Garden extends Component {
    constructor() {
        super();
        this.state = {
            flag: false,
        }
    }
    render() {
        let { gardenData } = this.props;
        return (
            <Fragment>
                {
                    gardenData[0] ?
                        <Gardens ref="a">
                            <div>
                                <div>
                                    <img src={gardenData[0].imageUrl} alt="" />
                                    <img src={gardenData[1].imageUrl} alt="" />
                                    <img src={gardenData[2].imageUrl} alt="" />
                                    <img src={gardenData[3].imageUrl} alt="" />
                                </div>
                                <div className="gardenAll">
                                    {
                                        gardenData[4].shelveList.map((item, index) => (
                                            <div key={index} onClick={this.props.handleDetails.bind(this, item.goodsGuid)}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt="" onClick={this.props.handleOrders.bind(this,item)}/>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="gardenAll">
                                    {
                                        gardenData[5].shelveList.map((item, index) => (
                                            <div key={index} onClick={this.props.handleDetails.bind(this, item.goodsGuid)}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <img src={gardenData[6].imageUrl} alt="" />
                                </div>
                                <div className="gardenFour">
                                    {
                                        gardenData[7].shelveList.map((item, index) => (
                                            <div key={index} onClick={this.props.handleDetails.bind(this, item.goodsGuid)}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <img src={gardenData[8].imageUrl} alt="" />
                                    <img src={gardenData[9].imageUrl} alt="" />
                                </div>
                                <div className="gardenAll">
                                    {
                                        gardenData[10].shelveList.map((item, index) => (
                                            <div key={index} onClick={this.props.handleDetails.bind(this, item.goodsGuid)}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <img src={gardenData[11].imageUrl} alt="" />
                                </div>
                                <div className="gardenAll">
                                    {
                                        gardenData[12].shelveList.map((item, index) => (
                                            <div key={index} onClick={this.props.handleDetails.bind(this, item.goodsGuid)}>
                                                <img src={item.icon} alt="" />
                                                <div>{item.goodsName}</div>
                                                <div>{item.marketPrice}</div>
                                                <div>
                                                    <span>{item.price}</span>
                                                    <img src={add_cart} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <img src={gardenData[13].imageUrl} alt="" />
                                </div>
                                <div className="scrollTop" onClick={this.props.handleScroll.bind(this)}>
                                    <img src={scroll_top} alt="" />
                                </div>
                            </div>
                            <div className="ac_cart">
                                <img src={ac_cart} alt=""  onClick={this.props.handlegoodList.bind(this)}/>
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
    isLogin:state.order.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    handleDetails(goodsGuid,e) {
        this.props.history.push("/details/"+goodsGuid);
    },
    handleScroll() {
        let b =setInterval(()=>{
            this.refs.a.scrollTop =this.refs.a.scrollTop-400;
            if (this.refs.a.scrollTop <= 0) {
                clearInterval(b);
            }
        },50)
    },
    handlegoodList(){
        this.props.history.push("/order");
    },
    handleOrders(num,e){
        num.picUrl = num.icon
        e.stopPropagation();
        if(this.props.isLogin){
            dispatch(addShop_order(num))
        }else{
            this.props.history.push("/login")
        }
    }      
})

export default connect(mapStateToProps, mapDispatchToProps)(Garden);

