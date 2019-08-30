import styled from "styled-components";


export const Home_top = styled.div`
    position:fixed;
    top:0;
    z-index:10;
    display:flex;
    align-items:center;
    width:100%;
    height:.9rem;
    padding:0 .24rem;
    background: #fff;
    img:nth-child(1){
        width:.88rem;
        height:.4rem;
        margin-top:.125rem;
    }
    div:nth-child(2){
        line-height:.9rem;
        width:3.5rem;
        font-size:.3rem;
        color:#1f6117;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            display:inline-block;
            width:.15rem;
            height:.12rem;
            margin-left:.3rem;
        }
    }
    img:nth-child(3){
        position:absolute;
        right:.24rem;
        height:.36rem;
        width:.36rem;
    }
`
export const Home_every_ul = styled.ul`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    align-items:center;
    height:4.36rem;
    background:#fff;
    border-bottom:1px solid #e5e5e5;
    li{
        height:1.7rem;
        width:1.7rem;
        
    }
`
export const All_Node = styled.div`
    width:100%;
.wochu-broadcast{
    height:1.16rem;
    width:7.5rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:.26rem;
    background:#fff;
    
}
.wochu-broadcast span{
    font-size:.3rem;
}
.my-carousel li div{
    display:flex;
    justify-content:center;
}
.my-carousel .v-item {
  height: 1.14rem;
  line-height: 1.14rem;
  padding-left: 10px;
}
.img_size{
    height:1.02rem;
    width:7.5rem;
    margin-top:.3rem;
}
.oneBigCol{
    width:100%;
    height:3.12rem;
    position: relative;
    display:flex;
    justify-content:center;
    background:#fff;
    color:#666666;
    padding-top:.1rem;
    border-bottom:1px solid #e5e5e5;

}
.oneBigCol>div>img:nth-child(1){
    height:2.6rem;
    width:2.6rem;
    
}
.oneBigCol>div>img:nth-child(2){
    position: absolute;
    top:.3rem;
    left:.2rem;
}
.oneBigCol>div:nth-child(2)>div:nth-child(1){
    font-size:.32rem;
    width:4.14rem;
    line-height:1rem;
}
.oneBigCol>div:nth-child(2)>div:nth-child(2){
    font-size:.26rem;
    width:4.14rem;
    line-height:.88rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.oneBigCol>div:nth-child(2)>div:nth-child(3){
    font-size:.30rem;
    width:4.14rem;
    color:#ff5918;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.oneBigCol>div:nth-child(2)>div:nth-child(3)>img{
    display:inline-block;
}
.oneColAll{
    overflow:auto;
    background:#fff;
}
.oneCol{
    height:3.78rem;
    padding:.26rem .25rem 0 .24rem;
    font-size:.24rem;
    display:flex; 
}
.oneCol>div{
    height:3.52rem;
    width:1.9rem;
    margin-right:.36rem;
    text-align:left;
}
.oneCol>div>img{
    height:1.9rem;
    width:1.9rem;
}
.oneCol>div>div{
    height:.4rem;
    line-height:.4rem;
}
.oneCol>div>:nth-child(2){
    color:#666666;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

.oneCol>div>:nth-child(3){
    color:#BABABA;
    text-decoration:line-through
}
.oneCol>div>:nth-child(4){
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#001E00;
}
.sumDay{
    margin-top:.1rem;
}
.group-list3{
    width:7.5rem;
    height:5.5rem;
    background: #f4f4f4;
    display:flex;
    justify-content:center;
    padding:.3rem .1rem;
}
.group-list3>img{
    height:5.2rem;
}
.goods-list{
    display:flex;
    flex-wrap:wrap;
    background:#fff;
    padding-bottom:.1rem;
}
.goods-list>div{
    margin-left:.18rem;
    width:2.26rem;
    position:relative;
}
.goods-list>div>div{
    height:.5rem;
    line-height:.5rem;
}
.goods-list>div>img{
    height:2.26rem;
    width:2.26rem;
}
.goods-list>div>:nth-child(2){
    color:#666666;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.goods-list>div>:nth-child(3){
    color:#BABABA;
    text-decoration:line-through
}
.goods-list>div>:nth-child(4){
    display:flex;
    justify-content:space-between;
    align-items:center;
    color: #f96d16;
}
#none{
    position:absolute;
    height:1.56rem;    
    width:1.56rem;  
    background:red;
    top:10%;
    left:15%;
    font-size:.32rem;
    color:rgba(0,0,0,0); 
    text-align:center;
    line-height:1.56rem; 
    border-radius:1.56rem;
    background:rgba(0,0,0,0);
}
#show{
    position:absolute;
    height:1.56rem;    
    width:1.56rem;  
    background:rgba(0,0,0,0.5);
    top:10%;
    left:15%;
    font-size:.32rem;
    color:#ffffff;
    text-align:center;
    line-height:1.56rem; 
    border-radius:1.56rem;
}
`


