import React , { Component } from 'react'
import { API_URL } from '../../config'

export class Contact extends Component {

    constructor() {
        super()
        this.state = { 
            name:'', nameValid: false,
            phone:'', nphoneValid: false,
            email:'', emailValid: false,
            message:'', messageValid: false,
            formValid: false,
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // handles form fields changes
    handleChange(e) {
        const {name, value} = e.target
        this.validateData(name, value)
    }

    validateData(name, value) {
        switch (name) {
            case 'name':
                if(value.length < 3) 
                    this.setState({
                        [name] : value,
                        nameValid: false, 
                        errors:{
                            ...this.state.errors,
                            [name]: 'name must be at least 3 characters long'
                        }
                    })
                else 
                    this.setState({
                        [name] : value,
                        nameValid: true, 
                        errors:{
                            ...this.state.errors,
                            [name]: ''
                        }
                    })
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) 
                    this.setState({
                        [name] : value,
                        emailValid: false, 
                        errors:{
                            ...this.state.errors,
                            [name]: 'Invalid email address'
                        }   
                    })
                else 
                    this.setState({
                        [name] : value,
                        emailValid: true, 
                        errors:{
                            ...this.state.errors,
                            [name]: ''
                        }
                    })
                break;
            case 'phone':
                if(value.length < 12) 
                    this.setState({
                        [name] : value, 
                        phoneValid: false, 
                        errors:{
                            ...this.state.errors,
                            [name]: 'phone number must be at least 12 characters long'
                        }
                    })
                else 
                    this.setState({
                        [name] : value,
                        phoneValid: true, 
                        errors:{
                            ...this.state.errors,
                            [name]: ''
                        }
                    })
                break;
            case 'message':
                if(value.length < 3) 
                    this.setState({
                        [name] : value,
                        messageValid: false,  
                        errors:{
                            ...this.state.errors,
                            [name]: 'message must be at least 3 characters long'
                        }
                    })
                else 
                    this.setState({
                        [name] : value,
                        messageValid: true, 
                        errors:{
                            ...this.state.errors,
                            [name]: ''
                        }
                    })
                break;    
            default:
                console.error('Error : invalide state value')
                break;
        }
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid && this.state.messageValid})
    }

    // submiting the data to the api
    async handleSubmit(event) {
        event.preventDefault()
        let data = this.state
        data = JSON.stringify(data)
        try {
            // making a post request to the API
            await fetch(`${API_URL}/contact-us`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            })
            .then(response => response.json())
            .then(({success, errors}) =>{
                if(!success) // request fails
                    this.setState({ errors }) // asign the errors from the response to the state
                else
                    this.setState({ // resets the state 
                        name:'',
                        phone:'',
                        email:'',
                        message:'',
                        formValid: false,
                        errors: {} 
                    }) 
            })
        } catch (error) {
            console.error(error) 
        }
    }

    render() { 
        const {name, phone, email, message, formValid , errors} = this.state
        return (  
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Feel Free to express yourself to us.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input                      // if there's an error adds is-invalid class
                                            className={errors.name ? 'form-control is-invalid' : 'form-control'} 
                                            name='name' 
                                            id="name" 
                                            type="text" placeholder="Your Name *" 
                                            required="required" 
                                            data-validation-required-message="Please enter your name."
                                            value={name}
                                            onChange={this.handleChange}
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
                                        <div className="form-group">
                                        <input                       // if there's an error adds is-invalid class
                                            className={errors.email ? 'form-control is-invalid' : 'form-control'} 
                                            name='email' 
                                            id="email" 
                                            type="email" 
                                            placeholder="Your Email *" 
                                            required="required" 
                                            data-validation-required-message="Please enter your email address."
                                            value={email}
                                            onChange={this.handleChange}
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
                                        <div className="form-group">
                                        <input                        // if there's an error adds is-invalid class
                                            className={errors.phone ? 'form-control is-invalid' : 'form-control'}
                                            name='phone' 
                                            id="phone" 
                                            type="tel" 
                                            placeholder="Your Phone *" 
                                            required="required" 
                                            data-validation-required-message="Please enter your phone number."
                                            value={phone}
                                            onChange={this.handleChange}
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
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea                        // if there's an error adds is-invalid class
                                            className={errors.message ? 'form-control is-invalid' : 'form-control'} 
                                            name='message' 
                                            id="message" 
                                            placeholder="Your Message *" 
                                            required="required" 
                                            data-validation-required-message="Please enter a message."
                                            value={message}
                                            onChange={this.handleChange}
                                        ></textarea>
                                        {
                                            /* if there's an error display the error's message */
                                            errors.message &&
                                            <div className="invalid-feedback" role="alert">
                                                { errors.message }
                                            </div>
                                        }
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button 
                                            disabled={!formValid}
                                            id="sendMessageButton" 
                                            className="btn btn-primary btn-xl text-uppercase" 
                                            type="submit"
                                        >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}