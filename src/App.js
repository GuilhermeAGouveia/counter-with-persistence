import React from "react"
import GlobalStyle from "./globalStyle"
import CounterCC from "./Components/CounterClassComponent"
import CounterFC from "./Components/CounterFuncComponent"


function App() {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <CounterCC idItem={"obj01"}/>
            <CounterFC idItem={"obj02"}/>
        </React.Fragment>
        
    )
}
export default App