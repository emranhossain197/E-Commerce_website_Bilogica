import { Container } from "react-bootstrap"
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import Image from '../assets/image/method.png'
import { Link } from 'react-router-dom'
import '../assets/css/Footer.css'
import { useState } from "react"


const Footer = () => {
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
        <Container fluid>
            <div className="newsletters">
                <AiOutlineMail />
                <h2>Sign up for newsletters </h2>
                <div className="input-email-newslatters">
                    <input type="email" name="email" id="email" placeholder="E-mail Address" onChange={(e) => setEmail(e.target.value)} value={Email} />
                    <button className="news-button" onClick={(e) => EmailVari(e, Email)}>Subscribe</button>
                </div>
            </div>
            <footer>
                <div className="footer-item-1">
                    <h1 className="footer-title">Contact Us</h1>
                    <p>6Fifth Avenue 5501, Broadway, <br /> New York Morris Street <br />London 1234</p>
                    <h3><AiOutlineMail /> Sodium197@gmail.com</h3>
                    <h3><BsPhone /> +08801917851640</h3>
                </div>
                <div className="footer-item-2">
                    <h1 className='footer-title'>Information</h1>
                    <ul>
                        <Link to='/about'> <li>About Us</li> </Link>
                        <Link to="/blogPage"><li>Blog</li></Link>
                        <Link to="/checkout"><li>Check out</li></Link>
                        <Link to='/Contact'><li>Contact</li></Link>
                        <Link to="/service"><li>Service</li></Link>
                    </ul>
                </div>
                <div className="footer-item-3">
                    <h1 className='footer-title'>My Account</h1>
                    <ul>
                        <li> My Account</li>
                        <Link to='/Contact'><li>Contact</li></Link>
                        <Link to="/checkout"><li>Shopping cart</li></Link>
                        <Link to='/ProductList'><li>Shop</li></Link>

                    </ul>
                </div>
                <div className="footer-item-4">
                    <h1 className='footer-title'>Categories</h1>
                    <ul>
                        <li>Fruits & Vegetables</li>
                        <li>Dairy Products</li>
                        <li>Package Foods</li>
                        <li>Beverage</li>
                        <li>Health & Wellness</li>
                    </ul>
                </div>
            </footer>
            <div className="footer-copyright">
                <p>Copyright &copy; 2022 Bilogica. All Rights Reserved.</p>
                <div className="mathod">
                    <img src={Image} alt="" />
                </div>
            </div>
        </Container>
    )
}
export default Footer