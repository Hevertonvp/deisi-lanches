import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 150px;
  width: 180px;
  border-radius: 50px;
  margin-top: 150px;
  z-index: 3;
`;

function Logo() {
  return <StyledLogo src="/images/deisiLogo.png" />;
}

export default Logo;
