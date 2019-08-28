import styled from "styled-components"

export const LoginWrap = styled.div`
position: relative;
.closeDiv{
    position:absolute;
    right:0.2rem;
    top:0.2rem;
    width:.54rem;
    height:.54rem;
    img{
        width:100%;
        height:100%;
    }
}
.topBg{
    width:7.7rem;
    height:.7.84rem;
}
.logType{
    margin:auto;
    overflow:hidden;
    height:6rem;
    background:#fff;
    p{
        text-align: center;
       
        color: #6eb242;
        float:left;
        font-size: .32rem;
        line-height: .96rem;
        width: 1.8rem;
        margin-left: 1.37rem;
    }
    .activeP{
            border-bottom: .04rem solid #6eb242;
        }
    p:nth-of-type(2){
        margin-left:1rem
    }
}
.form{
    width:6.4rem;
    margin:auto;

    input{
        width: 100%;
        height: 1.1rem;
        font-size: .36rem;
        color: #132d01;
        font-weight: 700;
        outline: 0;
        border: none;
        border-bottom: 0.01rem solid #e5e5e5;
    }
    input::-webkit-input-placeholder {
        color: #ccc;
        font-weight: 400;
        font-size: .27rem;
    }
        .loginBn{
        width: 6.4rem;
        height: 1rem;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        border-radius: .2rem;
        background: #c3dcb3;
        margin-left: .01rem;
        outline: 0;
    }
    .p1{
        float: left;
        margin-top: .4rem;
        text-align: center;
        color: #ccc;
        font-size: .3rem;
        a{
            color: rgb(195, 221, 179);
            text-decoration: underline;
        }
    }
    .p2{
        float: right;
    margin-top: .4rem;
    text-align: center;
    color: #6cb13f;
    font-size: .32rem;
    }
    .activeBn{
        background:green
    }
}


`