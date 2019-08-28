import styled from "styled-components";

export const Gardens=styled.div`
    height:100%;
    overflow:auto;
    background: rgb(253, 238, 238);
    .gardenSix{
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
            div:nth-child(4){
                display:flex;
                justify-content:space-between;
                align-items:center;
                
            }  
        }
    }
    
`