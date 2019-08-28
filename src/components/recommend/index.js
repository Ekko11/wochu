import React, { Component, Fragment } from 'react'
import { order_api } from "@api/order"
import {connect} from "react-redux"
import {addShop_order} from "@store/orderAction"
import { withRouter}  from "react-router-dom"
 class Recommed extends Component {
    state = {
        list: JSON.parse(sessionStorage.getItem("recommend")) || []
    }
    render() {
        let { list } = this.state
        return (
            <Fragment>
                <img src={require("@static/img/recommend.png")} className="recommend" alt="" />

                <div className="recom_list">
                    {
                        list.map((item, index) => (
                            <div className="goods" key={index}>
                                <img src={item.icon} alt="" />
                                <div className="wrap">
                                    <p className="goodDec">{item.goodsName}</p>
                                    <p className="oldPrice">￥{item.marketPrice}</p>
                                    <p className="nowPrice">￥{item.price}</p>
                                    <div className="addBn">
                                        <img src={require("@static/img/add_cart.png")} alt="" onClick={this.props.addToShop.bind(this,item)} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </Fragment>

        )
    }
     async componentDidMount() {
         if(!sessionStorage.getItem("recommend")){
             let data = await order_api()
             let list1 = data.data.items.slice(0, 7)
             sessionStorage.setItem("recommend",JSON.stringify(list1))
             this.setState({
                 list: list1
             })
         }
    }
    
}
const mapStateToProps=(state)=>({
    shopGoods:state.order.shopGoods,
    isLogin:state.order.isLogin
})

const mapDispatchToProps=(dispatch)=>({
    addToShop(item){
        // if(this.props.isLogin){
        //     dispatch(addShop_order(item))
        // }else{
        //     this.props.history.push("/login")
        // }
            dispatch(addShop_order(item))

    }
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Recommed))