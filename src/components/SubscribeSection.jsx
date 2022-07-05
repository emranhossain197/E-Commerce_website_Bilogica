import { Col, Container, Row } from "react-bootstrap"
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react'
import '../assets/css/SubscribeSectionStyle.css'

const SubscribeSection = () => {

    const [Email, setEmail] = useState('')
    const [ValidEmail, setValidEmail] = useState([])
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const EmailVari = (e, valid) => {
        e.preventDefault()
        if (valid === '') {
            alert(Email + ' Email cannot be blank');
            setEmail('')
        } else if (!isEmail(valid)) {
            alert(Email + ' Not a valid email');
            setEmail('')
        } else {
            const subscribe = {
                id: Date.now(),
                email: valid
            }
            alert('Thank you for subscribe ');
            setValidEmail([subscribe, ...ValidEmail])
            setEmail('')
        }
    }
    return (
        <Container fluid className="subscribe-contant">
            <Row>
                <Col sm={7} className="subscribe-left-contant ">
                    <h1>We Offer Premium & 100% Organic Food</h1>
                    <button className="button"><HiOutlineArrowSmRight /> Shop Now</button>
                    
                </Col>
                <Col sm={5} className="subscribe-right-contant ">
                    <AiOutlineMail />
                    <h1>Subscribe <br /> Newsletters Us</h1>
                    <p>Sign Up and get a voucher of worth $250.00</p>
                    <input type="email" name="email" id="email" placeholder='E-mail Address' onChange={(e) => setEmail(e.target.value)} value={Email} />
                    <button onClick={(e) => EmailVari(e, Email)}>Subscribe</button>
                </Col>
            </Row>
        </Container>
    )
}

export default SubscribeSection;