import { Col, Container, Row } from "react-bootstrap";
import '../assets/css/Service.css'
import { FaShippingFast } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsFileEarmarkLockFill } from 'react-icons/bs'
import {HiOutlineArrowSmRight} from 'react-icons/hi'

const Service = () => {
    return (
        <Container className="service-contant">
            <div className="Service-title">
                <h1>Our <b>Awesome </b> Service </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum asperiores atque obcaecati fuga totam tenetur nostrum numquam eos!</p>
            </div>
            <Row className="awesome">
                <Col sm={4} className="awesome-icons">
                    <FaShippingFast />
                    <h2>Free Shipping</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </Col>
                <Col sm={4} className="awesome-icons">
                    <GiTakeMyMoney />
                    <h2>MoneyBack Offer</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </Col>
                <Col sm={4} className="awesome-icons">
                    <BsFileEarmarkLockFill />
                    <h2>Safe Payment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </Col>
            </Row>
            <Row>
                <Col className='p-4'>
                    <div className="offer-card">
                        <h1>Vegan <br /> Restaurants </h1>
                        <h2>-35% Off</h2>
                        <p>Aliquam pretium tellus vel sem cond</p>
                        <button className="button"><HiOutlineArrowSmRight /> Shop Now</button>
                    </div>
                </Col>
                <Col className='p-4'>
                    <div className="offer-card-2 offer-card">
                        <h1>Fresh vegetable <br /> Fruit backet </h1>
                        <h2>-30% Off</h2>
                        <p>Aliquam pretium tellus vel sem cond</p>
                        <button className='button'> <HiOutlineArrowSmRight /> Shop Now</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Service;