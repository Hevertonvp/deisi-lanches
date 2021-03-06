import * as Styled from './Styles';
import { MdAdd, MdRemove } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import useCart from '../../hooks/useCart/useCart'
import { UPDATE_ORDERS } from '../../context/reducers/cartReducer'
import { useEffect, useState } from 'react'
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppOrder from '../../helpers/whatsAppOrder'



function Cart() {

    //prices: float!

    const newCart = useCart()
    const { cartState, updateCart } = newCart
    const [cartValue, setCartValue] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false);
    const [isClosingModalOpen, setClosingModalOpen] = useState(false);
    const [isDelivery, setIsDelivery] = useState(false);
    const [costumerData, setCostumerData] = useState({
        address: "",
        paymentType: "",
    })
    const paymentMethods = ["Dinheiro", "Débito/Crédito", "Pix"]  // later, coming from backend!
    const [checkedState, setCheckedState] = useState(new Array(paymentMethods.length).fill(false))
    const [paymentMethod, setPaymentMethod] = useState("")

    console.log(isDelivery)

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


    function ingredientHandler(ordersId,
        itemId,
        isAdded,
        ingredients) {
        let orders = cartState?.orders
        let prices = []
        if (isAdded) {
            orders = orders.map((order) => {
                if (order.id === ordersId) {
                    order.selected = [
                        ...order.selected, ingredients
                            .find(ingredient => ingredient.id === itemId)];
                    order.selected.forEach((item) => {
                        prices.push(parseFloat(item.price.replace(',', '.')))
                    })

                }
                return order
            })
            const sum = prices.reduce((acc, price) => {
                return (acc + price)
            }, 0)
            const auxOrder = orders.find(order => order.id === ordersId);
            auxOrder.price = (sum + parseFloat(auxOrder.productPrice.replace(',', '.')))
        }

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
    function checkedHandler(position, name) {
        setCheckedState(
            checkedState.map((item, index) =>
                index === position ? item = true : item = false
            )
        )
        setPaymentMethod(name)
    }
    return (
        <Styled.OrdersWrapper>
            <Styled.Header>
                {cartState?.orders.length > 0 ?
                    <h1>Confira seu pedido:</h1> :
                    <h1>Nenhum pedido selecionado</h1>}
            </Styled.Header>
            {cartState?.orders?.map(({
                name,
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
                        <Styled.DeleteConfirmationModal isModalOpen={isModalOpen} cartState >
                            <h1>Tem certeza?</h1>
                            <button onClick={() => handleOrderDelete(id, index)} >
                                Sim
                            </button >
                            <button onClick={() => setModalOpen(!isModalOpen)} >
                                Não
                            </button >
                        </Styled.DeleteConfirmationModal>
                        <Styled.ClosingOrderModal isClosingModalOpen={isClosingModalOpen} isDelivery={isDelivery}>
                            <span id='close-btn' onClick={() => { setClosingModalOpen(false) }}><IoClose /></span>
                            <h2>Preencha seus dados</h2>
                            <form>
                                <span style={{ marginBottom: 30, marginTop:30 }}>
                                    Marque essa opção caso deseje que o lanche seja entregue na sua casa (<i>taxa de entrega:</i> R$2,50)
                                    <input
                                        type="checkbox"
                                        name="entrega"
                                        onClick={() => setIsDelivery(!isDelivery)}
                                    />
                                </span>

                                <div id='endereco'>
                                    <label>Informe o endereço para entrega:</label>
                                    <input
                                        type="text"
                                        value={costumerData.address}
                                        name="endereço"
                                        onChange={(e) =>
                                            setCostumerData(
                                                { ...costumerData, address: e.target.value })}
                                    />
                                </div>
                                <label style={{ marginTop: 30 }}>Forma de pagamento</label>
                                {
                                    paymentMethods.map((item, index) => {
                                        return (
                                            <div>
                                                {item}
                                                <input
                                                    type="checkbox"
                                                    checked={checkedState[index]}
                                                    onChange={() => checkedHandler(index, item)}
                                                />
                                            </div>
                                        )
                                    })}

                            </form>
                            {cartState?.orders.length > 0 ?
                                <ReactWhatsapp number="55-32-999150802" message={     //string only
                                    WhatsAppOrder(
                                        isDelivery,
                                        paymentMethod,
                                        cartState,
                                        costumerData,
                                        cartValue)
                                }>
                                    Fechar pedido
                                </ReactWhatsapp>
                                : ""}
                        </Styled.ClosingOrderModal>
                        <Styled.Card key={id}>
                            <Styled.CardContainer>
                                <Styled.OrderHeader>
                                    <div><h1>{name} {productPrice}</h1> </div>
                                </Styled.OrderHeader>
                                {selected?.length > 0 ?
                                    <div>
                                        <p>Items Extras Selecionados:</p>
                                        <Styled.SelectedIngredients key={id}>
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
                                        </Styled.SelectedIngredients>
                                    </div>
                                    : ""}
                                {selected?.length === extraIngredients.length ?
                                    ""
                                    : <div>
                                        <p>Adicionar itens:</p>
                                        <Styled.SelectedIngredients key={id}>
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
                                        </Styled.SelectedIngredients>
                                    </div>}
                            </Styled.CardContainer>
                            <Styled.OrderBody>
                                <div>
                                    <h1>{quantity}</h1>
                                    <h1>R$: {String(price.toFixed(2)).replace('.', ',')}</h1>
                                    {/* <MdAdd color="#05fc2a" onClick={() => handleOrderChange(true)} /> */}
                                    <h2>Remover</h2>
                                    <MdRemove onClick={() => setModalOpen(!isModalOpen)} />
                                </div>
                            </Styled.OrderBody>
                        </Styled.Card>
                    </>
                )
            })}
            {cartState.orders.length > 0 ?
                <Styled.ClosingOrder orderDetails>
                    <h1>Valor Total:  R${String(cartValue).replace('.', ',')}</h1>
                    <button onClick={() => setClosingModalOpen(!isClosingModalOpen)}>Fechar pedido</button>
                </Styled.ClosingOrder>
                : ""}
        </Styled.OrdersWrapper >
    )
}

export default Cart

