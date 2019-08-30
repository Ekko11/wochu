import React, { Component } from 'react'
import {AddressNode} from "./style"; 
export default class Address extends Component {
    render() {
        return (
            <AddressNode>
                <div>
                    <div>
                        <div>〈</div>
                        <div>选择地址</div>
                        <div onClick={this.handleAddHome.bind(this)}>新增地址</div>
                    </div>
                    <div>
                        <div>上海市</div>
                        <div onClick={this.handleAddressList.bind(this)}>搜索支持的小区、写字楼</div>
                    </div>
                    <div>因各地区商品和配送服务不同，请您选择准确收货地址</div>
                    <div>
                        <div>天安门</div>
                        <div>当前定位</div>
                    </div>
                    <div>我的地址</div>
                </div>
            </AddressNode>
        )
    }
    handleAddressList(){
        this.props.history.push("/addresslist");
    }
    handleAddHome(){
        this.props.history.push("/addhome");
    }
}
