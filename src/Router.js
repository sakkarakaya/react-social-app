import React from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/register" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
