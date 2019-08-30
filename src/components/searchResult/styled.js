import styled from "styled-components"
export const SearchWrapper = styled.div`
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
    height:20rem;
    overflow:auto;
}
.fl{
    width:2.2rem;
    height:2.2rem;
   
}
.fl img{
    width:2.2rem;
    height:2.2rem;
   
}
.fr{
    width:5rem;
    height:4rem;
    margin-left:.3rem;
    display:flex;
    flex-direction:column;
   
}
.goods-name{
    font-size:.34rem;
    font-variant:600;
    margin-bottom:.13rem;
    text-align:left
}
.goods-intro{
    font-size:.26rem;
    margin-bottom:.22rem;
    width:90%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align:left
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
.goods-price span{
    background:#fff;
    margin-right:.6rem
}
del{
    padding-left:.2rem;
    font-size:.23rem;
    color:#ccc
}

`