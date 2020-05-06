import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";


const Cards = ({data}) => {
    console.log(data);
    return (
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
              <Typography variant="h5">Data</Typography>
              <Typography color="textSecondary">Date</Typography>
              <Typography variant="body2">Number of active cases</Typography>
            </CardContent>
            </Grid>
            <Grid item component={Card}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography variant="h5">Data</Typography>
              <Typography color="textSecondary">Date</Typography>
              <Typography variant="body2">Number of Recovered cases</Typography>
            </CardContent>
            </Grid>
            <Grid item component={Card}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography variant="h5">Data</Typography>
              <Typography color="textSecondary">Date</Typography>
              <Typography variant="body2">Number of Deaths cases</Typography>
            </CardContent>
            </Grid>
          </Grid>
        </div>
       
    )
}
export default Cards;