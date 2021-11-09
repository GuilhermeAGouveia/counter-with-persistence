import React from "react"
import { ButtonReset } from "./styles"

function Button(props){
    return (
        <ButtonReset onClick={props.action}>
            {props.children()}
        </ButtonReset>
    )
}

export default Button;