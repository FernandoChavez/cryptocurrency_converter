import React from 'react';
import styled from "@emotion/styled";

const MnesajeError = styled.p `
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-tranform: uppercase;
    font-weigth: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
    return (
    <MensajeError>{mensaje}</MensajeError>
    );
}

export default Error;