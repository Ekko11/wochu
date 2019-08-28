import React, { Component,Fragment } from 'react'
import { OrderWrap } from "./styled"
import { connect } from "react-redux"
import Recommed from "@components/recommend"
import { withRouter} from "react-router-dom"
import OrderList from "@components/orderList"
class Login extends Component{
  render(){
      return(
          <div className="loginBn">
          <div className="empty_goods">
              <img src={require("@static/img/ic_no_goods.png")}  alt="" />
              <p className="p1">您的购物车为空</p>
              <p className="p2">可以看看哪些想买的</p>
              <div className="login_Bn" onClick={this.goShop.bind(this)}>随便逛逛</div>
          </div>
      </div>
      )
  }
  goShop() {
      
    this.props.history.push("/home")
    }
}
let Log =  withRouter(Login)
class NoLogin extends Component{
    render(){
        return (
            <div className="nologinBn">
            <div className="login_Bn" onClick={this.loginBn.bind(this)}>登 录</div>
        </div>
        )
    }
    loginBn() {
        this.props.history.push("/login")
    }
   
}
let NoLog = withRouter(NoLogin)




 class Order extends Component {
    render() {
        let { isLogin ,shopGoods} = this.props
        return (
            <OrderWrap>
                <div className="wrapDiv">
                {
                 !isLogin?<NoLog/>:shopGoods[0]?<OrderList list={shopGoods}/>:<Log/>
            }  
                    <Recommed/>
                </div>
            </OrderWrap>
        )
    }
   
   
}

const mapStateToProps=(state)=>({
    isLogin:state.order.isLogin,
    shopGoods:state.order.shopGoods,
})
const mapDispatchToProps=(dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Order)


// 
//    
