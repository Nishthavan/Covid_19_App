import React, {useState,useEffect} from "react";
import {fetchDailyData} from "../../api";
import {Line,Bar} from "react-chartjs-2";
import styles from "./Charts.module.css";


const Charts = ({data,country}) => {

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

    const barChart = (
        data.confirmed ? (
        <Bar
          data={{
          labels:["Infected","Recovered","Deaths"],
          datasets: [{
              label: "People",
              backgroundColor: [
                  "rgba(0,0,255,0.5)",
                  "rgba(0,255,0,0.5)",
                  "rgba(255,0,0,0.5)",
              ],
              data : [data.confirmed.value,data.recovered.value,data.deaths.value]
          }]
          }}
          options={{
              legend: {display: false},
              title: {display:true, text:`Country State in ${country}`},
          }} 
         />
         ) : null
    )

    return (
        <div className={styles.container}>
        {country ? barChart:lineChart}
        </div>
    )
}
export default Charts;