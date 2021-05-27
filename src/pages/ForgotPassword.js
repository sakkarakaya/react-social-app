import React from 'react'
import { Button, TextField, Grid, Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils'

const useStyles = makeStyles({
    wrapper: {
        marginTop: "3rem",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: "1rem"
    }
})
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            firebase.forgotPassword(values.email)
        },
    });
    const classes = useStyles()
    return (
        <Container className={classes.wrapper} maxWidth="xs">
            <Typography component="h1" variant="h5">
                Reset Password
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                    
                </Grid>
            </form>
        </Container>
    )
}

export default Login
