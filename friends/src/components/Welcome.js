import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core';
import Kitty from '../img/kitteh.png'

const useStyles = makeStyles((theme)=> ({
    formGridItem: {
        margin: '.5em'
    }
}))
export default function Welcome() {
    const classes = useStyles();
    return (
        <>
        <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.formGridItem}>
           <Typography variant="h1">Welcome To The Friend App!</Typography>
           </Grid>
           <img src={Kitty} alt='My drawn Picture' className={classes.pic} />
           </Grid> 
        </>
    )
}
