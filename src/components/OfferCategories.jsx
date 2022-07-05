import { Col, Container, Row } from "react-bootstrap"
import '../assets/css/OfferCategories.css'
import { useEffect, useRef, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import Carousel from 'react-bootstrap/Carousel';
import { Products } from "../assets/data";
import Image from '../assets/image/banner1.png'
import Image1 from '../assets/image/white.png'

const OfferCategories = () => {
    const [Product, setProduct] = useState(Products)
    const [TimeDay, setTimeDay] = useState('00')
    const [TimeHours, setTimeHours] = useState('00')
    const [TimeMinutes, setTimeMinutes] = useState('00')

    let Intervel = useRef()

    const OfferFunction = () => {
        const OfferTime = new Date('June 25 2023 00:00:00')
        Intervel = setInterval(() => {
            const now = new Date().getTime()
            const Offer = OfferTime - now;

            const days = Math.floor(Offer / (1000 * 60 * 60 * 24))
            const hours = Math.floor((Offer % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const Minutes = Math.floor((Offer % (1000 * 60 * 60)) / (1000 * 60))
            if (Offer < 0) {
                clearInterval(Intervel.current)
            } else {
                setTimeDay(days)
                setTimeHours(hours)
                setTimeMinutes(Minutes)

            }
        }, 1000)
    }
    useEffect(() => {
        OfferFunction()
        return () => {
            clearInterval(Intervel.current)
        }
    })

    return (
        <Container className="categorie-contant">
            <Row className="d-flex align-items-center p-3">
                <Col sm={6} className="OfferCategorie-contant ">
                    <h2>Best Deals for week</h2>
                    <h1>Grab the best <b>offer of <br /> this </b> week !</h1>
                    <div className="offer-time-contant">
                        <div className="offer-contant-time">
                            <h3>{TimeDay}</h3>
                            <h4>Days</h4>
                        </div>
                        <div className="offer-contant-time">
                            <h3>{TimeHours}</h3>
                            <h4>Hours</h4>
                        </div>
                        <div className="offer-contant-time">
                            <h3>{TimeMinutes}</h3>
                            <h4>Minutes</h4>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="best-Offer-carousel">
                        <Carousel fade className="carousel-categories">
                            {Product.map(item => (
                                <Carousel.Item interval={500}>
                                    <img
                                        src={Image1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <div className="categories-caption">
                                            <div className="categories-left">
                                                <h3>{item.categories}</h3>
                                                <h3 className='start'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
                                                <h4>${item.price * 2.52} - ${item.price * 1.52} </h4>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea!</p>
                                                <h5>Product {item.item.length}</h5>
                                                <button className='shop-button'><FiShoppingCart /> ADD TO CART</button>
                                            </div>
                                            <div className="categories-right">
                                                <img className="image" src={Image} alt="" />
                                                <img className="categories-img" src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OfferCategories;