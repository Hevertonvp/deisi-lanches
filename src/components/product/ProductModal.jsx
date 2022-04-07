import styled from 'styled-components'





const StyledProductModal = styled.div`

background: white;
width: 80%;
height: 80%;

`
const StyledModalContainer = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, .6);    /*  40% opaque green */ 
position: fixed;
display: flex;
justify-content: center;
align-items: center;
visibility: ${({ modalIsOpen }) => modalIsOpen ? 'visible' : 'hidden'};

z-index: 2;
`




function ProductModal({ modalIsOpen, handleCloseModal }) {
    return (
        <StyledModalContainer modalIsOpen={modalIsOpen}>
            <StyledProductModal modalIsOpen={modalIsOpen} >
                <button onClick={handleCloseModal}>Close</button>
            </StyledProductModal>
        </StyledModalContainer>
    )
}

export default ProductModal