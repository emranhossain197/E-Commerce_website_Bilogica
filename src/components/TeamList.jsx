import NavTwo from './NavTwo'
import { BsArrowRightShort, BsTwitter, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../assets/css/TeamListStyle.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from '../assets/image/Img.png'
import Image2 from '../assets/image/team2.png'
import Image3 from '../assets/image/team3.png'
import Image4 from '../assets/image/team5.png'
import { RiFacebookFill } from 'react-icons/ri'
import Cart from './Cart'


const TeamList = () => {
    return (
        <>
            <div className="Team-list-navigation">
                <NavTwo />
                <Cart/>
                <h1 className="text-center">Product Grid</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> New Product</Link></button>
            </div>
            <Container>
                <div className="team-list-contant text-center">
                    <h1>Team Member <b>to help</b><br /> support</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde cum autem quidem! Enim, sequi?</p>
                    <div className='team_list_contant'>
                        <div  className="p-2 Team_list">
                            <img src={Image1} alt="Image" />
                            <h2>Matkel Tomy</h2>
                            <h4>Senior Chef</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </div>
                        <div  className="p-2 Team_list">
                            <img src={Image3} alt="Image" />
                            <h2>Jon Tramp</h2>
                            <h4>Senior Chef</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </div>
                        <div className="p-2 Team_list">
                            <img src={Image2} alt="Image" />
                            <h2>Emran Hossain</h2>
                            <h4>Co-Founder</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </div>
                        <div  className="p-2 Team_list">
                            <img src={Image4} alt="image" />
                            <h2>Roshe Utla</h2>
                            <h4>Senior Chef</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col sm={3} className="p-2 Team_list">
                            <img src={Image1} alt="Image" />
                            <h2>Matkel Tomy</h2>
                            <h4>Senior Chef</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </Col>
                        <Col sm={3} className="p-2 Team_list">
                            <img src={Image3} alt="Image" />
                            <h2>Jon Tramp</h2>
                            <h4>Senior Chef</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </Col>
                        <Col sm={3} className="p-2 Team_list">
                            <img src={Image2} alt="Image" />
                            <h2>Emran Hossain</h2>
                            <h4>Co-Founder</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </Col>
                        <Col sm={3} className="p-2 Team_list">
                            <img src={Image4} alt="image" />
                            <h2>Roshe Utla</h2>
                            <h4>Senior Chef</h4>
                            <div className="about-hover-icon">
                                <RiFacebookFill />
                                <BsTwitter />
                                <BsInstagram />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default TeamList;