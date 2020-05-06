import React,{Fragment} from "react"
import {Charts,Cards,CountryPicker} from "./components";

class App extends React.Component {
    render(){
        return(
            <Fragment>
            <Cards />
            <CountryPicker/>
            <Charts/>
            </Fragment>
        )
    }
}

export default App;