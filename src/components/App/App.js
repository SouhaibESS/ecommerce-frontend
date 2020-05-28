import React  from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { Home } from '../Home/Home'
import Product from '../Product/Product'
import Dashboard from '../Dashboard/Dashboard'
import Team from '../elements/Team'
import LoginForm from '../elements/LoginForm'
import NoMatch from '../elements/NoMatch'
import './App.css'

const App = () => {
    return(
        <div className='App'>
            <Router>
                <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/products/:productId'  component={Product}/>
                        <Route path='/team' component={Team} exact />
                        <Route path='/login' component={LoginForm} exact />
                        <Route path='/dashboard' component={Dashboard} exact />
                        <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    )
}

export default App