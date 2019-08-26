import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import { tabBarRoute } from "@router"
import {TabBarWrapper}  from "./styled"
import img1 from "@static/img/20.png"
import img2 from "@static/img/23.png"
import img3 from "@static/img/25.png"
import img4 from "@static/img/24.png"
import img5 from "@static/img/21.png"
import img6 from "@static/img/22.png"
import img7 from "@static/img/17.png"
import img8 from "@static/img/26.png"
export default class TabBar extends Component {
    constructor(props){
        super(props)
        this.state={
            imgList:[img1,img2,img3,img4],
            togList:[img5,img6,img7,img8],
            togIndex:props.index
        }
    }
    render() {
        let {imgList,togIndex,togList} = this.state
        return (
            <TabBarWrapper >
                <ul>
                    {
                    tabBarRoute.map((item,index)=>(
                        <li key={index}>
                            <NavLink to={item.path}>
                                <img src={togIndex===index?togList[index]:imgList[index]}  alt=""/>
                                <p>{item.name}</p>
                            </NavLink>
                        </li>
                    ))  
                    }
                </ul>
            </TabBarWrapper >
        )
    }
}
