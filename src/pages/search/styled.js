import styled from "styled-components"
export const SearchWrapper=styled.div`
height:100%;
background:#fff;
.header{
    width:100%;
    height:.9rem;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center
}
.back{
    font-size:.47rem;
    padding-left:.13rem;
    margin-top:-.1rem;
    color:#ccc;
    margin-right:.1rem
}
.ss{
    display:flex;
    flex-direction:row;
}
span{
    display:block;
    width:.55rem;
    height:.55rem;
    background:#F1F2F6;
    border-radius:.23rem 0 0 .23rem;
    line-height:.55rem;
    text-align:center;
    padding:0 .1rem;
    font-size:.27rem;
    padding-right:.4rem

}
input{
    height:.55rem;
    width:4.8rem;
    background:#F1F2F6;
    border:none;
    border-radius:0 .23rem .23rem 0;
    outline:none;
    font-size:.268rem
}
.btn{
    padding-right:.3rem;
    font-size:.31rem
}
.hot{
    height:3rem;
    background:#fff;
    
}
 p{
    font-size:.3rem;
    font-weight:550;
    padding:.3rem 0 0 .3rem;
    color:#333
}
.hot ul{
    padding:.3rem 0 0 .3rem;
    background:#F4F5F7;
    height:2rem;
    margin:0.04rem .26rem 0;
    display:flex;
    flex-wrap:wrap;

}
img{
    padding-top:.16rem;
    padding-left:.1rem;
    width:.48rem;
    height:.48rem;
   
}
ul li{
    height:.6rem;
    background:#fff;
    text-align:center;
    line-height:.6rem;
    margin-right:.34rem;
    padding:0 .23rem;
    margin-bottom:.2rem;
    color:#666 
}
ol{
    margin:0 .26rem;
    height:7rem;
    overflow:auto;
  
}
ol li{
    padding:.12rem 0 .12rem .32rem;
    width:100%;
    border-bottom:1px solid #ccc;
    font-size:.26rem;
    color:#666
}
.clear{
    width:100%;
    text-align:center;
    color:#999;
    margin-top:.2rem
}



`