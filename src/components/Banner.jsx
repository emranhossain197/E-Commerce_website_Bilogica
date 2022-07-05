import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import BannerImg from '../assets/image/Slider.png'
import '../assets/css/Banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="banner-carousel">
                    <Carousel>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={BannerImg}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>100% Organic food and Genuine Product served</h3>
                                <h1>A Different Kind of <br /> Organic Food</h1>
                                <p>Aliquam pretium tellus vel sem condimentum faucibus Curabitur egestas pellentesque felis ut vahicul. cras faucibus purus sed risus</p>
                                <Link to='/ProductList'> <button className='button'><HiOutlineArrowSmRight /> Shop Now</button></Link>
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
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )

}
export default Banner;