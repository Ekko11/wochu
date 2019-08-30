import React, { Component } from 'react'
import { AddressListStyle } from "./style";
import {address_list} from "@api/home";
export default class AddressList extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: "",
        }
    }
    render() {
        let { inputVal } = this.state;
        return (
            <AddressListStyle>
                <div>
                    <div>
                        <div>〈</div>
                        <div>选择地址</div>
                    </div>
                    <div>
                        <div>上海市</div>
                        <label>
                            <input type="text" placeholder="搜索支持的小区、写字楼" value={inputVal} onChange={this.handleSeacrh.bind(this)}/>
                        </label>
                    </div>
                </div>
            </AddressListStyle>
        )
    }
    async componentDidMount(){
        let inputValCookie=JSON.parse(sessionStorage.getItem("inputValCookie"));
        let data=await address_list(inputValCookie);
    }
    handleSeacrh(e){
        let value=e.target.value;
        sessionStorage.setItem("inputValCookie",JSON.stringify(value));
        this.setState({
            inputVal:value,
        })     
    }
}
