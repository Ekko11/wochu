import React, { Component } from 'react'
import { connect } from "react-redux"
import { DetailsWrapper } from "./styled"
import { details_api, get_img, details_relative } from "@api/sort"
import { Carousel } from 'antd';
import { mapStateToProps, mapDispatchToProps } from "./connect"

class Details extends Component {
  state = {
    detailsList: {},
    imgList: [],
    relativeList: []

  }
  render() {
    let { detailsList, imgList, relativeList } = this.state
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
                      <img src={item.picUrl} />
                    </div>
                    <p>{item.goodsName}</p>
                    <del>￥{item.marketPrice}</del>
                    <div className="guessp"><span>￥{item.price}</span><i>2222</i></div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="addcategory">加入购物车</div>
        </div>
      </DetailsWrapper>
    )
  }
  async componentDidMount() {
    let data = await details_api(this.props.match.params.id);
    this.setState({
      detailsList: data.data
    })
    let data1 = await get_img(this.props.match.params.id)
    this.setState({
      imgList: data1.data
    })
    let data2 = await details_relative(this.props.match.params.id)
    this.setState({
      relativeList: data2.data.userloving
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)