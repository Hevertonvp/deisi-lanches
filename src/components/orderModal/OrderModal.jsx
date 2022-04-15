import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';
import { useEffect, useState, useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'



const StyledModalContainer = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, .8);   
color: white;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
z-index: 2;
`




const StyledProductModal = styled.div`

background: lightgrey;
width: 80%;
height: 80%;
display: flex;
svg{
margin-left: auto;
cursor: pointer;
}
`

const ProductDetails = styled.div`

background: black;
width: 70%;
height:70%
`




function ProductModal() {


    const [isModalOpen, setModalOpen] = useState(true);

    const newOrder = useContext(OrderContext)

    useEffect(() => {

        setModalOpen(!isModalOpen)

    }, [newOrder.order])


    return (
        <IconContext.Provider value={{ size: '40px', color: 'red' }}>
            <StyledModalContainer isModalOpen={isModalOpen}>
                <StyledProductModal >
                    < ProductDetails>
                        <h1>{newOrder.order.name}</h1>
                    </ProductDetails>
                    <IoClose onClick={() => setModalOpen(false)} />
                </StyledProductModal>

            </StyledModalContainer>
        </IconContext.Provider>
    )
}

export default ProductModal