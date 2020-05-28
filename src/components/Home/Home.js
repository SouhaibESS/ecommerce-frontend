import React , { Component } from 'react'
import axios from 'axios'
import NavBar from '../elements/NavBar'
import Header from '../elements/Header'
import Footer from '../elements/Footer'
import ProductsGrid from '../elements/ProductsGrid'
import { Contact } from '../elements/Contact'
import { API_URL } from '../../config'


export class Home extends Component {
    
    state = {
        laoding: true,
        products: [],
        moreProducts: true, 
        links: {}
    }
    // fetting all the data from the api (links, products ...)
    fetchData = async (endpoint) => {
        try {
            // if the url is passed we use it else we use the api_url
            const url = endpoint ? endpoint : `${API_URL}/products`
            // destructrin the data to retrive just the products array
            const data = await axios.get(url)
            return data
        } catch (error) {
            console.error('Error : ', error)
        }
    }

    // handles clicking the load more btn
    handleClick = async (e) => {
        const { next , last } = this.state.links
        if(next !== last) {
            this.setState({laoding: true})
            const {data: {data, links}} =  await this.fetchData(next)
            this.setState({
                products: this.state.products.concat(data),
                laoding: false, 
                links
            })
        } else {
            this.setState({moreProducts: false})
        }
    }

    async componentDidMount() {
        const {data: {data, links}} =  await this.fetchData()
        this.setState({
            products: data,
            laoding: false, 
            links
        })
    }

    render() {
        const { laoding , products, moreProducts } =  this.state
        return (
            <>
                <NavBar />
                <Header />
                <ProductsGrid laoding={laoding} products={products} moreProducts={moreProducts} handleClick={this.handleClick.bind(this)} />
                <Contact />
                <Footer />
            </>
        )
    }
}