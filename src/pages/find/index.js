import React, { Component } from 'react'
import Header from "@components/sort/header"
import Left from "@components/sort/left"
import Right from "@components/sort/right"
export default class Find extends Component {
    render() {
        console.log(this)
        return (
            <div>
               <Header/>
               <Left/>
               <Right/>
            </div>
        )
    }
}
