import React from 'react'
import styled from 'styled-components'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
const StyledIcons = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
svg{
    margin-right: 7px;
}
`



function SocialIcons() {
    return (
        <StyledIcons>
            <FiFacebook />
            <FiInstagram />
            <FaWhatsapp/>
        </StyledIcons>
    )
}

export default SocialIcons