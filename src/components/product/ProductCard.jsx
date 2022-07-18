import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { useContext } from 'react';
import  ProductContext  from '../../context/productContext.js'
import * as Styled from './Styles'


function ProductCard({ product }) {


    const { addProduct } = useContext(ProductContext)

    return (
        <IconContext.Provider value={''}>
            <Styled.ProductCard to={""} onClick={() => addProduct(product)}>
                <h1>{product.name}</h1>
                <img src={product.imgUrl} alt=""></img>
                <Styled.ProductContainer>
                    <MdOutlineAddShoppingCart />
                    <span>Adicionar</span>
                </Styled.ProductContainer>
            </Styled.ProductCard>
        </IconContext.Provider>
    )
}

export default ProductCard