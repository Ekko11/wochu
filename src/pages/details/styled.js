import styled from "styled-components"
export const DetailsWrapper= styled.div`
width:100%;
height:100%;
overflow-y:auto;
.container{
    position:relative
}

.middle{
    height:2.8rem;
    display:flex;
    width:100%;
    justify-content:space-around;
    /* margin-top: 6.78rem; */
}
img{
    width:100%;
    height:100%
}
.middle p{
    font-size:.27rem;
    color:#666;
    margin-top:2.26rem
}
.info {
    width:100%;
    height:1.8rem;
    background:#fff;
}
.info ul{
    display:flex;
    flex-wrap:wrap;
    justify-content:left;
    align-items:center;
    padding-top:.26rem;
    padding-left:.26rem
}
.info ul li{
    width:50%;
    height:.8rem;
    font-size:.3rem;
    color:#999
}
.info ul li span{
    color:#001E00
}
.infotwo{
    width:96%;
    height:2.42rem;
    background:#fff;
    position:absolute;
    top:6rem;
    left:.17rem;
    border-radius:.3rem;
    padding:.45rem 0 0 .2rem;
    box-shadow: 8px 8px 8px 8px rgba(0,0,0,.22);

}
.banner{
    width:7.505rem;
    overflow-x:auto
}
.ant-carousel .slick-slide {
  text-align: center;
  height:6.5rem;
  line-height:6.5rem;
  overflow: hidden;
  float: left;
  position:relative
}

.ant-carousel .slick-slide h3 {
  color: #fff;

}

.name{
    font-size:.34rem;
    color:#001E00;
    padding-bottom:.2rem
}
.xinxi{
    font-size:.24rem;
    color:#999;
    padding-bottom:.2rem
}
.price{
    color:#FF5918;
    font-size:.29rem
}
.pj{
    height:.8rem;
    background:#fff;
    margin-top:.22rem;
    font-size:.3rem;
    padding-left:.2rem;
    line-height:.8rem
}

.guess{
    width:100%;
    overflow-x:auto
}
.like{
    height:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
}
.like span{
    display:block;
    width:2rem;
    height:.2rem;
    border-bottom:1px solid #999;
}
.like p{
    font-size:.3rem;
    padding:0 .2rem;
    color:#999
}
.guess ul{
    display:flex;
    flex-direction:row;
    height:3.4rem;
    width:10rem;
    background:#fff;
    margin-bottom:2rem
}
.guess ul li{
    width:2.2rem;
    height:100%;
    display:flex;
    background:#fff;
    flex-direction:column;
}
.guessCon{
    width: 2.2rem;
    height: 2rem;
}
.guessCon img{
    width: 2.2rem;
    height: 2rem;
}
.guess ul li p{
    font-size:.24rem;
    height: 1rem;
    color:#999;
    width:2.2rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    padding-left:.2rem
}
.guess ul li del{
    font-size:.22rem;
    color:#666;
    height: 1rem;
    padding-left:.2rem
}
.guessp{
    display:flex;
    height: 1rem;
    flex-direction:row;
    justify-content:space-between;
    padding-left:.2rem;
}
.guessp span{
    font-size:.24rem;
}
.guessp i{
    width:.7rem;
    height:.5rem;
    padding-right:.3rem;
   margin-top:-.25rem
}
 i img{
    width:90%;
    height:90%
}
.addcategory{
    width:100%;
    height:1.2rem;
    background:#ff5918;
    position:fixed;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-size:.34rem
}
.shop{
    width:.8rem;
    height:.8rem;
    position:absolute;
    top:.5rem;
    right:.8rem
}
.fh{
    width:.5rem;
    height:.5rem;
    position:absolute;
    top:.5rem;
    left:.5rem
}

`