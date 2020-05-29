import React  from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { isLoggedIn } from '../../utils'

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
                        <Route 
                            path='/' 
                            component={Home} 
                            exact
                        />
                        <Route 
                            path='/products/:productId'  
                            component={Product}
                        />
                        <Route 
                            path='/team' 
                            component={Team} 
                        />
                        <Route 
                            path='/login' 
                            component={LoginForm} 
                        />
                        <Route 
                            path='/dashboard' 
                            render={(props) => {
                                if(isLoggedIn()) 
                                    return <Dashboard {...props} page={'HomeDashboard'} /> 
                                
                                return <Redirect to='/' />
                            }} 
                            exact 
                        />
                        <Route 
                            path='/dashboard/products' 
                            render={(props) => {
                                if(isLoggedIn()) 
                                    return <Dashboard {...props} page={'Products'} /> 
                                
                                return <Redirect to='/' />
                            }} 
                            exact 
                        />
                        <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    )
}

export default App