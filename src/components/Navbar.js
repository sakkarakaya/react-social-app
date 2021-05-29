import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useHistory } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/AuthContext'
import firebase from '../firebase/firebase.utils'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer"
  },
}));

export default function Navbar() {
  const { currentUser } = useContext(FirebaseAuthContext);

  const classes = useStyles();
  const history = useHistory();
  const loginClick = () => history.push('/login');
  const registerClick = () => history.push('/register');
  const homeClick = () => history.push('/');
  const signOutClick = () => {
    firebase.signOut()
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography onClick={homeClick} variant="h6" className={classes.title}>
            My React App
          </Typography>
          {currentUser && (
            <>
              <Button color="inherit">{currentUser.email}</Button>
              <Button onClick={signOutClick} color="inherit">Sign Out</Button>
            </>
          )}
          {!currentUser && (
            <>
              <Button onClick={loginClick} color="inherit">Login</Button>
              <Button onClick={registerClick} color="inherit">Register</Button>
            </>
          )}


        </Toolbar>
      </AppBar>
    </div>
  );
}