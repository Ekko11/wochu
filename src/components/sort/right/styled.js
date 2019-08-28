import styled from "styled-components"
export const RightWrapper = styled.div`
.right{
    position:absolute;
    width:5.7rem;
    float:right;
    right:0;
    top:1rem;
    bottom:1.08rem;
    overflow-y:auto;
    border-left:1px solid #e5e5e5;
    margin-top: .3rem;
}
.class-item{
    width:100%;
    padding-bottom:.2rem 0;
    margin-bottom:.21rem;
    
}
.title-wrap{
    width:100%;
    height:.9rem;
    background:#fff;
    text-align:center;
    overflow:hidden;

}
.float-wrap{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
}
.f1{
    margin-right:.2rem
}
 span {
    display: block;
    height: .52rem;
    width: .5rem;
    border-bottom: .01rem solid #e5e5e5;
}
.label{
  margin-top:.32rem;
  font-size:.32rem;
  font-weight:700

}
.fr{
    margin-left:.2rem
}
.tuijian{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    background:#fff;
    
}
.tuijian li{
    width:1.58rem;
    margin:0 .11rem;
    height:2.2rem;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:.2rem
}
.imgCon{
    width:1.24rem;
    height:1.24rem;
   
}
img{
    width:100%;
    height:100%
}
p{
    padding-top:.1rem;
    font-size:.26rem
}
.details{
  
    background:#fff;
    padding-top:.2rem;
    position:absolute;
    width:5.7rem;
    height:100%;
    right:0;
  
}
.details ul{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-left:.2rem;
    align-items:center;
}

`