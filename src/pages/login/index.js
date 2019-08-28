import React, { Component } from 'react'
import { LoginWrap } from './styled'
import { connect } from "react-redux"
import {nameAc_order,psdAc_order,register_order,login_order} from "@store/orderAction"
class Login extends Component {
    state = {
        flagP: true,
        bnColor:false,
    }
    render() {
        let { flagP,bnColor} = this.state
       let {name, password} = this.props
        return (
            <LoginWrap>
                <div>
                    <img src={require("@static/img/loginTop.gif")} className="topBg" alt="" />
                    <div className="closeDiv" onClick={this.props.closeBn.bind(this)}>
                        <img src={require("@static/img/close.png")} alt="" />
                    </div>
                </div>
                <div className="logType">
                    <p className={flagP ? "activeP" : ""} onClick={this.props.typeBn.bind(this)}>
                        密码登录
                    </p>
                    <p className={!flagP ? "activeP" : ""} onClick={this.props.typeBn1.bind(this)}>
                        免费注册
                    </p>
                    {
                        flagP ? <div className="form">
                            <input type="text" placeholder="输入手机号" value={name} onChange={this.props.inputChange.bind(this,1)}/>
                            <input type="password" placeholder="输入密码" value={password} onChange={this.props.inputChange.bind(this,2)} />
                            <div className={bnColor?"loginBn activeBn":"loginBn"} onClick={this.props.loginBn.bind(this)}>登录</div>
                            <div><div className="p1">查看 <a href="www.baidu.com">《我厨服务协议及隐私政策》</a></div>
                                <div className="p2" onClick={this.props.typeBn1.bind(this)}>免费注册</div>
                            </div></div> : <div className="form">
                                <input type="text" placeholder="输入手机号" value={name} onChange={this.props.inputChange.bind(this,1)}/>
                                <input type="password" placeholder="输入密码" value={password} onChange={this.props.inputChange.bind(this,2)} />
                                <div className={bnColor?"loginBn activeBn":"loginBn"} onClick={this.props.resisterBn.bind(this)}>注册</div>
                                <div><div className="p1">我已阅读并同意 <a href="www.baidu.com">《我厨服务协议及隐私政策》</a></div>
                                </div>
                            </div>
                    }
                </div>
            </LoginWrap>
        )
    }
   
}
const mapStateToProps=(state)=>({
    name:state.order.name,
    password:state.order.password
})
const mapDispatchToProps=(dispatch)=>({
    typeBn() {
        this.setState({
            flagP: true
        })
    },
    typeBn1() {
        this.setState({
            flagP: false
        })
    },
    closeBn() {
        this.props.history.goBack()
    },
    inputChange(status,e){
        let {name,password} = this.props
        if(status==1){
            dispatch(nameAc_order(e.target.value))
        }else{
            dispatch(psdAc_order(e.target.value))
        }
        if((name&password)&& e.target.value){
           this.setState({
            bnColor:true
           })
        }else{
            this.setState({
                bnColor:false
            })
        }
    },
    loginBn(){
        if(!this.state.bnColor) return
        dispatch(login_order)
    },
    resisterBn(){
        if(!this.state.bnColor) return
        dispatch(register_order)
        this.setState({
            bnColor:false
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
