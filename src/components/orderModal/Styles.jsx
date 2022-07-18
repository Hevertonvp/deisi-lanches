import styled from 'styled-components'


export const ModalContainer = styled.div`
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
export const ProductModal = styled.div`
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
export const Image = styled.img`

height: 150px;
width: 180px;
margin: 20px;
border-radius: 5px;
border: solid 1px grey;

`
export const Header = styled.div`
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
    margin-left: 10px;

}
span{
    display: flex;
    align-items: center;

}
`
export const Button = styled.button`
background: #173828;
cursor: pointer;
color: white;
border: none;
border-radius: 5px;
width: 20em;
height: 3em;
`
export const ExtraIngredients = styled.div`
display: column;

`
export const Body = styled.div`

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
export const ProductDetails = styled.div`
width: 98%;
height:70%;
h2{
    font-family: ${({ theme }) => theme.fonts.default};
    color: #0f6138;
    margin-left: 15px;
}

`
export const Footer = styled.div`
display: flex;
justify-content: center;
text-align: center;
h2{
    margin-left: 0;
}
`
