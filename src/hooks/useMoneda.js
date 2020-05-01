import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas neue', cursive;
    color: #FFF;
    text-tranform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;


const Select = styled.select `
    width: 100%;
    display: block;
    padding: 0.8rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">Seleccione</option>
                {opciones.map(opcion =>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica nuestro state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;

//Son los valores que retorna la funcoon de useState
// y lo retorna en orden de [state, funcion modificadore del state]
//const [moneda, guardarMoneda] = useState();