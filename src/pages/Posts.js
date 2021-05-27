import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PostCard from '../components/PostCard'

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = process.env.REACT_APP_DUMMYAPI_TOKEN;

const useStyles = makeStyles({
    wrapper: {
        marginTop: "3rem",
        textAlign: "center"
    },
    circular: {
        margin: "auto"
    }
})

const Home = () => {
    const data = useLocation()
    const selected_id = data.state.id
    const [loading, setLoading] = useState(false);
    const [datalist, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user/${selected_id}/post`, { headers: { 'app-id': APP_ID } })
            .then((res) => setData(res.data.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    const classes = useStyles()
    console.log("postss", datalist)
    return (
        <Container className={classes.wrapper}>
            <Grid container spacing={3}>
                {loading && <CircularProgress className={classes.circular}/>}
                {datalist?.map((e) => {
                    return (
                        <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                            <PostCard data={e} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Home
