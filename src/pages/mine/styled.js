
import styled from "styled-components"

export const MineWrap = styled.div`
position: relative;
text-align: center;
.top{
    height: 5.7rem;
    background: #eee;
    img{
        width:100%;
    }
}
.icon{
    position: absolute;
    left:3rem;
    top:1rem;
    img{
        height:1.2rem;
        width:1.2rem
    }
    p{
    color: #fff;
    margin-top: .3rem;
    font-size: 0.3rem;
    }
}
.price{
    border-radius: 0.4rem 0.4rem;
    width: 7rem;
    background: #fff;
    position: absolute;
    height: 2.4rem;
    left: 0.23rem;
    top: 3rem;
    .price_top{
        height: 1.5rem;
        display: flex;
        align-items:center;
        div{
            float:left;
            height:1rem;
            width: 50%;
        }
        .p1{
            font-size:0.5rem;
        }
        .p2{
            font-size: 0.28rem;
            color: #999;
        }
        .price_left{
            border-right:0.01rem solid #999
        }
    }
    .bottom_price{
        display:flex;
        height:0.8rem;
        background:#428b0e;
        border-radius: 0 0 0.4rem 0.4rem;
        margin-top: 0.1rem;
        color:#fff;
        font-size: 0.28rem;
        align-items:center;
        div{
            width:50%;
        }
        
    }
}
.list{
    height:1.8rem;
    background:#fff;
    margin-bottom:0.3rem
    ul{
        display:flex;
        justify-content:space-between
    }   
   li{
       text-align:center;
       width:20%;
       color:#999;
       font-size:0.24rem
       img{
        margin: 0.35rem auto 0.2rem;
        width: 0.56rem;
        height: 0.56rem;
       }

   }
}
.mine_self{
    background:#fff;
    margin-top:0.04rem;
    ul{
        display:flex;
        justify-content:space-between
    }
    li{
        text-align:center;
       width:25%;
       color:#999;
       font-size:0.24rem
       img{
        margin: 0.35rem auto 0.2rem;
        width: 0.56rem;
        height: 0.56rem;
       }
       p{
           margin-bottom:0.2rem;
       }
    }
}
.bottom_gif{
    height:1.5rem;
    img{
        width:100%;
        height:100%
    }
}
`