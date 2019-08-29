import React, { Component ,Fragment} from 'react'
import {good_time} from "@api/order"
import { connect } from "react-redux"
import Prompt from "@common/prompt"
import { withRouter } from "react-router-dom"
import {checked_change,allChecked_change,goodsNum_Add,goodsNum_Reduce,
    goodsDel_Tog,goodsDel_Bn,clean_goods} from "@store/orderAction"
class OrderList extends Component{
   state={
       date:sessionStorage.getItem("recomTime")||"",
       isDel:false,
       bool:false,
       allDelBool:false
   }
    render(){
        let { shopGoods,allChecked} = this.props
        let { date,isDel ,bool,allDelBool} = this.state
        let totlePrice = 0
        let goodsNum = 0
        return(
            <Fragment>
                <div className="header">
                    <div onClick={this.props.backBn.bind(this)}>返回</div>
                    <div>请填写地址</div>
                    {
                        isDel? <div  onClick={this.props.completeBn.bind(this)}>完成</div>: <div onClick={this.props.delBn.bind(this)}>编辑</div>
                    }
                   
                </div>
                <div className="time_nav">
                <img src={require("@static/img/time-icon.png")} alt="" className="time_img"/>
                <p>
                    配送时间:<span className="dateSpan"> {date}</span>
                </p>
                <span className="changeSpan">去修改 &gt;</span>
                </div>
                <ul className="list_ul">
                {
                    shopGoods.map((item,index)=>{
                        if(item.checked){
                            totlePrice +=item.price*item.num
                            goodsNum++
                            totlePrice = Number(totlePrice.toFixed(2)); 
                        }
                   return( <li key={index}>
                        <div>
                            <img className="check_img" onClick={this.props.checkedChange.bind(this,index)}
                             src={item.checked?"http://wmall.wochu.cn/h5/mall//img/selected.png":"http://wmall.wochu.cn/h5/mall//img/unselect.png"} alt=""/>
                        </div>
                        <img className="goods_img" src={item.picUrl} alt=""/>               
                        <div className="right">
                            <p className="goodsDec">{item.goodsName}</p>
                            <div className="bottom">
                                <p className="p2">
                                <span className="nowPrice">￥{item.price}</span>
                                <span  className="oldPrice">￥{item.marketPrice}</span>
                                </p>
                                <div className="stepNum">
                                    <div className="reduce" onClick={this.props.goodsNumReduce.bind(this,index)}>-</div>
                                    <p>{item.num}</p>
                                    <div className="add" onClick={this.props.goodsNumAdd.bind(this,index)}>+</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    )  })
            }                    
                </ul>

                <div  className="totalPrice">
                    <img className="check_img" onClick={this.props.allCheckedHandle.bind(this)}
                     src={allChecked?"http://wmall.wochu.cn/h5/mall//img/selected.png":"http://wmall.wochu.cn/h5/mall//img/unselect.png"}  alt=""/>
                    {
                        isDel? <p className="totalP">全选</p>:<p className="totalP">合计：<span className="buyPrice">￥{totlePrice}</span>
                        <i className="decSpan">(不含运费)</i>
                        </p>
                    }  
                        {
                            isDel? <div className="buyBn delBn"  onClick={this.props.delGoodsBn.bind(this)}>删除 <p className="cleanGoods" onClick={this.props.cleanGoodsHandle.bind(this)}>清空购物车</p></div>:<div className="buyBn">结算<span className="numSpan">({goodsNum})</span></div>
                        }

                </div>
                <Prompt  flag={bool} info="(⊙﹏⊙)" tip="真的要删除这些商品吗？" sure={this.props.delSure.bind(this)} 
                cancle={this.props.delCancle.bind(this)}></Prompt>
                <Prompt  flag={allDelBool} info="(T^T)" tip="主人你真的不要我了吗" sure={this.props.allDelSure.bind(this)} 
                cancle={this.props.allDelCancle.bind(this)}></Prompt>
        
            </Fragment>
        )
     }
    async componentDidMount(){
        if(!sessionStorage.getItem("recomTime")){
            let data = await good_time()
            let date = new Date(data.data.shippingDate*1000)
            var day = date.getDate()
            var  month = date.getMonth()+1
            var str = month+"/"+day+data.data.shippingDateMsg+data.data.shippingTime
            sessionStorage.setItem("recomTime",str)
            this.setState({
                date:str
            })
        }
    }
}

const mapStateToProps=(state)=>({
    shopGoods:state.order.shopGoods,
    allChecked:state.order.allChecked,
})

const mapDispatchToProps=(dispatch)=>({
    //商品是否选中
    checkedChange(index){
        dispatch(checked_change(index))
    },
    //全选
    allCheckedHandle(){
        dispatch(allChecked_change)
    },
    //购物车商品加按钮
    goodsNumAdd(index){
        dispatch(goodsNum_Add(index))
    },
    //购物车商品减按钮
    goodsNumReduce(index){
        dispatch(goodsNum_Reduce(index))
    },
    //点击编辑按钮
    delBn(){     
        this.setState({
            isDel:true
        })
        dispatch(goodsDel_Tog(this.state.isDel))
    },
    //点击完成编辑按钮
    completeBn(){
        this.setState({
            isDel:false
        })
        dispatch(goodsDel_Tog(this.state.isDel))
    },
    //点击删除按钮
    delGoodsBn(){
        this.setState({
            bool:!this.state.bool
        })
       
    },
    //返回
    backBn(){
        this.props.history.push("/find")
    },
    //清空购物车按钮
    cleanGoodsHandle(e){
        e.stopPropagation()
        this.setState({
            allDelBool:!this.state.allDelBool
        })
      
    },
    //点击删除按钮的两个弹框事件
    delSure(){
        dispatch(goodsDel_Bn)
        dispatch(goodsDel_Tog(this.state.isDel))
        this.setState({
            bool:false,
            isDel:false,
        })
    },
    delCancle(){
        this.setState({
            bool:false,
            isDel:false
        })
        dispatch(goodsDel_Tog(this.state.isDel))
    },
    //点击清空购物车的两个弹框事件
    allDelSure(){
        dispatch(clean_goods)
        this.setState({
            allDelBool:false,
            isDel:false,
        })
    },
    allDelCancle(){
        this.setState({
            allDelBool:false,
            isDel:false,
        })
    },
})







export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderList))