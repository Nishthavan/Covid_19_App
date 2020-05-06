import React,{useEffect,useState} from "react";
import {NativeSelect,FormControl} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "../../api";

const CountryPicker = ({countryChange}) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchCountry = async() => {
         setFetchedCountries(await fetchCountries());
        }
       fetchCountry();

    },[setFetchedCountries]);
    
    return (
       <FormControl className={styles.formcontrol}>
           <NativeSelect defaultValue="" onChange={((e)=>countryChange(e.target.value))}>
               <option value="">Global</option>
               {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;