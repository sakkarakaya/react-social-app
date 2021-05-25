import React from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/register" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
