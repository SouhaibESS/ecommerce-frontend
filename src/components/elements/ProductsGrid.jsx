import React from 'react'
import ProductThumb from './ProductThumb'
import Spinner from 'react-bootstrap/Spinner'

export default ({loading, products, moreProducts, handleClick}) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container ">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Products</h2>
                    <h3 className="section-subheading text-muted">Here you can find the best products of the internet.</h3>
                </div>
            </div>
            <div className="row">
                {
                    loading ?
                        <div style={{height:'340px' ,width:'auto'}} className="d-flex justify-content-center align-items-center">
                            <Spinner className='m-auto mt-5 mb-5' animation="border" role="status" variant='warning'>
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    :
                    products.map(({id, name, price, rating, images}) => <ProductThumb 
                                                                                        key={id} 
                                                                                        id={id}
                                                                                        name={name} 
                                                                                        rating={rating}
                                                                                        images={images} 
                                                                                        price={price} 
                                                                                    />)
                }
            </div>

            {
                moreProducts ?
                <div className="row d-flex justify-content-center mt-2">
                    <button onClick={handleClick} className="btn btn-primary btn-lg w-75 text-uppercase js-scroll-trigger btn-block" >Load More Products</button>
                </div>
                :
                <h3>NO MORE PRODUCTS</h3>
            }
        </div>
      </section>
    )
}