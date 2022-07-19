import { IoClose } from 'react-icons/io5'
import { MdAdd, MdRemove } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconContext } from 'react-icons/lib';
import { useContext, useEffect, useState } from 'react'
import ProductContext from '../../context/productContext'
import { v4 as uuidv4 } from 'uuid';
import useCart from '../../hooks/useCart/useCart';
import { UPDATE_ORDERS } from '../../context/reducers/cartReducer';
import * as Styled from './Styles'


function ProductModal() {

    //context
    const contextProduct = useContext(ProductContext)
    const { cartState, updateCart } = useCart()
    const { isModalOpen,
        extraIngredients,
        setModalOpen
    } = contextProduct;
    const { product: {
        id,
        name,
        ingredients,
        description,
        imgUrl,
        price }
    } = contextProduct;


    //state
    const [ordersValue, setOrdersValue] = useState("");
    const [checkedState, setCheckedState] = useState({});
    const [productQuantity, setProductQuantity] = useState(1)


    

    const floatPrice = parseFloat(price?.replace(',', '.'))
    const quantityPrice = (floatPrice * productQuantity)




    useEffect(() => {
        let initialChecked = extraIngredients.map(e => [e.id, false])
        setCheckedState(
            Object.fromEntries(initialChecked)
        )
        setOrdersValue(price)

    }, [extraIngredients, price, setCheckedState])

    // function toastMessage(message) {
    //     toast.success(message, {
    //         draggable: false,
    //         position: toast.POSITION.TOP_LEFT,
    //         autoClose: 1500
    //     })
    // }

    function addOrder() {


        // toastMessage('Adicionado com sucesso!')
        const selected = extraIngredients.filter((x) => x.isSelected === true)
        const exist = cartState.orders.find((o) => o.id === id)  // objeto com id do produto atual

        if (exist && extraIngredients.length === 0) {
            console.log(exist.price, quantityPrice)
            updateCart(
                UPDATE_ORDERS, {
                orders: cartState.orders.map((item) => {
                    return item.id === id ? {
                        ...exist,
                        quantity: exist.quantity + productQuantity,
                        price: parseFloat(exist.price)
                            + parseFloat(quantityPrice)
                    } : item
                })
            }
            )
        }
        else {
            updateCart(
                UPDATE_ORDERS, {
                orders: [...cartState.orders, {
                    selected,
                    extraIngredients,
                    id: extraIngredients.length === 0 ? id : uuidv4(), // get id from DB if you are a drink.
                    quantity: productQuantity,
                    name,
                    productPrice: price,
                    price: extraIngredients.length > 0 ?
                        parseFloat(ordersValue.replace(',', '.')) : quantityPrice  // is it drink our food?
                }]
            }
            )
        }
    }

    function handleOnChange(id) {

        const currentValue = !checkedState[id]
        const updatedState = { ...checkedState, [id]: currentValue }
        setCheckedState(updatedState);

        extraIngredients.forEach((ingredient) => {
            ingredient.isSelected = updatedState[ingredient.id]
        })

        let extraPrice = 0
        extraIngredients.forEach((ingredient) => {
            if (updatedState[ingredient.id]) {
                extraPrice += parseFloat(ingredient.price.replace(',', '.'))
            }
        })
        const totalPrice = parseFloat(price.replace(',', '.')) + extraPrice
        setOrdersValue(totalPrice.toFixed(2).replace('.', ','));
    }
    function handleQuantityChange(isAdded) {
        setProductQuantity(
            isAdded ? productQuantity + 1 : productQuantity > 0 ? productQuantity - 1 : 0
        )
    }
    function clearOrder() {
        setProductQuantity(1)
        setModalOpen(false)
    }
    return (

        <IconContext.Provider value={{ size: '50px', color: '#dd2e44' }}>
            <ToastContainer />
            <Styled.ModalContainer isModalOpen={isModalOpen}>
                <Styled.ProductModal >
                    <Styled.ProductDetails>
                        <Styled.Header>
                            <Styled.Image src={isModalOpen ? imgUrl : ''} alt="" />
                            <div>
                                <span>
                                    <h1>{isModalOpen ? name.toUpperCase() : ''}</h1>
                                    <h2>R$ {price}</h2>
                                </span>
                                <h3>{isModalOpen ? ingredients?.map(ingredient => {
                                    const str = ingredient.name;
                                    return str[0].toUpperCase() + str.substr(1);
                                }).reduce((prev, curr) => [prev, ', ', curr]) : ""}</h3>
                            </div>
                        </Styled.Header>
                        <p>{isModalOpen ? description : ''}</p>
                        <h2>{extraIngredients.length > 0 ? 'Adicionais:' : `Quantidade: ${productQuantity}`}</h2>
                        <Styled.Body>
                            {
                                extraIngredients.length > 0 ?
                                    extraIngredients?.map(({ name, price, id }, index) => {
                                        const str = name;
                                        return (
                                            <Styled.ExtraIngredients key={index}>
                                                <h4>{`${str[0].toUpperCase() + str.substr(1)} (R$ ${price})`}</h4>
                                                <input
                                                    id={id}
                                                    type="checkbox"
                                                    name={name}
                                                    value={checkedState[id]}
                                                    checked={checkedState[id]}
                                                    onChange={() => handleOnChange(id)}
                                                />
                                            </Styled.ExtraIngredients>)
                                    })
                                    :
                                    <Styled.ExtraIngredients>
                                        <MdAdd color="green" onClick={() => handleQuantityChange(true, price)} />
                                        <MdRemove onClick={() => handleQuantityChange(false, price)} />
                                    </Styled.ExtraIngredients>
                            }

                        </Styled.Body>
                        <Styled.Footer>
                            <div>
                                <h2>R$ {extraIngredients.length > 0 ? ordersValue : String(quantityPrice.toFixed(2)).replace('.', ',')}</h2>
                                <Styled.Button onClick={() => addOrder()}> Adicionar ao carrinho</Styled.Button>
                            </div>
                        </Styled.Footer>
                    </Styled.ProductDetails>
                    <IoClose onClick={() => clearOrder()} /> {/*  change it to a function that cleans the orders state and close de modal */}
                </Styled.ProductModal>
            </Styled.ModalContainer>
        </IconContext.Provider >
    )
}

export default ProductModal