import { Carousel, WingBlank } from 'antd-mobile';
import React,{Component} from "react";
import {home_api} from "@api/home";
export default class Carousels extends Component {
  state = {
    data: ['1', '2', '3'],
  }
  async componentDidMount() {
      let datas=await home_api();
      
      let arr=[];
      datas.data.carousel.map((item,index)=>{
        arr.push(item.picUrl); 
      });
      this.setState({
        data:arr,
      });  
  }
  render() {
    return (
      <WingBlank style={{marginTop:90,height:332}}>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height:332,margin:0}}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}


