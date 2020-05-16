import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

const NoMatch = () => (
    <Container fluid>
        <Alert className='mt-5' variant='danger'>
            This page does'nt exist!
        </Alert>
    </Container>
)

export default NoMatch