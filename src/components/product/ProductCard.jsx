import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';


const StyledProductCard = styled.div`
color: #ffcc4d;
width: 21em;
height: 25em;
border-radius: 20px;
display: flex;
flex-direction: column;
padding: 0.7em;

background-image:
  radial-gradient(circle, #2c090d 20%, rgba(0,0,255,0.5) 190%, transparent),
  url('/images/backgroundburger.png');
;
;

box-shadow: inset 1em 30px #41494d;
h1{ 
    font-size: 40px;
    text-align: center;
    margin-bottom: 25px;
}
img{
    
    border: 1px ridge #dd2e44;
    border-radius: 10px 10px 0 0;
    height: 12em;
}
`
// const StyledButton = styled.button`
// text-align: center;
// color: gold;
// font-size: 15px;
// background-color: #dd2e44;
// height: 3em;
// margin-top: 10px;
// border-radius: 10px`;

const StyledAddProductContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
font-size: 30px;
background: #dd2e44;
padding: 10px;
border-radius:  0 0 10px 10px;
`

function ProductCard({ hamburger }) {
    return (
        <IconContext.Provider value={''}>
            <StyledProductCard to={"#"}>
                <h1>{hamburger.name}</h1>
                <img src={hamburger.imgUrl} alt=""></img>
                <StyledAddProductContainer>
                    <MdOutlineAddShoppingCart />
                    Adicionar
                </StyledAddProductContainer>

            </StyledProductCard>
        </IconContext.Provider>
    )
}

export default ProductCard