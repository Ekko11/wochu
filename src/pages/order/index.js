import React, { Component } from 'react'
import {order_api} from "@api/order"
import {OrderWrap} from "./styled"
export default class Order extends Component {
    state={
        list:[]
    }
    render() {
        let {list} = this.state
        console.log(list)
        return (
            <OrderWrap>
            <div className="wrapDiv">
                <div className="loginBn">
                    <div>登 录</div>
                </div>
                <img src={require("@static/img/recommend.png")} alt=""/>

                <div className="recom_list">
                {
                    list.map((item,index)=>(
                        <div className="goods" key={index}>
                        <img src={item.icon} alt=""/>
                        <div className="wrap">
                        <p className="goodDec">{item.goodsName}</p>
                        <p className="oldPrice">￥{item.marketPrice}</p>
                        <p className="nowPrice">￥{item.price}</p>
                        <div className="addBn">
                            <img src={require("@static/img/add_cart.png")} alt=""/>
                        </div>
                        </div>
                    </div>
                    ))
                }
                   
                </div>
                </div>
            </OrderWrap>
        )
    }
    async componentDidMount(){
        let data = await order_api()
        this.setState({
            list:data.data.items
        })
    }   
}
