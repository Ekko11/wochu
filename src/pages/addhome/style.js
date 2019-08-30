import styled from "styled-components";

export const Add_Name=styled.div`
    width:100%;
    height:100%;
    >div>div:nth-child(1){
        display:flex;
        height:1.01rem;
        align-items:center;
        padding:.1rem;
        margin-bottom:.2rem;
        background:#fff;
        border-bottom:2px solid rgb(214, 211, 211);
        >div:nth-child(1){
            font-size:.4rem;
            margin-right:2.2rem;
            color:#999;
        }
        >div:nth-child(2){
            font-size:.36rem;
        }
    }
    .nameTel{
        height:.98rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        padding:0 .2rem;
        align-items:center;
        background:#fff;
        border-bottom: 1px solid #e5e5e5;
        >div:nth-child(1){
            width:1.7rem;
            font-size:.28rem;
            color:#999999;
        }
        >label:nth-child(2)>input{
            height:.98rem;
            width:5.4rem;
            font-size: .32rem;
            border:0;
            outline:none;
            color: #001e00;
        }
    }
    .Notes{
        height:.84rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        padding:0 .2rem;
        align-items:center;
        background:#f4f4f4;
        color: #1f6117;
        font-size: .26rem;
    }
    .nameTels{
        width:1.7rem;
    }
    .nameTelTwo{
        width:5.4rem;
        display:flex;
        >div{
            height:.4rem;
            width:.7rem;
            font-size:.26rem;
            border-radius:.1rem;
            background:#CCCCCC;
            text-align:center;
            color:#FFFFFF;
            margin-right:.4rem;
        }
        >.green{
        background: #6eb042;
    }
    }
    .Preservation{
        width:6.4rem;
        height:1rem;
        background:#C3DCB3;
        margin-top:.5rem;
        margin-left:.5rem;
        border-radius:.2rem;
        line-height:1rem;
        text-align:center;
        color: #fff;
        font-size: .36rem;
    }

`