import React, { Component } from 'react'
import { Add_Name } from "./style";
export default class AddHomePage extends Component {
    constructor() {
        super();
        this.state = {
            obj:{one:"",two:"",three:"",four:"",five:""},
            messageVal:["公司","家","父母","其他",],
            defaultVal:"家",
            inputValObj:{},
        }    
    }
    render() {
        let {obj,messageVal,defaultVal,inputValObj } = this.state;
        sessionStorage.setItem("inputValObj",JSON.stringify(this.state.inputValObj));
        return (
            <Add_Name>
                <div>
                    <div>
                        <div>〈</div>
                        <div>新建收货地址</div>
                    </div>
                    <div className="nameTel">
                        <div>收货人：</div>
                        <label>
                            <input type="text" placeholder="输入收货人的姓名" value={obj.one} onChange={this.handleNameVal.bind(this,"one")} />
                        </label>
                    </div>
                    <div className="nameTel">
                        <div>联系电话：</div>
                        <label>
                            <input type="text" placeholder="手机号码" value={obj.two} onChange={this.handleNameVal.bind(this,"two")} />
                        </label>
                    </div>
                    <div className="Notes">目前仅配送上海(奉贤/金山/崇明及部分郊环线地区除外)</div>
                    <div className="nameTel">
                        <div>收货省市：</div>
                        <label>
                            <input type="text" placeholder="选择您所在的城市" value={obj.three} onChange={this.handleNameVal.bind(this,"three")} />
                        </label>
                    </div><div className="nameTel">
                        <div>收货地址：</div>
                        <label>
                            <input type="text" placeholder="小区/写字楼/公寓" value={obj.four} onChange={this.handleNameVal.bind(this,"four")} />
                        </label>
                    </div><div className="nameTel">
                        <div>详细地址：</div>
                        <label>
                            <input type="text" placeholder="楼号/楼层/房号/门牌号" value={obj.five} onChange={this.handleNameVal.bind(this,"five")} />
                        </label>
                    </div><div className="nameTel">
                        <div className="nameTels">选择类别：</div>
                        <div className="nameTelTwo">
                        {
                            messageVal.map((item,index)=>(
                                <div className={messageVal[index]===defaultVal?"green":""} key={index} onClick={this.handleMesage.bind(this,messageVal[index])}>{item}</div>
                                ))
                        }
                        </div>
                    </div>
                    <div className="Preservation" onClick={this.handlePreservation.bind(this)}>保存</div>
                </div>
            </Add_Name>
        )
    }
    handleNameVal(val,e) { 
        let obj1=Object.assign({},this.state.obj);
        obj1[val]=e.target.value;
        this.setState({
            obj:obj1,
        })
    }
    handleMesage(val){
        this.setState({
            defaultVal:val,
        })
    }
    handlePreservation(){
       let objPreservation={};
       objPreservation.six=this.state.defaultVal;
       let addObj=Object.assign(objPreservation,this.state.obj);
       this.setState({
           inputValObj:addObj
       })
    }
}
