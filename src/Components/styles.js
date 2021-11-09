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
    background: rgb(98, 0, 255);
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
    background: rgb(130, 0, 255);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
`