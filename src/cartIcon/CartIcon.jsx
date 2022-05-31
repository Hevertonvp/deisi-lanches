import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import CartContext from '../context/CartContext'
import { useContext } from 'react'




const IconContainer = styled(Link)`
h4 {
    position: absolute;
    color: red;
    text-shadow: 1px 1px yellow;
    margin: 14px 0 0 25px;

}

`




function CartIcon() {

    const newCart = useContext(CartContext)

    const { order } = newCart;

    return (
        <IconContainer to={'cart'}>
            <h4> {order.length}</h4>
            <FiShoppingCart />
        </IconContainer>

    )
}

export default CartIcon