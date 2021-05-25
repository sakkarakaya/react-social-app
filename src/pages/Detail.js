import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = process.env.REACT_APP_DUMMYAPI_TOKEN;

const Detail = () => {
    const data = useLocation()
    const selected_id = data.state.id
    const [datalist, setData] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/user/${selected_id}`, { headers: { 'app-id': APP_ID } })
            .then((res) => setData(res.data))
            .catch(console.error)
    }, [selected_id])
    return (
        <div>
            <p>{datalist.phone}</p>
        </div>
    )
}

export default Detail
