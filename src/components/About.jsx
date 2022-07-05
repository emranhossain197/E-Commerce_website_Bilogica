import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRightShort } from 'react-icons/bs'
import NavTwo from './NavTwo'
import { Link } from "react-router-dom"
import '../assets/css/About.css'
import { FaShippingFast } from 'react-icons/fa'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsFileEarmarkLockFill, BsTwitter, BsInstagram } from 'react-icons/bs'
import { RiFacebookFill } from 'react-icons/ri'
import Image from '../assets/image/Img.png'
import Image1 from '../assets/image/team2.png'
import Image2 from '../assets/image/team3.png'
import Image3 from '../assets/image/team5.png'
import Im from '../assets/image/vegetables.png'
import FooterTwo from './FooterTwo'
import Cart from './Cart'

const About = () => {

    return (
        <>
            <div className="About-navigaton">
                <NavTwo />
                <Cart/>
                <div className="about-title">
                    <h1 className="p-5 text-center">About</h1>
                    <button className="title-button"><Link to='/'> <BsArrowRightShort /> <b>Home / </b> About</Link></button>
                </div>
            </div>
            <Container>
                <Row className="p-4 d-flex align-items-center">
                    <Col className="about-contant p-5 about-food-title">
                        <h1>Offer 100% <b>Fresh Organic</b> Food</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit consectetur iste quos iusto reprehenderit molestiae placeat, repudiandae aut quae eos repellendus corrupti aperiam. Aspernatur asperiores eveniet incidunt? A iste dolore necessitatibus voluptatem.</p>
                    </Col>
                    <Col className="p-4">
                        {/* useing the categories component offer card section style  use */}
                        <div className="offer-card">
                            <h1>Vegan <br /> Restaurants </h1>
                            <h2>-35% Off</h2>
                            <p>Aliquam pretium tellus vel sem cond</p>
                            <button className="button"><HiOutlineArrowSmRight /> Shop Now</button>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="Service-title">
                    <h1>Our <b>Awesome </b> Service </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum asperiores atque obcaecati fuga totam tenetur nostrum numquam eos!</p>
                </div>
                <Row className="awesome">
                    <Col className="awesome-icons">
                        <FaShippingFast />
                        <h2>Free Shipping</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </Col>
                    <Col className="awesome-icons">
                        <GiTakeMyMoney />
                        <h2>MoneyBack Offer</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </Col>
                    <Col className="awesome-icons">
                        <BsFileEarmarkLockFill />
                        <h2>Safe Payment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="about-team">
                <h1>Team Member <b>to help</b><br /> support</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde cum autem quidem! Enim, sequi?</p>
                <div className="about-item-contant">
                    <div className="p-2 about-item">
                        <img src={Image} alt="Image" />
                        <h2>Matkel Tomy</h2>
                        <h4>Senior Chef</h4>
                        <div className="about-hover-icon">
                            <RiFacebookFill />
                            <BsTwitter />
                            <BsInstagram />
                        </div>
                    </div>
                    <div className="p-2 about-item">
                        <img src={Image1} alt="Image" />
                        <h2>Jon Tramp</h2>
                        <h4>Senior Chef</h4>
                        <div className="about-hover-icon">
                            <RiFacebookFill />
                            <BsTwitter />
                            <BsInstagram />
                        </div>
                    </div>
                    <div className="p-2 about-item">
                        <img src={Image2} alt="Image" />
                        <h2>Emran Hossain</h2>
                        <h4>Co-Founder</h4>
                        <div className="about-hover-icon">
                            <RiFacebookFill />
                            <BsTwitter />
                            <BsInstagram />
                        </div>
                    </div>
                    <div className="p-2 about-item">
                        <img src={Image3} alt="image" />
                        <h2>Roshe Utla</h2>
                        <h4>Senior Chef</h4>
                        <div className="about-hover-icon">
                            <RiFacebookFill />
                            <BsTwitter />
                            <BsInstagram />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="working">
                    <Col sm={6}>
                        <img src={Im} alt="" />
                    </Col>
                    <Col sm={6}>
                        <h1>We believe is <b>working with</b> accredited farmers</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eligendi iste officiis nihil quasi quam in sequi accusamus officia ducimus.</p>
                    </Col>
                </Row>
            </Container>
            <FooterTwo/>
        </>
    )
}
export default About;