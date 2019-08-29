import styled from "styled-components"

export const OrderWrap = styled.div`
height:100%;
overflow:auto;
.wrapDiv{
    margin-bottom: 1.1rem;
}
.nologinBn{
    height: 5.8rem;
    position: relative;
}
.login_Bn{
        border: 0.03rem solid #f67d30;
        color: #f67d30;
        width:2.4rem;
        height:.7rem;
        text-align: center;
        line-height:.6rem;
        position: absolute;
        left: 2.5rem;
        top: 3.9rem;
        font-size: 0.35rem;
    }
.loginBn{
    height: 5.8rem;
    position: relative;
    overflow:hidden;
    .empty_goods{
        .p1{
            font-size: 0.4rem;
            line-height: .8rem;
            text-align: center;
            color: #666;
        }
        .p2{
            color: #dddcdc;
            font-size: .3rem;
            text-align: center;
        }
        img{
            width:2.43rem;
            height:0.75rem;
        } 
    }
    img{
        margin-top: 1.8rem;
    }
}
img{
    margin:auto;
}
.recommend{
    width:4.72rem;
    height:0.31rem;
}
.recom_list{
    display:flex;
    flex-wrap: wrap;
    width: 6.3rem;
    margin:  0 auto 2rem;
    justify-content: space-between;
  
    
        .goods{
            width:2rem;
            background:#fff;
            margin-top: 0.2rem;
            img{width:100%}
            position:relative;
            .addBn{
                    position:absolute;
                    right: 0.15rem;
                    bottom: 0.23rem;
                    width:.5rem;
                    height:.5rem
            } 
            .goodDec{
                font-size: .28rem;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width:80%;
                margin-bottom: 0.2rem;
            }
            .oldPrice{
                font-size: .22rem;
                color: grey;
                text-decoration: line-through;
            
            }   
            .nowPrice{
                font-size: .28rem;
                color: #f96d16;
                margin-bottom: 0.2rem;
            }
            .wrap{
                padding: 0 0.1rem;
            }
        }
    
}
.header{
    display: flex;
    height: 0.9rem;
    background: #fff;
    width: 100%;
    justify-content: space-around;
    font-size: 0.3rem;
    line-height: 0.9rem;
}
.time_nav{
    display:flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 1.08rem;
    background: #fff;
    padding: 0 0.2rem;
    img{
        margin:0;
        width: .34rem;
        height: .34rem;
    }
    p{
        font-size: .28rem;
        color: #2e2e2e;
    }
   .dateSpan{
        margin-left: .1rem;
        font-size: .3rem;
        font-weight: bolder;
        color: #f86c15;
    }
    .changeSpan{
        font-size: .3rem;
    color: #f86c15;
    }
}
.list_ul{
    margin-bottom:1rem;
    li{
        display:flex;
        justify-content:left;
        background:#fff;
        margin-top:0.1rem;
    
        .goods_img{
            width: 2.2rem;
            height: 2.2rem;
             margin: 0 0.2rem;
        }

   
    .goodsDec{
        word-break: break-all;
        text-overflow: ellipsis;
        height: .6rem;
        line-height: .32rem;
        font-size: .28rem;
        margin: 0.3rem 0 0.5rem;
    }
    .check_img{
        width: .34rem;
        margin: 1rem 0.2rem 0;
    }
    .bottom{
        display:flex;
        justify-content:space-between;
        .nowPrice{
            color: #f96d16;
            font-size: .3rem;
        }
        .oldPrice{
            font-size: .26rem;
            font-style: normal;
            text-decoration: line-through;
            color: #999;
        }
    }
    .right{
        width:3.6rem;
    }  
    .stepNum{
        width: 1.55rem;
        height: .5rem;
        display: flex;
        justify-content: flex-start;
        font-size: .3rem;
        background: #f5f5f5;
        text-align:center;
        line-height:.5rem;
        border-radius: 0.26rem;
        div{
            width:.5rem;
            height:.5rem;
            font-size:.4rem;
        }
        .add{
            
        }
        p{
            width:.65rem;
        }
    }


}
}
 .totalPrice{
    position: fixed;
    display: flex;
    left: 0;
    bottom: 1rem;
    width: 100%;
    background: #fff;
    height: 1rem;
    z-index: 100;
    .check_img{
        width: .34rem;
        margin: .35rem 0.2rem 0;
        height:.34rem;
    }
    .totalP{
        height: 1.14rem;
        margin-left: .2rem;
        padding: .16rem 0;
        line-height: .68rem;
        .buyPrice{
            font-size: .36rem;
            color: #f96d16;
        }
        .decSpan{
            font-size: .24rem;
            color: #999;
        }
    }
    .buyBn{
        background: rgb(249, 109, 22);
        height: 100%;
        width: 2.3rem;
        line-height: 1rem;
        color: #fff;
        background: #f96d16;
        text-align: center;
        font-size: .36rem;
        position: absolute;
        right: 0;
    }
    .delBn{
        background: #ff3b30;

    }
.cleanGoods{
    position:absolute;
    left:-100%;
    position: absolute;
    left: -1.85rem;
    top: 0;
    color: #999;
    font-size: .3rem;
}
 }   
`