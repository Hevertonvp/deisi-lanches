import styled from 'styled-components'
import CartContext from '../../context/CartContext'
import { GoDiffAdded, GoDiffRemoved } from 'react-icons/go'
import { TiInputChecked } from 'react-icons/ti'
import { useContext, useState, useEffect } from 'react'
import ProductContext from '../../context/ProductContext'


const Header = styled.div`
font-size: 1.5em;
margin: 1em;
text-shadow: 1px 1px #035220;
@media (max-width: 768px){
    font-size: 1em;
}
`

const OrdersWrapper = styled.div`
padding: 2em;
background-image: url("images/23657229.jpg");
background: rgba(0, 0, 0, .8);
min-height: 100vh;
color: white;
font-family: ${({ theme }) => theme.fonts.default};
display: flex;
flex-direction: column;
align-items: center;
`
const Card = styled.div`
width: 80vw;
margin: 0.2em;
display: grid;
grid-template-columns: 5fr 2fr;
background: rgba(0, 0, 0, .7);
border-radius: 5px;

`
const OrderContainer = styled.div`
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

h5{
 margin-left: 20px;
 color: #ebe8ea;
 margin: 8px;
}
`

const CardHeader = styled.div`
display: flex;
flex-direction: column;
color: #a12039;
h1{
    margin-left: 15px;
    color: white;
}
@media (max-width: 768px){
  font-size: 18px;
  padding: 0 auto;
}

`
const ExtrasContainer = styled.div`
background: #1c1c16;
padding: 10px;
border-radius: 10px;
box-shadow: 0 0 5px #1c1c16;
display: flex;
color: white;
flex-direction: column;
h4{
    margin: 5px;
    color: #649e6d;
}
@media (max-width: 768px){
  font-size: 15px;
}
svg{
    color: #b00516;
    margin-left: 5px;
}
`
const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

h1{
    font-size: 2em;
    margin-right: 10px;
    background: rgba(252, 186, 3, .4);
    border-radius: 10px;
    color: black;
}
svg{
font-size: 2em;
color: #a4dbb9;
margin: 10px 10px 0 0;
}
`


function Cart() {



    const newCart = useContext(CartContext)
    const { order } = newCart





    return (
        <OrdersWrapper>
            <Header>
                <h1>Confira seu pedido:</h1>
            </Header>

            {order.map(({ extraIngredients, selectedIngredients, name, price }) => {

                if (extraIngredients.length > 0) {
                    return (
                        <Card>
                            <OrderContainer>
                                <CardHeader>
                                    <h2>{name}</h2>
                                    <h1> R$: {price}</h1>
                                </CardHeader>
                                <ExtrasContainer>
                                    <h3>Extras:</h3>
                                    {extraIngredients.map((ingredient, index) => {    
                                        
                                        return (
                                            <div>
                                                <h4>{ingredient.name} - R${ingredient.price} <GoDiffRemoved /></h4>
                                            </div>
                                        )
                                    }
                                    )}
                                    <p>adicionar items</p>
                                </ExtrasContainer>
                            </OrderContainer>
                            <Body>
                                <div>
                                    <h1>{order.quantity}</h1>
                                    <GoDiffAdded />
                                    <GoDiffRemoved />
                                </div>
                            </Body>
                        </Card>
                    )
                }
                else {
                    return (
                        <>
                            <Card>
                                <OrderContainer>
                                    <CardHeader>
                                        <h2>{order.name}</h2>
                                        <h1>R$: {order.price}</h1>
                                    </CardHeader>
                                </OrderContainer>
                                <Body>
                                    <div>
                                        <h1>{order.quantity}</h1>
                                        <GoDiffAdded />
                                        <GoDiffRemoved />
                                    </div>
                                </Body>
                            </Card>

                        </>
                    )
                }
            })}

        </OrdersWrapper >
    )
}

export default Cart