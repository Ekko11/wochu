import styled from "styled-components"

export const OrderWrap = styled.div `
height:100%;
overflow:auto;
.wrapDiv{
    margin-bottom: 1.1rem;
}
.loginBn{
    height: 5.8rem;
    position: relative;
    div{
        border: 0.03rem solid #f67d30;
        color: #f67d30;
        width:2.4rem;
        height:.7rem;
        text-align: center;
        line-height:.6rem;
        position: absolute;
        left: 2.5rem;
        top: 3.65rem;
        font-size: 0.35rem;
    }
}
img{
    margin:auto;
}
.recom_list{
    display:flex;
    flex-wrap: wrap;
    width: 6.3rem;
    margin: auto;
    justify-content: space-between;
  
    {
        .goods{
            width:2rem;
            background:#fff;
            margin-top: 20px;
            img{width:100%}
            position:relative;
            .addBn{
                    position:absolute;
                    right: 0.15rem;
                    bottom: 0.23rem;
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
}

`