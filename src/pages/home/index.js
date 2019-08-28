import React, { Component, Fragment } from 'react'
import { Home_top, Home_every_ul, All_Node } from "./styled";
import home_logo from "../../static/img/home_logo.png";
import home_icon from "../../static/img/home_icon.png";
import img_size from "../../static/img/img_size.png";
import add_cart from "../../static/img/add_cart.png";
import home_search from "../../static/img/home_search.png";
import Carousels from "./carousel";
import RowCarousel from "./rowcarousel";
import { home_api } from "@api/home";
import { home_async_lists } from "../../actions/home/actionCreators";
import store from "@store/index";
import "./style.css";
import { connect } from "react-redux";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            imgUrl: [],
        }
    }
    render() {
        let imgUrl = this.state.imgUrl;
        let { allData, imgBigUrl, imgSixUrl } = this.props;
        return (
            <Fragment>
                {
                    allData[0] ?
                        <div className="allDiv">
                            <Home_top>
                                <img src={home_logo} alt="" />
                                <div>
                                    <span>请填写地址</span>
                                    <img src={home_icon} alt="" />
                                </div>
                                <img src={home_search} alt="" />
                            </Home_top>
                            <Carousels />
                            <Home_every_ul>
                                {
                                    imgUrl.map((item, index) => (
                                        <li key={index}>
                                            <img src={item} alt="" />
                                        </li>
                                    ))
                                }
                            </Home_every_ul>
                            <All_Node>
                                <div className="wochu-broadcast">
                                    <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" alt="" />
                                    <RowCarousel />
                                    <span>∨</span>
                                </div>
                                <img src="https://img.wochu.cn/upload/8dcf6941-c9f4-4a7b-8c81-6b958ce47f12.gif" alt="" />
                                <img className="img_size" src={img_size} alt="" />
                                <div className="oneBigCol">
                                    <div>
                                        <img src={allData[2].items[0].imgUrl} alt="" />
                                        <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e6f53a96-e781-4322-a825-c1f722ca2742.png" alt="" />
                                    </div>
                                    <div>
                                        <div>{allData[2].items[0].goodsName}</div>
                                        <div>{allData[2].items[0].description}</div>
                                        <div>
                                            <span>￥{allData[2].items[0].marketPrice}</span>
                                            <img src={add_cart} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="oneColAll">
                                    <div className="oneCol">
                                        {
                                            allData[3].items.map((item, index) => (
                                                <div key={index}>
                                                    <img src={item.imgUrl} alt="" />
                                                    <div>{item.goodsName}</div>
                                                    <div>{item.marketPrice == item.price ? "" : "￥" + item.marketPrice}</div>
                                                    <div>
                                                        <span>￥{item.price}</span>
                                                        <img src={add_cart} alt="" />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <img src={allData[4].items[0].imgUrl} alt="" />
                                </div>
                                <div className="sumDay">
                                    <img src={allData[5].items[0].imgUrl} alt="" />
                                </div>
                                <div className="group-list3">
                                    <img src={allData[6].items[0].imgUrl} alt="" />
                                    <div>
                                        <img src={allData[6].items[1].imgUrl} alt="" />
                                        <img src={allData[6].items[2].imgUrl} alt="" />
                                    </div>
                                </div>
                                <div className="oneBigCol">
                                    <div>
                                        <img src={allData[7].items[0].imgUrl} alt="" />
                                    </div>
                                    <div>
                                        <div>{allData[7].items[0].goodsName}</div>
                                        <div>{allData[7].items[0].description}</div>
                                        <div>
                                            <span>￥{allData[7].items[0].marketPrice}</span>
                                            <img src={add_cart} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="oneColAll">
                                    <div className="oneCol">
                                        {
                                            allData[8].items.map((item, index) => (
                                                <div key={index}>
                                                    <img src={item.imgUrl} alt="" />
                                                    <div>{item.goodsName}</div>
                                                    <div>{item.marketPrice == item.price ? "" : "￥" + item.marketPrice}</div>
                                                    <div>
                                                        <span>￥{item.price}</span>
                                                        <img src={add_cart} alt="" />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="group-list-all">
                                    {
                                        imgSixUrl.map((item, index) => (
                                            <div key={index}>
                                                <div className="img-link">
                                                    <img src={imgBigUrl[index][0].imgUrl} alt="" />
                                                </div>
                                                <div className="goods-list">
                                                    {
                                                        item.map((child, ids) => (

                                                            <div key={ids}>
                                                                <img src={child.imgUrl} alt="" />
                                                                <div>{child.goodsName}</div>
                                                                <div>{child.marketPrice == child.price ? "" : "￥" + child.marketPrice}</div>
                                                                <div>
                                                                    <span>￥{child.price}</span>
                                                                    <img src={add_cart} alt="" />
                                                                </div>
                                                                <div id={child.stock ? "none" : "show"}>已抢完</div>
                                                            </div>


                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </All_Node>
                        </div>
                        : ""
                }
            </Fragment>
        )
    }
    async componentDidMount() {
        let data = await home_api();
        let img = [];
        data.data.recommendedContent[0].items.map((itemOne, indexOne) => {
            img.push(itemOne.imgUrl);
        })
        data.data.recommendedContent[1].items.map((itemTwo, indexTwo) => {
            img.push(itemTwo.imgUrl);
        })
        this.setState({
            imgUrl: img,
        })
        store.dispatch(home_async_lists());
    }
}

const mapStateToProps = (state) => ({
    allData: state.home.allData,
    imgBigUrl: state.home.imgBigUrl,
    imgSixUrl: state.home.imgSixUrl
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);




