import axios from "axios";

const url = "https://covid19.mathdro.id/api";


// Fetch All Data
export const fetchData = async (country) => {
    let changeableurl = url;
    if(country){
       changeableurl = `${url}/countries/${country}`
    }
    try {
        const {data : {recovered,confirmed,deaths,lastUpdate}} = await axios.get(changeableurl);
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


//Fetch Daily Data
export const fetchDailyData  = async () => {
try {
    const {data} = await axios.get(`${url}/daily`);
    const modifieddata = data.map((dailydata)=>({
        confirmed: dailydata.confirmed.total,
        deaths: dailydata.deaths.total,
        date: dailydata.reportDate
    }));
    
    return modifieddata;
    
} catch (err) {
    if(err){
        console.log(err);
    }
}
}

//Fetch countries

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);
        }
    catch (err) {
        if(err){
            console.log(err);
        }
    }
}