import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async ( ) => {
    try {
        const {data : {recovered,confirmed,deaths,lastUpdate}} = await axios.get(url);
        const modifieddata = {
           recovered,
           confirmed,
           deaths,
           lastUpdate,
        } 
       return modifieddata;
    } catch (err) {
        if(err){
            console.log(err);
        }
    }
}