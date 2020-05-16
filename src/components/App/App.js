import React  from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import NavBar from '../elements/NavBar'
import { Home } from '../Home/Home'
import Product from '../Product/Product'
import Team from '../elements/Team'
import Footer from '../elements/Footer'
import NoMatch from '../elements/NoMatch'
import './App.css'

const App = () => {
    return(
        <div className='App'>
            <NavBar />
                <Router>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/products/:productId'  component={Product}/>
                        <Route path='/team' component={Team} exact />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            <Footer />
        </div>
    )
}

export default App