import React, { useContext } from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Detail from './pages/Detail'
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
                <Route path="/register" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/detail/:id" component={currentUser ? Detail : Login}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
