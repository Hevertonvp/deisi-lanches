import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';
import { useContext, useEffect, useState } from 'react'
import OrderContext from '../../context/OrderContext'
import ProductContext from '../../context/ProductContext'




const StyledModalContainer = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, .8);   
position: fixed;
display: flex;
justify-content: center;
align-items: center;
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
z-index: 120;
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
    const newOrder = useContext(OrderContext)
    const { isModalOpen, extraIngredients, setModalOpen } = newProduct;
    const { product: { name, ingredients, description, imgUrl, price } } = newProduct;
    const { order, setOrder } = newOrder;

    //

    const [checkedState, setCheckedState] = useState([]);
    const [orderValue, setOrderValue] = useState("");


    useEffect(() => {
        setCheckedState(new Array(extraIngredients.length).fill(false))
        // this method is throwing a warning rendering the first time: 'it changes a uncontrolled 
        // state to controled because of the fill method, i guess. Is there a better way to do it?'
        setOrderValue(price)
    }, [extraIngredients, price])


    function cleanOrder() {
        setCheckedState(new Array(extraIngredients.length).fill(false))
        setOrder([])
        setModalOpen(false)
    }



    function handleOnChange(position) {


        const updatedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedState);

        const totalPrice = updatedState.reduce((previousValue, currentValue, index) => {
            const floatPrice = parseFloat(extraIngredients[index].price.replace(',', '.'));
            const floatValue = parseFloat(previousValue);
            if (currentValue) {
                return floatValue + floatPrice
            }
            return floatValue
        }, parseFloat(price.replace(',', '.')));

        setOrderValue(totalPrice.toFixed(2).replace('.', ','));
    }


    return (
        <IconContext.Provider value={{ size: '50px', color: '#dd2e44' }}>
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
                                <Button>Adicionar ao carrinho</Button>
                            </div>
                        </Footer>
                    </ProductDetails>
                    <IoClose onClick={() => cleanOrder()} /> {/*  change it to a function that cleans the order state and close de modal */}
                </StyledProductModal>
            </StyledModalContainer>
        </IconContext.Provider >
    )
}

export default ProductModal