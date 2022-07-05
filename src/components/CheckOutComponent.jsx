import NavTwo from './NavTwo'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import '../assets/css/CheckOutComponent.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { BilogicContext } from "../context/BilogicContext";
import { useSelector } from 'react-redux'
import Pay from '../assets/image/pay.png'

const CheckOutComponent = () => {
    const [couponCode, setCouponCode] = useState(false)
    const { TotalPrice } = useContext(BilogicContext)
    const cart = useSelector(state => state.cart)

    return (
        <>
            <div className="checkout-contant-nav">
                <NavTwo />
                <Cart />
                <h1 className="text-center">CheckOut</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> CheckOut</Link></button>
            </div>
            <Container className='customer-login mt-5 '>
                <p className='p-2'>Returning Customer? Click here to login</p>
            </Container>
            <Container className='mt-2 coupon-code'>
                <p onClick={() => couponCode ? setCouponCode(false) : setCouponCode(true)} className='p-2'>Have a Coupon? Click here to enter you code</p>
                <input type="text" placeholder='Enter Your Coupon Code' className={couponCode ? "input-code" : "input-code-none"} />
            </Container>
            <Container>
                <Row className='p-2'>
                    <Col sm={7}>
                        <h2>Billing Details</h2>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="Country">Country*</label>
                                <input className='full-width' type="text" name='Country' placeholder='Enter Your Country' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="FirstName">First Name*</label>
                                <input type="text" name='FirstName' placeholder='Enter Your First Name' />
                            </div>
                            <div className="input-item-checkout">
                                <label htmlFor="LastName">Last Name*</label>
                                <input type="text" name='LastName' placeholder='Enter Your Last Name' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="CompanyName">Company Name</label>
                                <input className='full-width' type="text" name='CompanyName' placeholder='Enter Your Company Name' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="Address">Address*</label>
                                <input className='full-width' type="text" name='Address' placeholder='Enter Your Address' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="City">Town / City*</label>
                                <input className='full-width' type="text" name='City' placeholder='Enter Your Town / City' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="Country">Country*</label>
                                <input type="text" name='Country' placeholder='Enter Your Country' />
                            </div>
                            <div className="input-item-checkout">
                                <label htmlFor="PostCode">PostCode/ Zip*</label>
                                <input type="text" name='PostCode' placeholder='Enter Your PostCode / Zip' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="number">Number*</label>
                                <input className='full-width' type="number" name='number' placeholder='Enter Your Number' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="email">E-mail</label>
                                <input className='full-width' type="email" name='email' placeholder='Enter Your E-mail' />
                            </div>
                        </div>
                        <div className="input-details">
                            <div className="input-item-checkout">
                                <label htmlFor="otherInfo">Other Info</label>
                                <textarea name="otherInfo" placeholder='Enter Your Other Info ' cols="50" rows="5"></textarea>
                            </div>
                        </div>
                    </Col>
                    <Col sm={5} className="Payment-details">
                        <h2>Your Order</h2>
                        <h3><span>Product Item : </span> <span>{cart.length}</span></h3>
                        <h4>SubTotal: $ {TotalPrice}</h4>
                        <input type="radio" name="payment" value="Bank" /> <span>Direct Bank transfer</span> <br />
                        <input type="radio" name="payment" value="Check" /> <span>Check Payment</span> <br />
                        <input type="radio" name="payment" value="Cash" /> <span>Cash on Delivery</span> <br />
                        <input type="radio" name="payment" value="Paypal" /> <span>PayPal </span> <img src={Pay} alt="" />
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <b>privacy policy. </b></p>
                        <button className='payment-button'> Product to PayPal</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default CheckOutComponent;