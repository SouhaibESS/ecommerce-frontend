import React , { useState , useEffect } from 'react'
import { API_URL } from '../../config'

import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const OrderForm = ({show, onHide, productQuantity, productId, productPrice}) => {

    const [name ,setName] = useState('')
    const [nameValid ,setNameValid] = useState(false)
    const [email ,setEmail] = useState('')
    const [emailValid ,setEmailValid] = useState(false)
    const [phone ,setPhone] = useState('')
    const [phoneValid ,setPhoneValid] = useState(false)
    const [quantity ,setQuantity] = useState(1)
    const [quantityValid ,setQuantityValid] = useState(true)
    const [errors ,setErrors] = useState({})
    const [formValid ,setFormValid] = useState(false)
    const [totalPrice ,setTotalPrice] = useState(productPrice)

    useEffect(() => {
        console.log('productPrice', productPrice)
        console.log('name', name)
        setErrors({})
    }, [])

    useEffect(() => {
        console.log('formValid', formValid)
    }, [formValid, errors, nameValid, emailValid, phoneValid, quantityValid])

    const handelChange = (e) => {
        const {name, value} = e.target
        validateData(name, value)
        if(name === 'quantity') {
            setTotalPrice(quantity * productPrice)
        }
    }

    const validateData = (name, value) => {
        switch (name) {
            case 'name':
                setName(value)
                if(value.length < 3) {
                    setErrors({
                        ...errors,
                        name: 'name must be at least 3 characters long'
                    })
                } else {
                    setErrors({
                        ...errors,
                        name: ''
                    })
                    setNameValid(true)
                }
                break;
            case 'email':
                setEmail(value)
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setErrors({
                        ...errors,
                        email: 'Invalid email address'
                    })
                } else {
                    setErrors({
                        ...errors,
                        email: ''
                    })
                    setEmailValid(true)
                }
                break;
            case 'phone':
                setPhone(value)
                if(value.length < 10) {
                    setErrors({
                        ...errors,
                        phone: 'phone number must be at least 12 characters long'
                    })
                } else {
                    setErrors({
                        ...errors,
                        phone: ''
                    })
                    setPhoneValid(true)
                }
                break;
            case 'quantity':
                if( value > productQuantity) {
                    setErrors({
                        ...errors,
                        quantity: `quantity should be lower or equal to ${productQuantity}`
                    })
                    setQuantity(productQuantity)
                } else if ( value < 0 ) {
                    setErrors({
                        ...errors,
                        quantity: `quantity should be at least one`
                    })
                    setQuantity(1)
                } else {
                    setErrors({
                        ...errors,
                        quantity: ''
                    })
                    setQuantityValid(true)
                    setQuantity(value)
                    setTotalPrice(quantity * productPrice)
                }
                break;    
            default:
                console.error('Error : invalide state value')
                break;
        }

        // sets the state to true for the form so we can submit it or not
        setFormValid(nameValid && phoneValid && emailValid && quantityValid)
    }

    const handelSubmit = async event => {
        event.preventDefault()
        let data = {
            client_name: name,
            client_phone_number: phone,
            client_email: email,
            ordered_quantity: quantity
        }
        console.log('data', data)
        data = JSON.stringify(data)

        try {
            // making a post request to the API
            const fetchedResponse = await fetch(`${API_URL}/product/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            })
            const response = await fetchedResponse.json()
            const {success, errors} = response
            
            console.log('response => success', success)
            console.log('response => errors', errors)
            if(!success) {
                setErrors(errors)
            } else {
                setErrors({})
            }
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    return (
        <Modal 
            show={show}
            onHide={onHide}
            size="md"
            centered
        >
            <div className="col-lg-12 text-center pt-4 pb-2">
                <h4 className="section-heading text-uppercase">Order Now</h4>
                <h5 className="section-subheading text-muted">Fill in this form to pass your order.</h5>
            </div>
            <form onSubmit={handelSubmit}>
                <Container className='pb-5'>
                    <Row>
                        <Col>
                            <div className="form-group mr-n2">
                                <input
                                    className={errors.name ? 'form-control is-invalid' : 'form-control'} 
                                    name='name' 
                                    id="name" 
                                    type="text" placeholder="Your Name *" 
                                    required="required" 
                                    data-validation-required-message="Please enter your name."
                                    value={name}
                                    onChange={handelChange}
                                />
                                {
                                    /* if there's an error display the error's message */
                                    errors.name &&
                                    <div className="invalid-feedback" role="alert">
                                        { errors.name }
                                    </div>
                                }
                                <p className="help-block text-danger"></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <input
                                    className={errors.phone ? 'form-control is-invalid' : 'form-control'} 
                                    name='phone' 
                                    id="phone" 
                                    type="tel" 
                                    placeholder="Your Phone *" 
                                    required="required" 
                                    data-validation-required-message="Please enter your phone number."
                                    value={phone}
                                    onChange={handelChange}
                                />
                                {
                                    /* if there's an error display the error's message */
                                    errors.phone &&
                                    <div className="invalid-feedback" role="alert">
                                        { errors.phone }
                                    </div>
                                }
                                <p className="help-block text-danger"></p>
                            </div>
                        </Col>
                    </Row>
                    <div className="form-group">
                        <input
                            className={errors.email ? 'form-control is-invalid' : 'form-control'} 
                            name='email' 
                            id="email" 
                            type="email" 
                            placeholder="Your Email *" 
                            required="required" 
                            data-validation-required-message="Please enter your email address."
                            value={email}
                            onChange={handelChange}
                        />
                        {
                            /* if there's an error display the error's message */
                            errors.email &&
                            <div className="invalid-feedback" role="alert">
                                { errors.email }
                            </div>
                        }
                        <p className="help-block text-danger"></p>
                    </div>
                    Quantity :
                    <div className='input-group mb-2 w-50 mx-auto'>
                        <div className="input-group-prepend">
                            <a 
                                className="btn btn-decrement btn-outline-secondary" 
                                style={{minWidth: '2.5rem'}}
                                onClick={() => {
                                    quantity > 1 && setQuantity(quantity - 1)
                                }}
                            >
                                <strong>-</strong>
                            </a>
                        </div>
                        <input 
                            name='quantity'
                            type="number" 
                            style={{textAlign: 'center'}} 
                            value={quantity}
                            onChange={handelChange}
                            className={errors.quantity ? 'form-control is-invalid' : 'form-control'} 
                        />
                        <div className="input-group-append">
                            <a 
                                className="btn btn-decrement btn-outline-secondary" 
                                style={{minWidth: '2.5rem'}}
                                onClick={() => {
                                    quantity < productQuantity && setQuantity(quantity + 1)
                                }}
                            >
                                <strong>+</strong>
                            </a>
                        </div>
                        {
                            /* if there's an error display the error's message */
                            errors.quantity &&
                            <div className="invalid-feedback" role="alert">
                                { errors.quantity }
                            </div>
                        }
                    </div>
                    <Row>
                        <Col>
                            Total Price : {totalPrice}$
                        </Col>
                    </Row>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center mt-5">
                        <div id="success"></div>
                        <button 
                            id="sendMessageButton" 
                            className="btn btn-primary text-uppercase" 
                            type="submit"
                            disabled={!formValid}
                        >Make Order</button>
                    </div>
                </Container>
            </form>
        </Modal>
    )
}

export default OrderForm