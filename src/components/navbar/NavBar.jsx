import React from 'react'
import Logo from '../logo/Logo'
import CartIcon from '../cartIcon/CartIcon';
import { IconContext } from 'react-icons/lib';
import * as Styled from './Styles'

function NavBar() {
    return (

        <IconContext.Provider value={{ size: '50px' }}>
            <Styled.Socialbar>
                <p>tel: (32) 99915-0802</p>
                <CartIcon />
            </Styled.Socialbar>
            <Styled.LogoLink to='/'>
                {/* <Logo /> */}
            </Styled.LogoLink>
            <Styled.NavBar>
                <Styled.NavLink to={"/cardapio"}>
                    Cardápio
                </Styled.NavLink>
                <Styled.NavLink to={"/products"}>
                    Faça seu pedido!
                </Styled.NavLink>
            </Styled.NavBar>
        </IconContext.Provider>

    )
}

export default NavBar