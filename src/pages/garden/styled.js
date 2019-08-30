import styled from "styled-components";

export const Gardens=styled.div`
    height:100%;
    overflow:auto;
    background: rgb(253, 238, 238);
    .gardenAll{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        
        >div{
            width:2.26rem;
            margin:.2rem .05rem 0 .05rem;
            background:#fff;
            >img{
                width:2.26rem;
                height:2.26rem;
            }
            div:nth-child(2){
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size:.28rem;
                color:#333333;
            }
            div:nth-child(3){
                text-decoration:line-through;
                color:#999;
            }
            div:nth-child(4){
                display:flex;
                justify-content:space-between;
                align-items:center;
                color:#F96D16;
                font-size:.28rem;
            }  
        }
    }
    .gardenFour{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        >div{
            width:3.4rem;
            margin:.2rem .05rem 0 .05rem;
            background:#fff;
            >img{
                width:3.4rem;
                height:3.4rem;
            }
            div:nth-child(2){
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size:.28rem;
                color:#333333;
            }
            div:nth-child(3){
                text-decoration:line-through;
                color:#999;
            }
            div:nth-child(4){
                display:flex;
                justify-content:space-between;
                align-items:center;  
                color:#F96D16;
                font-size:.28rem;
            }
             
        }    
    }
    .scrollTop{
        position:absolute;
        top:90%;
        right:0;
    }
    .ac_cart{
        position:absolute;
        top:10%;
        right:0;
    }
`