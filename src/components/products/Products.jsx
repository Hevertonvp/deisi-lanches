import { useContext } from 'react'
import ProductContext from '../../context/productContext'
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
font-family: ${({ theme }) => theme.fonts.default};
margin-bottom: 2em;

`

const StyledProductHeader = styled.div`
font-family: ${({ theme }) => theme.fonts.default};
background:
  radial-gradient(circle, #2c090d 20%, rgba(0,0,255,0.5) 190%, transparent),
  url('/images/backgroundburger.png');
padding: 10px;
color: white;
text-shadow: 5px 5px black;
text-align: center;
font-size: 2em;
`


function Products() {

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
                        />
                    )
                })}
            </StyledProductsContainer >
            <StyledProductHeader>
                <h1>Hot Dogs</h1>
            </StyledProductHeader>
            <StyledProductsContainer>
                {products.hotdogs?.map((hotdog) => {
                    return (
                        <ProductCard
                            key={hotdog.id}
                            product={hotdog}
                        />
                    )
                })}
            </StyledProductsContainer>
            <StyledProductHeader>
                <h1>Bebidas</h1>
            </StyledProductHeader>
            <StyledProductsContainer>
                {products.drinks?.map((drink) => {
                    return (
                        <ProductCard
                            key={drink.id}
                            product={drink}
                        />
                    )
                })}
            </StyledProductsContainer>
        </>
    )
}

export default Products