import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconContext } from 'react-icons/lib';
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import ProductContext from '../../context/ProductContext'
import { v4 as uuidv4 } from 'uuid';



const StyledModalContainer = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, .8);   
position: fixed;
display: flex;
justify-content: center;
align-items: center;
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
z-index: 1;
`
const StyledProductModal = styled.div`
display: flex;
padding: 30px;
background: #f5f5f5;
width: 80%;
height: 80%;
svg{   
cursor: pointer;
}
overflow: scroll;
`
const Image = styled.img`

height: 150px;
width: 180px;
margin: 20px;
border-radius: 5px;
border: solid 1px grey;

`
const StyledHeader = styled.div`
display: flex;
border: 1px solid;
background: #fff;
border-radius: 3px;
h1{
    font-family: ${({ theme }) => theme.fonts.default};
    color: #dd2e44;
    font-size: 50px;
    text-shadow: 1px 1px #525040; 
    
}
h3{
    font-family: ${({ theme }) => theme.fonts.default};
    color:;
    
    margin-left: 10px;
    
}
span{
    display: flex;
    align-items: center;
    
}
`
const Button = styled.button`
background: #173828;
cursor: pointer;
color: white;
border: none;
border-radius: 5px;
width: 20em;
height: 3em;
`
const ExtraIngredients = styled.div`
display: column;

`
const StyledBody = styled.div`

padding: 10px;
border: 1px solid;
background: #fff;
border-radius: 3px;

h4{
    margin: 0;
    color: #173828;
    font-family: ${({ theme }) => theme.fonts.infoText};

}

svg{
    width: 25px;
}
div{
 display: flex;
 align-items: center;
 height: 30px;
}

`
const ProductDetails = styled.div`
width: 98%;
height:70%;
h2{
    font-family: ${({ theme }) => theme.fonts.default};
    color: #0f6138;
    margin-left: 15px;   
}

`
const Footer = styled.div`
display: flex;
justify-content: center;
text-align: center;
h2{
    margin-left: 0;
}
`


function ProductModal() {


    //context
    const newProduct = useContext(ProductContext)
    const newCart = useContext(CartContext)
    const { isModalOpen, extraIngredients, setExtraIngredients, setModalOpen } = newProduct;
    const { product: { name, ingredients, description, imgUrl, price, id } } = newProduct;
    const { setOrder, order, checkedState, setCheckedState, setSelectedIngredients, selectedIngredients } = newCart;
    //state
    const [orderValue, setOrderValue] = useState("");


    useEffect(() => {
        setCheckedState(new Array(extraIngredients.length).fill(false))
        // this method is throwing a warning rendering the first time: 'it changes a uncontrolled 
        // state to controled because of the 'fill method'. Must think a better way to do this'
        setOrderValue(price)
    }, [extraIngredients, price, setCheckedState])


    function toastMessage(message) {
        toast.success(message, {
            draggable: false,
            position: toast.POSITION.TOP_LEFT,
            autoClose: 1500
        })
    }

    function addOrder() {

        checkedState.map((state, i) => {
            if (state) {
                return extraIngredients[i].isSelected = true
            }

        })
        toastMessage('Adicionado com sucesso!')

        const exist = order.find(x => x.id === id)

        if (exist) {
            setOrder(
                order.map((item) =>
                    item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
                )
            )
        }
        else {
            setOrder([...order, {
                id: uuidv4(),
                quantity: 1,
                name: name,
                price: orderValue,
                extraIngredients,
            }])
        }
    }

    function cleanChecked() {
        setCheckedState(new Array(extraIngredients.length).fill(false))
        setModalOpen(false)
    }

    function handleOnChange(position) {

        const updatedState = checkedState.map((item, index) =>
            index === position ? !item : item

        );
        setCheckedState(updatedState);

        const totalPrice = updatedState.reduce((previousValue, currentValue, index) => {
            const floatIngredientsPrice = parseFloat(extraIngredients[index].price.replace(',', '.'));
            const floatPreviousValue = parseFloat(previousValue);
            if (currentValue) {
                return floatPreviousValue + floatIngredientsPrice
            }
            return floatPreviousValue
        }, parseFloat(price.replace(',', '.')));

        setOrderValue(totalPrice.toFixed(2).replace('.', ','));

    }
    return (

        <IconContext.Provider value={{ size: '50px', color: '#dd2e44' }}>
            <ToastContainer />

            <StyledModalContainer isModalOpen={isModalOpen}>
                <StyledProductModal >
                    <ProductDetails>

                        <StyledHeader>

                            <Image src={isModalOpen ? imgUrl : ''} alt="" />
                            <div>
                                <span>
                                    <h1>{isModalOpen ? name.toUpperCase() : ''}</h1>
                                    <h2>R$ {price}</h2>
                                </span>
                                <h3>{isModalOpen ? ingredients.map(ingredient => {
                                    const str = ingredient.name;
                                    return str[0].toUpperCase() + str.substr(1);
                                }).reduce((prev, curr) => [prev, ', ', curr]) : ""}</h3>
                            </div>
                        </StyledHeader>

                        <p>{isModalOpen ? description : ''}</p>

                        <h2>Adicionais:</h2>

                        <StyledBody>

                            {extraIngredients?.map(({ name, price }, index) => {
                                const str = name;

                                return (

                                    <ExtraIngredients key={index}>
                                        <h4>{`${str[0].toUpperCase() + str.substr(1)} (R$ ${price})`}</h4>
                                        <input
                                            id={index}
                                            type="checkbox"
                                            name={name}
                                            value={name}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChange(index)}
                                        />
                                    </ExtraIngredients>)
                            })}

                        </StyledBody>

                        <Footer>

                            <div>

                                <h2>R$ {orderValue}</h2>
                                <Button onClick={() => addOrder()}> Adicionar ao carrinho</Button>
                            </div>
                        </Footer>
                    </ProductDetails>
                    <IoClose onClick={cleanChecked} /> {/*  change it to a function that cleans the order state and close de modal */}
                </StyledProductModal>
            </StyledModalContainer>
        </IconContext.Provider >
    )
}

export default ProductModal