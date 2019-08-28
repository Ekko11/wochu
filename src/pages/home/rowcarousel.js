import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class RowCarousel extends Component {
    render(){
        return(
          <WingBlank style={{ width: 500, height:"100%"}}>
            <Carousel className="my-carousel"
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay
              infinite
              style={{ width: 500, height:"100%"}}
            >
              <div className="v-item" style={{height:"100%",width:500}}>【5折】清美内酯豆腐1.9元/400g</div>
              <div className="v-item" style={{height:"100%",width:500}}>电子发票需前往微商城自助申请</div>
              <div className="v-item" style={{height:"100%",width:500}}>【59减20券】邀请好友双方都可得！</div>
            </Carousel>
          </WingBlank>
          );
    }   
}
