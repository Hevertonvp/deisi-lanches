import React from 'react'
import styled from "styled-components"


const Container = styled.div`

span{
position: absolute;
cursor: pointer;
width: 80px;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
transition: 4s;
border-radius: 34px;
::before{
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    transition: 1s;
    border-radius: 50px;
}

}

input:checked + span {
    background-color: #ff278c;
}
input:checked + span:before{
    transform: translateX(50px);
}


label{ 
position: relative;
display: inline-block;
width: 60px;
height: 30px;
margin: 0 10px;
}
input{
    display: none;
}
`
// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size:0.8rem;
//   padding: 0.6rem;

// `

// span: slider, label: switch, 

export function ToggleButton({ themeToggler }) {
    return (
        <Container>
            <label>
                <input
                    type="checkbox"
                    onClick={themeToggler} >
                </input>
                <span>

                </span>
            </label>
        </Container>
    );
};

