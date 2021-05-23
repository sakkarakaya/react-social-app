import React from 'react'
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils'

const useStyles = makeStyles({
    wrapper: {
        marginTop: "3rem"
    }
})
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            firebase.login(values.email, values.password)
        },
    });
    const classes = useStyles()
    return (
        <Container className={classes.wrapper} maxWidth="xs">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <p> Login </p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email Address"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>                    
                </Grid>
            </form>
        </Container>
    )
}

export default Login
