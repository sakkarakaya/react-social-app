import React, { useContext } from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Detail from './pages/Detail'
import Posts from './pages/Posts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { FirebaseAuthContext } from './context/AuthContext'

const AppRouter = () => {
    const { currentUser } = useContext(FirebaseAuthContext);
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/register" component={SignUp}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/detail/:id" component={currentUser ? Detail : Login}/>
                <Route exact path="/detail/:id/posts" component={Posts}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
