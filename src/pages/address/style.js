import styled from "styled-components";

export const AddressNode=styled.div`
    width:100%;
    height:100%;
    >div>div:nth-child(1){
        display:flex;
        height:1.01rem;
        align-items:center;
        padding:.1rem;
        justify-content:space-between;
        background:#fff;
        border-bottom:2px solid rgb(214, 211, 211);;
        >div:nth-child(1){
            font-size:.4rem;
            color:#999;
        }
        >div:nth-child(2){
            font-size:.36rem;
        }
        >div:nth-child(3){
            font-size:.3rem;
        }
    }
    >div>div:nth-child(2){
        height:.75rem;
        display:flex;
        align-items:center;
        padding:.1rem;
        justify-content:space-around;
        background:#fff;
        >div:nth-child(1){
            font-size:.3rem;
            
            
        }
        >div:nth-child(2){
            width:5.8rem;
            height:.48rem;
            font-size:.3rem;
            background:rgb(228, 225, 225);
            color:#999;
            border-radius:.3rem;
            line-height:.48rem;
            padding-left:.3rem;
        }
    }
    >div>div:nth-child(3){
        height:.7rem;
        line-height:.7rem;
        font-size:.26rem;
        background:rgb(228, 225, 225);
        padding:0 .3rem;
    }
    >div>div:nth-child(4){
        height:.75rem;
        display:flex;
        align-items:center;  
        background:#fff; 
        >div:nth-child(1){
            font-size:.3rem;   
            padding:0 .3rem;
        }
        >div:nth-child(2){
            width:5.8rem;
            height:.48rem;
            font-size:.3rem;
            color:#999;
            line-height:.48rem;
            padding-left:.3rem;
        }
    }
    >div>div:nth-child(5){
        font-size:.3rem; 
        padding:.2rem 0 0 .3rem;
    }
`