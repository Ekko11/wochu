import styled from "styled-components"
export const ClassifyHeaderWrapper=styled.div`
position:fixed;
width:100%;
height:1rem;
top:0;
left:0;
padding:0;
margin:0;
border-bottom:1px solid #e5e5e5;
z-index:1;
background:#fff;
.parent-name span{
    font-weight:500;
    font-size:.36rem;
    margin-left:.2rem;
    padding-top:.4rem
}
.back{
    font-size:.5rem;
    margin-left:-.1rem
}
.search-ctl{
    width:7.1rem;
    height:.58rem;
    margin:.15rem .2rem;
    line-height:.58rem;
    font-size:.36rem;
    color:#333;
    display:flex;
    justify-content:space-between
}
img{
    margin-right:.2rem;
    width:.6rem;
    height:.6rem
}
.search-key{
    width:.45rem;
    height:.45rem;
    margin-top:.07rem
}

.header_right{
    display:flex;
    flex-direction:row; 
    font-size:.3rem  
}

`