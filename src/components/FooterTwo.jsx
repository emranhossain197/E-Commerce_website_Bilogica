import { Col, Container, Row } from "react-bootstrap"
import Logo from '../assets/image/Logo.png'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import P1 from '../assets/image/instagram-img.png'
import P2 from '../assets/image/instagram-img2.png'
import P3 from '../assets/image/instagram-img3.png'
import P4 from '../assets/image/instagram-img4.png'
import P5 from '../assets/image/instagram-img1.png'
import P6 from '../assets/image/instagram-img6.png'
import '../assets/css/FooterTwo.css'
import Image from '../assets/image/method.png'
import { Link } from "react-router-dom"

const FooterTwo = () => {
    return (
        <>
            <Container fluid className="Footer-two">

                <div className='footer-first-contant'>
                    <img src={Logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, inventore!</p>
                    <div className="madia-icons">
                        <FiFacebook />
                        <ImWhatsapp />
                        <AiOutlineInstagram />
                        <FiTwitter />
                    </div>
                </div>
                <div className="Links_footer" >
                    <h1>Links</h1>
                    <ul >
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to="/blogPage"><li>Blog</li></Link>
                        <Link to="/checkout"><li>Check out</li></Link>
                        <Link to='/Contact'><li>Contact</li></Link>
                        <Link to="/service">  <li>Service</li></Link>
                    </ul>
                </div>
                <div className="Offical_footer">
                    <h1>Offical Info</h1>
                    <p>6Fifth Avenue 5501, Broadway, <br /> New York Morris Street <br />London 1234</p>
                    <h3><AiOutlineMail /> Sodium@gmail.com</h3>
                    <h3><BsPhone /> +08801917851640</h3>
                </div>
                <div className="footer_instagram">
                    <h1>Instagram</h1>
                    <div className="instagram-img">
                        <img src={P1} alt="Image" />
                        <img src={P2} alt="Image" />
                        <img src={P3} alt="Image" />
                        <img src={P4} alt="Image" />
                        <img src={P5} alt="Image" />
                        <img src={P6} alt="Image" />
                    </div>
                </div>

            </Container>
            <div className="footerTwo-copyright">
                <p>Copyright &copy; 2022 Bilogica. All Rights Reserved.</p>
                <div className="mathod">
                    <img src={Image} alt="" />
                </div>
            </div>
        </>
    )
}

export default FooterTwo;