import React , { useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { API_URL } from '../../config'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const LoginForm = () => {

    let history = useHistory()
    console.log('history', history)

    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [errors ,setErrors] = useState({})

    const handelChange = (e) => {
        const {name, value} = e.target
        validateData(name, value)
    }

    const validateData = (name, value) => {
        switch (name) {
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
                }
                break;
            case 'password':
                setPassword(value)
                break;
        
            default:
                console.error('Error : invalide state value')
                break;
        }
    }

    const handelSubmit = async event => {
        event.preventDefault()

        let data = {
            email,
            password
        }
        data = JSON.stringify(data)

        console.log('data', data)

        try {
            const fetchedUser = await fetch(`${API_URL}/login`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            })

            const response =  await fetchedUser.json()

            console.log('response', response)

            if(!response.success) {
                setErrors({
                    email: 'please enter a valid email',
                    password: 'incorrect password'
                })
            } else {
                history.push('/dashboard')
            }
            
        } catch (error) {
            console.error('Error : ', error)
        }
    }

    return (
       <Container id='contact' className=' page-section -auto bg-light rounded col-6 p-5' style={{marginTop: 150}}>
            <Form 
                onSubmit={handelSubmit}
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='font-weight-bold' >Email address</Form.Label>
                    <Form.Control 
                        value={email} 
                        name='email'
                        type="email" 
                        placeholder="Enter email" 
                        onChange={handelChange}
                        isInvalid={errors.email ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='font-weight-bold' >Password</Form.Label>
                    <Form.Control 
                        value={password} 
                        name='password'
                        type="password" 
                        placeholder="Password" 
                        onChange={handelChange}
                        isInvalid={errors.password ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
       </Container> 
    )
}

export default LoginForm