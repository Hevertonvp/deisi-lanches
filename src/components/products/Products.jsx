import { useEffect, useState, useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import ProductCard from '../product/ProductCard'
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


function Products({ handleOpenModal }) {

    const { products } = useContext(ProductContext)

    return (
        <>
            <StyledProductHeader>
                <h1>Hamburguer</h1>
            </StyledProductHeader>
            <StyledProductsContainer>
                {products.hamburgers?.map((hamburger) => {
                    return (
                        <ProductCard
                            key={hamburger.id}
                            product={hamburger}
                            handleOpenModal={handleOpenModal}
                        />
                    )
                })}
            </StyledProductsContainer >
            <StyledProductHeader>
                <h1>Hot Dogs</h1>
            </StyledProductHeader>
            <StyledProductsContainer>
                {products.hotdogs?.map((hotdog) => {
                    return <ProductCard key={hotdog.id} productId={hotdog.id} product={hotdog} handleOpenModal={handleOpenModal} />
                })}
            </StyledProductsContainer>

        </>
    )
}

export default Products