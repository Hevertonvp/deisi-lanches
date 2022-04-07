import React from 'react'
import ProductCard from '../product/ProductCard'
import { products } from '../../data/mockProducts'
import styled from 'styled-components'



const StyledProductsContainer = styled.div`


padding-top: 4em;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
row-gap: 20px;
column-gap: 20px;
font-family: ${({ theme }) => theme.fonts.navLink};
margin-bottom: 2em;

`

const StyledProductHeader = styled.div`
font-family: ${({ theme }) => theme.fonts.navLink};
background:
  radial-gradient(circle, #2c090d 20%, rgba(0,0,255,0.5) 190%, transparent),
  url('/images/backgroundburger.png');
padding: 10px;
color: #dd2e44;
text-shadow: 2px 2px #ffd24c;
text-align: center;
font-size: 2em;
`


function Products({handleOpenModal}) {

    return (
        <>
                <StyledProductHeader>
                    <h1>Hamburguer</h1>
                </StyledProductHeader>

                <StyledProductsContainer>
                    {products.hamburgers.map((product) => {
                        return <ProductCard key={product.id} product={product} handleOpenModal={handleOpenModal} />
                    })}
                </StyledProductsContainer >
                <StyledProductHeader>
                    <h1>Hot Dogs</h1>
                </StyledProductHeader>
                <StyledProductsContainer>
                    {products.hotdogs.map((product) => {
                        return <ProductCard key={product.id} product={product}  handleOpenModal={handleOpenModal}/>
                    })}
                </StyledProductsContainer>
 
        </>
    )
}

export default Products