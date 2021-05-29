import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, TextField, Grid, Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils'
import { FirebaseAuthContext } from '../context/AuthContext'

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
    const { currentUser } = useContext(FirebaseAuthContext);
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            firebase.login(values.email, values.password)
            history.push('/')
        },
    });
    const classes = useStyles()
    return (
        <Container className={classes.wrapper} maxWidth="xs">
            {currentUser && <Typography component="h4">
                You have successfully registered. Please sign in.
            </Typography>}
            <Typography component="h1" variant="h5">
                Sign in
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
                    <Grid container>
                        <Grid item xs>
                            <Link href="/forgot-password" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login
