import React from 'react'
import styled from 'styled-components'
import SocialIcons from '../socialIcons/SocialIcons'
import Logo from '../logo/Logo'
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


const StyledNavBar = styled.div`
background: #951c04;   
color: black;
height: 100px;
weight: 100%;
display: flex;
justify-content: space-between;
padding: 0 10% 0 10%;
border-top: 15px solid #dd2e44;
border-bottom: 3px solid #dd2e44;
`
const LogoLink = styled(Link)`
weight:100%;
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
const StyledSocialbar = styled.div`
weight:100%;
height: 35px;
background: #1048f3;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px 0 20px;

p{
    font-size:25px;
    margin-right:10px;
}
`



const StyledLink = styled(Link)`
display: flex;
align-items: center;
cursor: pointer;
text-decoration: none;
font-size:40px;
color: #ffcc4d;
text-shadow: 2px 2px #ff0000;
font-family: ${({theme})=> theme.fonts.navLink};
`

function NavBar() {
    return (

        <IconContext.Provider value={{ size: '30px' }}>
            <StyledSocialbar>
                <p>tel: (32) 99915-0802</p>
                <SocialIcons />
            </StyledSocialbar>
            <LogoLink to='/'>
                <Logo />
            </LogoLink>
            <StyledNavBar>
                <StyledLink to={"/cardapio"}>
                    Cardápio
                </StyledLink>
                <StyledLink to={"/products"}>
                   Faça seu pedido!
                </StyledLink>    

            </StyledNavBar>



        </IconContext.Provider>

    )
}

export default NavBar