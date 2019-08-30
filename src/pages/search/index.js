import React, { Component } from 'react'
import {SearchWrapper} from "./styled"
import {hot_search} from "@api/sort"
import {connect} from "react-redux"
import search from "@static/img/home_search.png"
import SearchResult from "@components/searchResult"
import {mapStateToProps,mapDispatchToProps} from "./connect"
 class Search extends Component {
   constructor(){
       super()
       this.state={
        hotList:[],
        flag:true,
        inputVal:"",
        searchList:JSON.parse(sessionStorage.getItem("searchList")) || []
        }
   }
    render() {
        let {hotList,flag,inputVal,searchList} = this.state
      
        return (
            <SearchWrapper>
               <div className="header">
                    <div className="back" onClick={this.handleBack.bind(this)}>
                    &lt;
                    </div>
                    <div className="ss">
                    <span><img src={search}/></span>
                    <input type="text" value={inputVal} onChange={this.searchHandle.bind(this)} />
                    </div>
                  <div className="btn" onClick={this.props.addHandle.bind(this)}>搜索</div>
               </div>
             {
                flag?  <div className="search">
                <div className="hot">
                     <p>热门搜索</p>
                         <ul>
                         {
                             hotList.map((item,index)=>(
                                 <li key={index}>{item.name}</li> 
                             ))
                         }
                         </ul>
                </div>
                <div className="old">
                         <p>搜索历史</p>
                         <ol>
                            {
                                searchList.map((item,index)=>(
                                    <li key={index}>{item}</li>
                                ))
                                }
                                <div className="clear" onClick={this.removeHandle.bind(this)}>清空历史记录</div>
                         </ol>
                        
                </div>
                </div>:<SearchResult/>
             }
            </SearchWrapper>
        )
    }
    async componentDidMount(){
        let data=await hot_search();
        this.setState({
            hotList:data.data
        })
    }
    handleBack(){
       this.props.history.goBack()
    }
    searchHandle(e){
        let value=e.target.value;
        this.setState({
            inputVal:value
        })
    }
    removeHandle(){
        sessionStorage.removeItem("searchList");
        this.setState({
            searchList:[]
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)