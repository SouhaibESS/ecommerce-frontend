import React from 'react'

export default ({id, name, price, rating, images}) => {
    
    const image = images[0].image_path
    let renderRatingStars = () => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if(i < rating) {
                stars[i] = <svg key={i} className="text-warning bi bi-star-fill mr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
            } else {
                stars[i] = <svg key={i} className="bi bi-star mr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clipRule="evenodd"/>
                            </svg>
            }
        }
        return stars
    }

    return (
        <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href={`products/${id}`}>
                <span >
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img 
                        className="img-fluid" 
                        src={image} 
                        alt="portfolio_img" 
                    />
                </span>
            </a>
            <div className="portfolio-caption">
                <div className="d-flex flex-column align-items-start">
                    <h3 className='mb-n1'>{name}</h3>
                    <p className="ml-2 text-muted">
                        {
                            renderRatingStars()
                        }
                    </p>
                    <p className="h2 mt-2 ml-2 text-muted">Price : {price}$</p>
                </div>
            </div>
        </div>
    )
}