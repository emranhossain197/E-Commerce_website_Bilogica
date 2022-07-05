import { Col, Container, Row } from 'react-bootstrap'
import '../assets/css/CategoriesStyle.css'
import OwlCarousel from 'react-owl-carousel';
import { Products } from '../assets/data'
import { useState } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Categories = () => {

    const [product, setProduct] = useState(Products)

    const options = {
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            700: {
                items: 2,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,

            }
        },
    };
    return (
        <Container fluid className='categories'>
            <Row>
                <Col>
                    <div className="categories-top-contant">
                        <h1>Browse Our <b>Hottest</b> Categories </h1>
                        <p className="fast-p"></p>
                        <p>Aliquam petium tellus vel sem condimentum faucibus. Curabitur egestias pellentesque fells ut vahicula . Cras faucibus purus sad risus</p>
                    </div>
                </Col>
            </Row>
            <Container className='categories-carousel-product'>
                <OwlCarousel className='owl-theme' {...options} >
                    {product.map(contant => (
                        <Link to="/ProductList">
                            <div className='categories-slider'>
                                <h1>{contant.categories}</h1>
                                <p>{contant.item.length} Products</p>
                                <img src={contant.image} alt={contant.categories} />
                            </div>
                        </Link>

                    ))}
                </OwlCarousel>
            </Container>
            <Container fluid>
                <div className="offer">
                    <h1>What <b>We Offer</b> for You</h1>
                    <p>Aliquam petium tellus vel sem condimentum faucibus. Curabitur egestias pellentesque fells ut vahicula . Cras faucibus purus sad risus</p>

                    <Container>
                        <Row>
                            <Col sm={6} className="d-flex justify-content-center" >
                                <div className="offer-card">
                                    <h1>Vegan <br /> Restaurants </h1>
                                    <h2>-35% Off</h2>
                                    <p>Aliquam pretium tellus vel sem cond</p>
                                    <Link to='/ProductList'> <button className='button'><HiOutlineArrowSmRight /> Shop Now</button></Link>
                                </div>
                            </Col>
                            <Col sm={6} >
                                <div className="offer-card-2 offer-card">
                                    <h1>Fresh vegetable <br /> Fruit backet </h1>
                                    <h2>-30% Off</h2>
                                    <p>Aliquam pretium tellus vel sem cond</p>
                                    <Link to='/ProductList'> <button className='button'><HiOutlineArrowSmRight /> Shop Now</button></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Container>
    )

}

export default Categories;