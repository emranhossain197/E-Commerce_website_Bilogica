import { Col, Container, Row } from "react-bootstrap"
import '../assets/css/ShopCategories.css'
import { Products } from "../assets/data"
import { useState } from "react"
import OwlCarousel from 'react-owl-carousel';


const ShopCategorie = () => {
    const [product, setProduct] = useState(Products)
    const options = {
        margin: 20,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,

            }
        },
    };
    return (
        <Container fluid className="shop-contant">
            <div className="shop-categorie-title">
                <h1>Shop By <b>Categories </b> <br /> top categories</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis. Doloribus labore hic totam, magni optio eaque tenetur.</p>
            </div>
            <Container>
                <OwlCarousel className="owl-theme  " {...options} >
                    {product.map(item => (
                        <div className="shop-slider">
                            <img src={item.imageTwo} alt={item.categories} />
                            <h2>{item.categories}</h2>
                            <p>{item.item.length} Products</p>
                        </div>
                    ))}
                </OwlCarousel>
            </Container>
        </Container>
    )
}
export default ShopCategorie;