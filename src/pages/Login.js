import React from 'react'
import { Col, Row } from 'reactstrap'
import '../assets/css/login.css'
import loginPicture from '../assets/images/login.jpg'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
    return (
        <>
            <Row className='outdiv'>
                <Col md='8'>
                    <img src={loginPicture} style={{ width: '100%', height: '100vh' }}></img>
                </Col>
                <Col md='4' style={{padding:'5%', marginTop:'5%'}}>
                    <LoginForm />
                </Col>
            </Row>
        </>
    )
}

export default Login