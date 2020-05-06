import React, {useState,useEffect} from "react";
import {fetchDailyData} from "../../api";
import {Line,Bar} from "react-chartjs-2";
import styles from "./Charts.module.css";


const Charts = () => {

    const [DailyData,setDailyData] = useState([]);

    useEffect(() => {
        const DailyApi = async () => {
            setDailyData(await fetchDailyData());
        }
      
        DailyApi();
    },[]);

    const lineChart =  (
        DailyData.length
         ? (
        <Line
          data={{
            labels: DailyData.map(({date})=>date),
            datasets: [{
                data: DailyData.map(({confirmed})=> confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
            },{
                data: DailyData.map(({deaths})=> deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.5)",
                fill: true,
            }]
          }}
         />
        ) : null
    );

    return (
        <div className={styles.container}>
        {lineChart}
        </div>
    )
}
export default Charts;