import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';




const StyledModalContainer = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, .8);   
position: fixed;
display: flex;
justify-content: center;
align-items: center;
visibility: ${({ modalIsOpen }) => modalIsOpen ? 'visible' : 'hidden'};
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



function ProductModal({ modalIsOpen }) {
    return (
        <IconContext.Provider value={{ size: '40px', color: 'red' }}>
            <StyledModalContainer modalIsOpen={modalIsOpen}>
                <StyledProductModal modalIsOpen={modalIsOpen} >
                    < ProductDetails>
                        

                    </ProductDetails>
                </StyledProductModal>
            </StyledModalContainer>
        </IconContext.Provider>
    )
}

export default ProductModal