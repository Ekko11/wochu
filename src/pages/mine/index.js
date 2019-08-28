import React, { Component } from 'react'
import { MineWrap } from "./styled"
import {connect } from "react-redux"
 class Mine extends Component {
    state={
        flag:false
    }
    render() {
        let { flag } = this.state
        let {user,isLogin} = this.props
        console.log(isLogin,111)
        return (
            <MineWrap>
                <div className="top">
                    <img src={require("@static/img/0.png")} alt="" />
                </div>
                <div className="icon">
                    <img src={require("@static/img/nologin.png")} alt="" />
                    <p>{user}</p>
                </div>
                <div className="price">
                    <div className="price_top">
                        <div className="price_left">
                            <p className="p1">0</p>
                            <p className="p2">账户余额</p>
                        </div>
                        <div>
                            <p className="p1">0</p>
                            <p className="p2">优惠券</p>
                        </div>
                    </div>
                    <div className="bottom_price">
                        <div>
                            充值立刻送现金券哦~
                            </div>
                        <div>
                            马上充值>
                            </div>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <img src={require("@static/img/5.png")} alt="" />
                            <p>代付款</p>
                        </li><li>
                            <img src={require("@static/img/6.png")} alt="" />
                            <p>代收货</p>
                        </li><li>
                            <img src={require("@static/img/7.png")} alt="" />
                            <p>代评价</p>
                        </li><li>
                            <img src={require("@static/img/8.png")} alt="" />
                            <p>退货/售后</p>
                        </li><li>
                            <img src={require("@static/img/9.png")} alt="" />
                            <p>我的订单</p>
                        </li>
                    </ul>
                </div>
                <div className="mine_self">
                    <ul>
                    <li>
                            <img src={require("@static/img/10.png")} alt=""/>
                            <p>我的团购</p>
                        </li>
                        <li>
                            <img src={require("@static/img/11.png")} alt=""/>
                            <p>收货地址</p>
                        </li>
                        <li>
                            <img src={require("@static/img/12.png")} alt=""/>
                            <p>我的收藏</p>
                        </li>
                        <li>
                            <img src={require("@static/img/13.png")} alt=""/>
                            <p>关于我厨</p>
                        </li>
                    
                    </ul>
                </div>
                <div className="mine_self">
                    <ul>
                    <li>
                            <img src={require("@static/img/14.png")} alt=""/>
                            <p>帮助中心</p>
                        </li>
                        <li>
                            <img src={require("@static/img/15.png")} alt=""/>
                            <p>意见反馈</p>
                        </li>
                        <li>
                            <img src={require("@static/img/16.png")} alt=""/>
                            <p>设置中心</p>
                        </li>
                        <li>
                            <img src={require("@static/img/18.png")} alt=""/>
                            <p>客服电话</p>
                        </li>
                    
                    </ul>
                </div>
                <div className="bottom_gif">
                    <img src={require("@static/img/19.gif")} alt=""/>
                </div>
                <div className={isLogin?"zhezhao zhezhao1":"zhezhao"} onClick={this.props.logHandle.bind(this)}>
                    <div className={flag?"tankuang tan1":"tankuang"}>
                        <p> 亲，您还未登录</p>
                        <p>请先登录</p>
                    
                    </div>
                </div>


            </MineWrap>
        )
    }
}


const mapStateToProps=(state)=>({
    user :state.order.user,
    isLogin:state.order.isLogin
})
const mapDispatchToProps=(dispatch)=>({
    logHandle(){
        this.setState({
            flag:true
        })
        setTimeout(()=>{
            this.props.history.push("/login")
        },500)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Mine)