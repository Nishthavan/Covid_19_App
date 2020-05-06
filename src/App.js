import React from "react"
import {Charts,Cards,CountryPicker} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import Corona from "./images/image.png";

class App extends React.Component {
 
        state = {
            data: {},
            country: "",
        }
    
   async componentDidMount(){
        const data = await fetchData();
        this.setState({data});
    }

    countryChange = async(country) => {
        const data = await fetchData(country);
        this.setState({data,country});
    }
    
    render(){
        const {data,country} = this.state; 
        return(
            <div className={styles.container}>
            <img src={Corona} className={styles.image} alt="COVID-19"/>
            <Cards data={data}/>
            <CountryPicker countryChange={this.countryChange}/>
            <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App;