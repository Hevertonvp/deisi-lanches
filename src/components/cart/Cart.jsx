import styled from 'styled-components'
import { MdAdd, MdRemove } from 'react-icons/md'
import useCart from '../../hooks/useCart/useCart'
import { UPDATE_ORDERS } from '../../context/reducers/cartReducer'
import { useEffect, useState } from 'react'
import ReactWhatsapp from 'react-whatsapp';



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
cursor: pointer;
}
h1{
background: rgba(0, 0, 0, .7);
font-size: 2em;
}
`
const ClosingOrder = styled.div`
color: white;
display: flex;
flex-direction: column;
button{
    background: blue;
    color: white;
    border-radius: 3px;
    height: 40px;
}
`
const DeleteOrderModal = styled.div`
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
height: 45%;
width: 50%;
position: fixed;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: #5e7e7e;
color: white;
@media (max-width: 768px){
    h1{
font-size: 24px;
background: ;
}
}

button{
    color: red;
    height: 35px;
    width: 40%;
}
`



function Cart() {

    //prices: float!

    const newCart = useCart()
    const { cartState, updateCart } = newCart
    const [cartValue, setCartValue] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const prices = cartState?.orders.map((item) => {
            return item.price
        })
        setCartValue(
            prices?.reduce((prev, next) => {
                return (prev + next)
            }, 0).toFixed(2)
        )
    }, [cartState.orders, setCartValue])


    function ingredientHandler(ordersId, itemId, isAdded, ingredients) {
        let orders = cartState?.orders
        let prices = []
        if (isAdded) {
            orders = orders.map((order, key) => {
                if (order.id === ordersId) {
                    order.selected = [
                        ...order.selected, ingredients
                            .find(ingredient => ingredient.id === itemId)];
                    order.selected.forEach((item) => {
                        prices.push(parseFloat(item.price.replace(',', '.')))
                    })
                    //soma todos os selecionados acumulando. errado.
                }
                return order
            })
            const tony = prices.reduce((acc, price) => {
                return (acc + price)
            }, 0)
            const auxOrder = orders.find(order => order.id === ordersId);
            auxOrder.price = (tony + parseFloat(auxOrder.productPrice.replace(',', '.')))
        }
        //this is so weird
        else {
            orders = orders.map(order => {
                if (order.id === ordersId) {
                    order.selected = order.selected.filter(x => x.id !== itemId)
                    const selected = ingredients.find(ingredient => ingredient.id === itemId)
                    order.price -= parseFloat(selected.price.replace(',', '.'))
                }
                return order
            })

        }

        updateCart(UPDATE_ORDERS, {
            orders
        })
        return
    }
    function handleOrderDelete(orderId) {
        let deletedOrder = cartState?.orders
        const orders = deletedOrder.filter((order) => {
            return order.id !== orderId
        })
        updateCart(UPDATE_ORDERS, {
            orders
        })
        setModalOpen(false)
    }


    let selected = cartState?.orders.map((order) => {
        return order.selected       // array de objetos, inclui não adicionados!
    })

    console.log(selected)

    const orderDetails = ""
    //     cartState?.orders.map((order) => {        //não vai ter lógica dentro de string
    //         selected > 0 ? selected.forEach((s) => { String(s.name) }) :
    //             String(order.name)



    //     }))



    // cartState?.orders.forEach((order) => {
    //     if (order.selected.length > 0) {
    //         order.selected.forEach((selected) => {
    //             console.log(selected.name)
    //         })
    //     }
    // })


    return (
        <OrdersWrapper>
            <Header>
                {cartState?.orders.length > 0 ?
                    <h1>Confira seu pedido:</h1> :
                    <h1>Nenhum pedido selecionado</h1>}
            </Header>
            {cartState?.orders?.map(({ name,
                price,
                selected,
                id,
                index,
                extraIngredients,
                quantity,
                productPrice }) => {
                const selectedIds = selected.map((item) => item.id)

                return (
                    <>
                        <DeleteOrderModal isModalOpen={isModalOpen} id cartState >
                            <h1>Tem certeza?</h1>
                            <button onClick={() => handleOrderDelete(id, index)} >
                                Sim
                            </button >
                            <button onClick={() => setModalOpen(!isModalOpen)} >
                                Não
                            </button >
                        </DeleteOrderModal>

                        <Card key={id}>
                            <CardContainer>
                                <OrderHeader>
                                    <div><h1>{name} {productPrice}</h1> </div>
                                </OrderHeader>
                                {selected?.length > 0 ?
                                    <div>
                                        <p>Items Extras Selecionados:</p>
                                        <SelectedIngredients>
                                            {
                                                selected?.map((item, i) => {
                                                    return (
                                                        <div>
                                                            <h4>{item.name} - R$ {item.price} <MdRemove onClick={() => {
                                                                ingredientHandler(id, item.id, false, extraIngredients, price, i)
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
                                {selected?.length >= 2 || extraIngredients.length === 0 ?
                                    ""
                                    : <div>
                                        <p>Adicionar itens:</p>
                                        <SelectedIngredients key={id}>
                                            {
                                                extraIngredients?.filter(
                                                    (item) => !selectedIds.includes(item.id)
                                                ).map((item, i) => {
                                                    return (
                                                        <div>
                                                            <h4>{item.name} - R$ {item.price} <MdAdd color="#05fc2a" onClick={() => {
                                                                ingredientHandler(id, item.id, true, extraIngredients, price, i)
                                                            }}
                                                            />
                                                            </h4>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </SelectedIngredients>
                                    </div>}
                            </CardContainer>
                            <OrderBody>
                                <div>
                                    <h1>{quantity}</h1>
                                    <h1>R$: {String(price.toFixed(2)).replace('.', ',')}</h1>
                                    {/* <MdAdd color="#05fc2a" onClick={() => handleOrderChange(true)} /> */}
                                    <h2>Remover</h2>
                                    <MdRemove onClick={() => setModalOpen(!isModalOpen)} />
                                </div>
                            </OrderBody>
                        </Card>
                    </>
                )
            })}

            <ClosingOrder orderDetails>
                {cartState.orders.length > 0 ? <h1>Valor Total: {String(cartValue).replace('.', ',')}</h1> : ""}
                {cartState?.orders.length > 0 ?
                    <ReactWhatsapp number="55-32-999150802" message={     //string only

                        orderDetails




                    }>
                        Fechar pedido
                    </ReactWhatsapp>
                    : ""}
            </ClosingOrder>
        </OrdersWrapper >

    )
}

export default Cart