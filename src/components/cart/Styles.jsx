import styled from 'styled-components'

export const Header = styled.div`
font-size: 1.5em;
margin: 1em;
color: #c4c4c2;
text-shadow: 1px 1px #a3223c;
@media (max-width: 768px){
    font-size: 1em;
}
`
export const OrdersWrapper = styled.div`
padding: 2em;
/* background-image: url("images/23657229.jpg"); */
background: #27292e;
min-height: 100vh;
font-family: ${({ theme }) => theme.fonts.default};
display: flex;
flex-direction: column;
align-items: center;
`
export const Card = styled.div`
width: 80vw;
margin: 0.8em;
display: grid;
grid-template-columns: 5fr 2fr;
background: rgba(0, 0, 0, .4);
box-shadow: 0 0 4px black;
border-radius: 5px;

`
export const CardContainer = styled.div`
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
export const OrderHeader = styled.div`
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
export const SelectedIngredients = styled.div`
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
export const OrderBody = styled.div`
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
export const ClosingOrder = styled.div`
color: white;
display: flex;
flex-direction: column;
button{
    background: blue;
    color: white;
    border-radius: 3px;
    height: 40px;
    cursor: pointer;
}
`
export const DeleteConfirmationModal = styled.div`
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
height: 45%;
width: 50%;
position: fixed;
display: flex;
background: #5e7e7e;
color: white;

button{
    color: red;
    height: 35px;
    width: 40%;
}
`
export const ClosingOrderModal = styled.div`
visibility: ${({ isClosingModalOpen }) => isClosingModalOpen ? 'visible' : 'hidden'};
min-height: 45%;
min-width: 40%;
padding: 20px;
border-radius: 10px;
position: fixed;
background: #27514a;
color: white;
display: flex;
flex-direction: column;
align-items: center;
z-index: 10;
form{
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
}
#formInput{
color:white;
margin: auto;
background: #6f6969;
display: block;
margin-top: 60px;
width: 100%;
}

label {
  display: block;
  width: 200px;
  margin-top: 5px;
}
#close-btn{
    align-self: end;
    cursor: pointer;
}
#endereco{
    visibility: ${({ isDelivery }) => isDelivery ? 'visible' : 'hidden'};
}
`

