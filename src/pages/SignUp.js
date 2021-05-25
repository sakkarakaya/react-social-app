import React from 'react'
import { Button, TextField, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    displayName: Yup.string()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
    .min(8, 'Min. 8 character')
    .required('Password required'),
    confirm_password: Yup.string()
    .required()
    .oneOf(
    [Yup.ref('password'), null],
     'Passwords must match')
});
const useStyles = makeStyles({
    wrapper: {
        marginTop: "3rem",
        textAlign: "center"
    }
})
const SignUp = () => {
    const { handleChange, values, handleSubmit, errors} = useFormik({
        initialValues: {
            displayName: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            firebase.register(values.displayName, values.email, values.password)
        },
    });
    const classes = useStyles()
    const clickGoogle = () => {
        firebase.signwithGoogle()
    }
    return (
        <Container className={classes.wrapper} maxWidth="xs">
                <Typography variant="h5">Register</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                error={errors.displayName}
                                id="displayName"
                                label="Username"
                                variant="outlined"
                                defaultValue="Hello World"
                                helperText={errors.displayName}
                                value={values.displayName}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Email Address"
                                variant="outlined"
                                value={values.email}
                                error={errors.email}
                                helperText={errors.email}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={values.password}
                                error={errors.password}
                                helperText={errors.password}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                       
                        <Grid item xs={12}>
                            <TextField
                                id="confirm_password"
                                label="Password again"
                                type="password"
                                variant="outlined"
                                value={values.confirm_password}
                                error={errors.confirm_password}
                                helperText={errors.confirm_password}
                                onChange={handleChange}
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
                                Sign Up
                </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={clickGoogle}
                            >
                                Sign Up with Google
                </Button>
                        </Grid>
                    </Grid>
                </form>
            
        </Container>
    )
}

export default SignUp
