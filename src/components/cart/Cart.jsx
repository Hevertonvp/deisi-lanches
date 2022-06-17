import styled from 'styled-components'
import CartContext from '../../context/CartContext'
import { MdAdd, MdRemove } from 'react-icons/md'
import { FaHamburger, FaHotdog } from 'react-icons/fa'
import { TiInputChecked } from 'react-icons/ti'
import { useContext, useState, useEffect } from 'react'
import useCart from '../../hooks/useCart/useCart'
import ProductContext from '../../context/ProductContext'
import { UPDATE_ORDERS } from '../../context/reducers/cartReducer'



const Header = styled.div`
font-size: 1.5em;
margin: 1em;
color: #c4c4c2;
text-shadow: 1px 1px #a3223c;
@media (max-width: 768px){
    font-size: 1em;
}
`

const OrdersWrapper = styled.div`
padding: 2em;
/* background-image: url("images/23657229.jpg"); */
background: #27292e;
min-height: 100vh;
font-family: ${({ theme }) => theme.fonts.default};
display: flex;
flex-direction: column;
align-items: center;
`
const Card = styled.div`
width: 80vw;
margin: 0.8em;
display: grid;
grid-template-columns: 5fr 2fr;
background: rgba(0, 0, 0, .4);
box-shadow: 0 0 4px black;
border-radius: 5px;

`
const CardContainer = styled.div`
border-radius: 3px;
min-width: 100%;
background: rgba(0, 0, 0, .9);
display: flex;
justify-content: flex-end;
flex-direction: column;
padding: 2em;
@media (max-width: 768px){
  padding: 1em;
}
p{
    color: lightgrey;
}
`

const OrderHeader = styled.div`
display: flex;
color: #a3223c;
h2{
color: white;
text-shadow: 1px 1px grey;
}
flex-direction: column;
h1{
    margin-left: 20px;
    /* text-shadow: 1px 1px 0 #edb2be; */
    font-size: 45px;
}
svg{
    margin: 0 0 -4px 6em;
    color: #d4ac3f;
}
@media (max-width: 768px){
  font-size: 18px;
  padding: 0 auto;
}

`
const SelectedIngredients = styled.div`
color: lightgrey;
background: #1c1c16;
padding: 10px;
border-radius: 3px;
display: flex;
flex-direction: column;
margin-bottom: 5px;
h4{
    margin: 5px;
    font-weight: 50;
}
@media (max-width: 768px){
  font-size: 15px;
}
svg{
    font-size: 30px;
    margin: 0 0 -8px 10px;
    color: #a3223c;
    cursor: pointer;
}
`
// const UnselectedIngredients = styled.div`
// background: #1c1c16;
// color: lightgrey;
// padding: 10px;
// border-radius: 10px;
// display: flex;
// flex-direction: column;
// h4{
//     margin: 5px;
//     font-weight: 50;
// }
// @media (max-width: 768px){
//   font-size: 15px;
// }
// svg{
//     margin: 0 0 -8px 5px;
//     color: #00b81c;
//     font-size: 30px;
//     cursor: pointer;
// }
// `

const OrderBody = styled.div`
display: flex;
background: rgba(0, 0, 0, .5);
flex-direction: column;
justify-content: center;
text-align: center;
;
color: #5e5e5e;
font-size: 1.4em;
svg{
color: #a3223c;
font-size: 3em;
margin: 0 10px 0 0;
}
h1{
background: rgba(0, 0, 0, .7);
font-size: 2em;
}
`


function Cart() {


    //context
    const newCart = useCart()
    const { cartState, updateCart } = newCart
    const { extraIngredients } = useContext(ProductContext); // 

    function addIngredient(ordersId, itemId, isAdded) {
        let orders = cartState?.orders
        if (isAdded) {
            orders = orders.map(o => {
                if (o.id === ordersId) {
                    o.selected = [
                        ...o.selected, extraIngredients
                            .find(e => e.id === itemId)];
                }
                return o
            })

            updateCart(UPDATE_ORDERS, {
                orders
            })
            return
        }
        orders = orders.map(o => {
            if (o.id === ordersId) {
                o.selected = o.selected.filter(x => x.id !== itemId)
            }
            return o
        })
        updateCart(UPDATE_ORDERS, {
            orders
        })
        return
    }

    return (
        <OrdersWrapper>
            <Header>
                <h1>Confira seu pedido:</h1>
            </Header>

            {cartState?.orders?.map(({ name, price, selected, id }) => {
                const selectedIds = selected.map((item) => item.id)
                return (
                    <Card key={id}>
                        <CardContainer>
                            <OrderHeader>
                                <div><h1>{name}</h1> </div>
                            </OrderHeader>
                            {selected?.length > 0 ?
                                <div>
                                    <p>Items Extras Selecionados:</p>
                                    <SelectedIngredients>
                                        {
                                            selected?.map((item, index) => {
                                                return (
                                                    <div>
                                                        <h4>{item.name} - R$ {item.price} <MdRemove onClick={() => {
                                                            addIngredient(id, item.id, false)
                                                        }
                                                        } />
                                                        </h4>
                                                    </div>
                                                )
                                            })
                                        }
                                    </SelectedIngredients>
                                </div>
                                : ""}
                            {selected?.length < 3 ?
                                <div>
                                    <p>Items Extras Selecionados:</p>
                                    <SelectedIngredients>
                                        {
                                            extraIngredients?.filter(
                                                (item) => !selectedIds.includes(item.id)
                                            ).map((item, index) => {
                                                return (
                                                    <div>
                                                        <h4>{item.name} - R$ {item.price} <MdAdd onClick={() => {
                                                            addIngredient(id, item.id, true)
                                                        }}
                                                        />
                                                        </h4>
                                                    </div>
                                                )
                                            })
                                        }
                                    </SelectedIngredients>
                                </div>
                                : ""}
                        </CardContainer>
                        <OrderBody>
                            <div>
                                <h1>R$: {price}</h1>
                                <MdAdd color="#05fc2a" />
                                <MdRemove />
                            </div>
                        </OrderBody>
                    </Card>
                )

            })}

        </OrdersWrapper >
    )
}

export default Cart