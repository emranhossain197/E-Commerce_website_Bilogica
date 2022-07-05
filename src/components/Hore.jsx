import { Col, Container, Row } from "react-bootstrap";
import '../assets/css/Hore.css'
import Carousel from 'react-bootstrap/Carousel';
import BannerImg from '../assets/image/base3.png'
import Image from '../assets/image/Horeimg.png'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { Link } from "react-router-dom";

const Hore = () => {
    return (
        <Container className="p-2">
            <Row>
                <Col sm={8} className='Hero-carousel'>
                    <Carousel>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block  w-100"
                                src={BannerImg}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>100% Organic food and Genuine Product served</h3>
                                <h1>A Different Kind of <br /> Organic Food</h1>
                                <p>Aliquam pretium tellus vel sem condimentum faucibus Curabitur egestas pellentesque felis ut vahicul. cras faucibus purus sed risus</p>
                                <Link to='/ProductList'> <button className='button'><HiOutlineArrowSmRight /> Shop Now</button></Link>
                                <img src={Image} alt="Image" />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={BannerImg}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>100% Organic food and Genuine Product served</h3>
                                <h1>Fresh & Healthy <br /> Organic Food</h1>
                                <p>Aliquam pretium tellus vel sem condimentum faucibus Curabitur egestas pellentesque felis ut vahicul. cras faucibus purus sed risus</p>
                                <Link to='/ProductList'> <button className='button'><HiOutlineArrowSmRight /> Shop Now</button></Link>
                                <img src={Image} alt="Image" />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={BannerImg}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>100% Organic food and Genuine Product served</h3>
                                <h1>A Different Kind of <br /> Organic Food</h1>
                                <p>Aliquam pretium tellus vel sem condimentum faucibus Curabitur egestas pellentesque felis ut vahicul. cras faucibus purus sed risus</p>
                                <Link to='/ProductList'> <button className='button'><HiOutlineArrowSmRight /> Shop Now</button></Link>
                                <img src={Image} alt="Image" />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={4} className='Hore-title'>
                    <h1>Fresh Fruits</h1>
                    <h3>Enjoy Up to 50% OFF</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Hore;
