import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body { 
  background: ${({theme})=> theme.colors.body};
  color: ${({ theme }) => theme.text};
  font-size: 1,5em;
  margin: 0;
  transition: all 0.50s linear;
}

p{
  opacity: 0.6;
  line-height: 1.5
}

img{
  max-width: 100%
}

`;

export default GlobalStyles