import React, { Component } from 'react'
import { connect } from "react-redux"
import { DetailsWrapper } from "./styled"
import { details_api, get_img, details_relative } from "@api/sort"
import { Carousel } from 'antd';
import add from "@static/img/add_cart.png"
import gwc from "@static/img/ac_cart.png"
import fh from "@static/img/refer.png"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import {withRouter} from "react-router-dom"
class Details extends Component {
  state = {
    detailsList: {},
    imgList: [],
    relativeList: []

  }
  render() {
    let { detailsList, imgList, relativeList } = this.state
    console.log(this.state)
    // console.log(detailsList,imgList)
    return (
      <DetailsWrapper>
        <div className="container" >
          <div className="banner">
          <Carousel autoplay dots={false}>

            {imgList.map((item, index) => (
              <div key={index}> <h3  ><img src={item.picUrl}></img></h3> </div>
            ))}

          </Carousel>
          </div>
          <div className="middle">
            <p>三时段送达</p>
            <p>48h自主退换货</p>
            <p>全球采购</p>
          </div>
          <div className="info">
            <ul>
              <li>产地：<span>{detailsList.origin1}</span></li>
              <li>保质期：<span>{detailsList.shelfLife}</span></li>
              <li>规格：<span>{detailsList.specification}</span></li>
              <li>储存条件：<span>{detailsList.storageCondition}</span></li>
            </ul>
          </div>
          <div className="infotwo">
            <div className="name">{detailsList.goodsName}</div>
            <div className="xinxi">{detailsList.description}</div>
            <div className="price">￥{detailsList.price}</div>
          </div>
          <div className="pj">商品评价</div>

          <div className="like">
            <span></span>
            <p>猜你喜欢</p>
            <span></span>
          </div>
          <div className="guess">
            <ul>
              {
                relativeList.map((item, index) => (
                  <li key={index}>
                    <div className="guessCon">
                      <img src={item.picUrl} onClick={this.toDetail.bind(this,item.goodsGuid)}/>
                    </div>
                    <p>{item.goodsName}</p>
                    <del>￥{item.marketPrice}</del>
                    <div className="guessp"><span>￥{item.price}</span><i><img src={add} onClick={this.props.relativeToCategroy.bind(this,item)}/></i></div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="addcategory" onClick={this.props.handleToGwc.bind(this,detailsList)}>加入购物车</div>
        </div>

        <div className="shop"><img src={gwc} onClick={this.toCategory.bind(this)}/></div>
        <div className="fh"><img src={fh} onClick={this.toClassify.bind(this)}/></div>
      </DetailsWrapper>
    )
  }

 async getDetail(id=this.props.match.params.id){
   console.log(this.props.match.params.id,11)
   let data = await details_api(id);
   console.log(this.props.match.params.id,22)
   let data1 = await get_img(id)  
   let data2 = await details_relative(id)
    this.setState({
      relativeList: data2.data.userloving,
      detailsList: data.data,
      imgList: data1.data
    })
  }

  componentDidMount() {
    this.getDetail()
  
  }
  toDetail(goodsGuid){
    this.props.history.push("/details/"+goodsGuid)
}
toClassify(){
        this.props.history.push("/classify/"+JSON.parse(sessionStorage.getItem("sort")).categoryId+"/"+JSON.parse(sessionStorage.getItem("sort")).displayIndex)
}
toCategory(){
  this.props.history.push("/order")
}


 
  componentWillReceiveProps(...rest){

    console.log(this.props.match.params.id,888)
    let {id} = rest[0].match.params
   console.log(rest,555)
    this.getDetail(id)
  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))