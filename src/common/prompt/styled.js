import styled from "styled-components"


export  default styled.div`
    position: fixed;
    background: #fff;
    width: 5.6rem;
    height: 3rem;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.2rem;
    z-index: 1000;
    padding:0.4rem 0;
    box-shadow: 0px 0px 0.5rem #888888;
    text-align:center;
    p{
        line-height: 0.6rem;
        font-size: 0.3rem;
    }
    &>div{
        display: flex;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.38rem;
        border-top: 0.03rem solid #eee;
        margin-top: 0.47rem;
        div{
            width:50%;
            height: 0.9rem;
        }
        div:nth-of-type(1){
            border-right: 0.05rem solid #eee;
           
        }
    }


`