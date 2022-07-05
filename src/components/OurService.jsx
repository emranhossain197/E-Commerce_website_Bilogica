import '../assets/css/OurService.css'
import NavTwo from './NavTwo'
import { BsArrowRightShort, BsFileEarmarkLockFill, BsCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPeopleCarry } from 'react-icons/fa'
import { GiTakeMyMoney, GiCardPick } from 'react-icons/gi'
import { RiSecurePaymentFill } from 'react-icons/ri'
import Cart from './Cart'

const OurService = () => {
    return (
        <>
            <div className="our-service-nav">
                <NavTwo />
                <Cart/>
                <h1 className="text-center">Product Grid</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> Service</Link></button>
            </div>
            <Container fluid>
                <div className="services-title text-center">
                    <h1>Our <b>Awesome</b> Services </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi asperiores amet quod quia dignissimos iure ipsam?</p>
                </div>
                <Container>
                    <Row>
                        <Col sm={4} className='services-item'>
                            <FaPeopleCarry />
                            <h3>Free Shopping </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                        <Col sm={4} className='services-item'>
                            <GiTakeMyMoney />
                            <h2>MoneyBack Offer</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </Col>
                        <Col sm={4} className='services-item'>
                            <BsFileEarmarkLockFill />
                            <h2>Safe Payment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row >
                        <Col sm={4} className='services-item '>
                            <GiCardPick />
                            <h2>Pick a Starter Option</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </Col>
                        <Col sm={4} className='services-item'>
                            <RiSecurePaymentFill />
                            <h2>Secure Payment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </Col>
                        <Col sm={4} className='services-item'>
                            <BsCartPlusFill />
                            <h2>Safe Payment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default OurService;