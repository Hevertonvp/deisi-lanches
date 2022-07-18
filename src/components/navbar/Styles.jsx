import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const NavBar = styled.nav`
background: #951c04;   
margin-top: 30px;
height: 100px;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px 10% 0 10%;
border-top: 15px solid #dd2e44;
border-bottom: 3px solid #dd2e44;

`
export const LogoLink = styled(Link)`
width:100%;
height: 5px;
background: #1048f3;
color: white;
display: flex;
justify-content: center;
align-items: center;
input{
    margin-right: 5px;
}
svg{
    margin-top: 1px;
}
`
export const Socialbar = styled.div`

width:100%;
height: 60px;
background:#080338;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px 0 20px;
position: fixed;
p{
    font-size:25px;
    margin-right:10px;
}
z-index: 2;
`


export const NavLink = styled(Link)`
display: flex;
align-items: center;
cursor: pointer;
text-decoration: none;
font-size:40px;
color: white;
text-shadow: 2px 2px black;
font-family: ${({ theme }) => theme.fonts.default};
@media (max-width: 768px){
    font-size: 1.5em;
}
`
