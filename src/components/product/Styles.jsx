import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const ProductCard = styled(Link)`
color: white;
text-shadow: 4px 2px black;
font-family: ${({ theme }) => theme.fonts.default};
text-decoration: none;
width: 21em;
height: 25em;
border-radius: 20px;
display: flex;
align-items: center;
flex-direction: column;
padding: 0.7em;

background-image:
  radial-gradient(circle, #2c090d 20%, rgba(0,0,255,0.5) 190%, transparent),
  url('/images/backgroundburger.png');
;
;

box-shadow: inset 1em 30px #300057;
h1{ 
    font-size: 40px;
    text-align: center;
    margin-bottom: 25px;
}
img{
    
    border: 1px ridge #dd2e44;
    border-radius: 10px 10px 0 0;
    width: 20em;
    height: 12em;
}
`

export const ProductContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-size: 30px;
background: #dd2e44;
span {
 text-shadow: 2px 1px #2c090d;
}

border-radius:  0 0 10px 10px;
`