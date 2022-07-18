import { useContext } from 'react'
import ProductContext from '../../context/productContext'
import ProductCard from '../product/ProductCard'
import * as Styled from './Styles'




function Products() {

    const { products } = useContext(ProductContext)

    return (
        <>
            <Styled.ProductHeader>
                <h1>Hamburguer</h1>
            </Styled.ProductHeader>
            <Styled.ProductsContainer>
                {products.hamburgers?.map((hamburger) => {
                    return (
                        <ProductCard
                            key={hamburger.id}
                            product={hamburger}
                        />
                    )
                })}
            </Styled.ProductsContainer >
            <Styled.ProductHeader>
                <h1>Hot Dogs</h1>
            </Styled.ProductHeader>
            <Styled.ProductsContainer>
                {products.hotdogs?.map((hotdog) => {
                    return (
                        <ProductCard
                            key={hotdog.id}
                            product={hotdog}
                        />
                    )
                })}
            </Styled.ProductsContainer>
            <Styled.ProductHeader>
                <h1>Bebidas</h1>
            </Styled.ProductHeader>
            <Styled.ProductsContainer>
                {products.drinks?.map((drink) => {
                    return (
                        <ProductCard
                            key={drink.id}
                            product={drink}
                        />
                    )
                })}
            </Styled.ProductsContainer>
        </>
    )
}

export default Products