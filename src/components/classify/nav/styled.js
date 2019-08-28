import styled from "styled-components"
export const NavWrapper=styled.div`
    width:100%;
    font-size:.28rem;
    position: fixed;
    height: 1rem;
    top: 1rem;
    background: #fff;
    border-bottom: .01rem solid #e6e6e6;
    z-index: 3;
    ul{
      
        height:100%;
        white-space:nowrap;
        box-sizing:content-box;
        display:flex;
        overflow-x:auto
    }
    li{
        flex-shrink:0;
        display:inline-block;
        height:1rem;
        line-height:1rem;
        text-align:center;
      
        position:relative;
    }
    p{
        padding:0 .3rem;
        display:inline-block;
        height:1rem;
        line-height:1rem;

    }
    .active1{
        color:#6EB042
    }
    .active{
        border-bottom:3px solid #6EB042;
        color:#6EB042
    }
    .container{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        height:1rem;
        width:100%;
        background:#fff;
        align-items:center
    }
    #zuo{
        width:36%;
        border-right:2px solid #ccc
    }
`