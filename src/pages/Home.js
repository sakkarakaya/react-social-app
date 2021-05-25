import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '../components/Cards'

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = process.env.REACT_APP_DUMMYAPI_TOKEN;

const useStyles = makeStyles({
    wrapper: {
        marginTop: "3rem",
        textAlign: "center"
    }
})

const Home = () => {
    const [datalist, setData] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then((res) => setData(res.data.data))
            .catch(console.error)
    }, []);
    const classes = useStyles()
    console.log("l", datalist)
    return (
        <Container className={classes.wrapper}>
            <Grid container spacing={3}>
                {datalist?.map((e) => {
                    return (
                        <Grid key={e.id} item xs={12} sm={6} md={3}>
                            <Card data={e} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Home
