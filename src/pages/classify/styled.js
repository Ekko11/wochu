import styled from "styled-components"
export const ClassifyWrapper= styled.div`
width:100%;
height:auto;
margin-top:3.15rem;
.li-on{
width:100%;
height:2.92rem;
padding:.4rem .24rem .32rem;
border-bottom:1px solid #e5e5e5;
display:flex;
flex-direction:row;
justify-content:space-around;
background:#fff
}
.ul{
    height:10rem;
    overflow:auto;
}
.fl{
    width:2.2rem;
    height:2.2rem;
   
}
span{
    padding-right:.178rem;
}
.fl img{
    width:100%;
    height:100%
}
.fr{
    width:70%;
    margin-left:.3rem
}
.goods-name{
    font-size:.34rem;
    font-variant:600;
    margin-bottom:.2rem
}
.goods-intro{
    font-size:.26rem;
    margin-bottom:.4rem
}
.goods-price{
    font-size:.3rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
.goods-price p{
    color:#FF5918;

}
del{
    font-size:.23rem;
    color:#ccc
}
`