import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import './Cards.module.css';
function Cards(props) {
    console.log(props);
    return (
        <div className="container">
            <Grid justify="center" container spacing={3}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Real Data</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
