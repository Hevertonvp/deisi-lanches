import styled from 'styled-components'

export const ProductsContainer = styled.div`
padding-top: 4em;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
row-gap: 20px;
column-gap: 20px;
font-family: ${({ theme }) => theme.fonts.default};
margin-bottom: 2em;

`

export const ProductHeader = styled.div`
font-family: ${({ theme }) => theme.fonts.default};
background:
  radial-gradient(circle, #2c090d 20%, rgba(0,0,255,0.5) 190%, transparent),
  url('/images/backgroundburger.png');
padding: 10px;
color: white;
text-shadow: 5px 5px black;
text-align: center;
font-size: 2em;
`
