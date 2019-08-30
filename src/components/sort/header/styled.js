import styled from "styled-components"
export const  HeaderWrapper = styled.div`
width:100%;
height:1.072rem;
background:#fff;
position:fixed;
left:0;
top:0;
display:flex;
justify-content:center;
align-items:center;
.search-ctl{
    width:.6rem;
    height:.642rem;
    background:#fff;
    border:1px solid #ccc;
    border-right:none;
    border-radius:.14rem 0 0 .14rem;
    line-height:.642rem;
    text-align:center;
}
img{
    padding-top:.16rem;
    padding-left:.1rem;
    width:.48rem;
    height:.48rem
}
input{
    width:6.37rem;
    height:.642rem;
    background:#fff;
    border:1px solid #ccc;
    border-left:none;
    border-radius: 0 .14rem .14rem 0;
    outline:none;
    padding-left:.1rem;
    font-size:.3rem;
} 
`