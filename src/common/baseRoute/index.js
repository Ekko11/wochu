import React, { Component } from 'react'
import LayOut from "../../layout"
import {Route} from "react-router-dom"
import auth from "../auth"
 class BaseRoute extends Component {
    render() {
        let {path,component,...rest} = this.props
        return (
            <LayOut {...rest}>
                <Route path={path} component={component}/>
            </LayOut>
        )
    }
}
 
export default auth(BaseRoute)