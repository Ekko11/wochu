import React, { Component ,Fragment} from 'react'
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
//  {this.props.children?<Route path={this.props.children.path} component={this.props.children.component}/>:""}
// <Route path={path} render={()=>{
//     return (
//         <Fragment>
//         <this.props.component/>
//         </Fragment>
//     )
// }     
// }/>