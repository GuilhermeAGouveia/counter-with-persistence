import styled from "styled-components"

export const CounterContainer = styled.div `
    position: relative;
    margin: 10px;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2);
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.bg == null ? "rgb(98, 0, 255)" : props.bg};
    border-radius: 4px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    color: white;
`

export const ButtonReset = styled.button`
    height: 30px;
    width: 30px;
    position: absolute !important;
    right: 0px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
`