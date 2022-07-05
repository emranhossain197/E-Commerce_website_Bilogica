import { Col, Container, Row } from "react-bootstrap";
import '../assets/css/IntruduceProduct.css'
import { Products } from "../assets/data"
import { useState } from "react";
import { AiOutlineRetweet } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { FiHeart } from 'react-icons/fi'
import OfferTimeComponent from "./OfferTimeComponent";
import OwlCarousel from 'react-owl-carousel';
import { useDispatch } from "react-redux";

const IntruduceProduct = () => {
    const CartDispatch = useDispatch()
    const [active, setActive] = useState(1)
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
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,

            }
        },
    };
    // filter ar jon loop gola calano hoiye ce
    let AllProduct = Products.map(ProductItem => ProductItem.item)
    // console.log(AllProduct);
    const ProductArr = []
    for (let n = 0; n < AllProduct.length; n++) {
        let result = AllProduct[n]
        for (let i = 0; i < result.length; i++) {

            ProductArr.push(result[i])
        }
    }

    const ProductData = []
    // all Product array
    for (let x = 0; x < ProductArr.length; x++) {
        if (x === 3) break
        ProductData.push(ProductArr[x])
    }
    const [products, setProducts] = useState(ProductData)
    const filterItem = (cateItem, index) => {
        setActive(index)
        if (cateItem === 'All') {
            setProducts(ProductData)
        } else {
            var arr = Products.filter(item => item.categories === cateItem)
            let product = arr.map(contant => contant.item)
            let filterProduct = []
            for (let u = 0; u < product.length; u++) {
                let allresult = product[u]
                for (let w = 0; w < allresult.length; w++) {
                    filterProduct.push(allresult[w])
                }
            }

            const ProductDataI = []
            // all Product array
            for (let x = 0; x < filterProduct.length; x++) {
                if (x === 3) break
                ProductDataI.push(filterProduct[x])
            }

            setProducts(ProductDataI)
        }

    }

    return (
        <Container className="introduce">
            <div className="Introduce-title">
                <h1>Origanic <b>Introduce Products</b></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ut minus minima vitae quasi beatae, alias quos libero. Lorem ipsum dolor sit.</p>
            </div>
            <div className="Introduce-menu ">
                <ul>
                    <li className={active === 1 ? "Intruduce-active-button" : null} onClick={() => filterItem('All', 1)}>All</li>
                    <li className={active === 2 ? "Intruduce-active-button" : null} onClick={() => filterItem('Vegetable', 2)}>Vegetable</li>
                    <li className={active === 3 ? "Intruduce-active-button" : null} onClick={() => filterItem('Fresh Fruits', 3)}>Fresh Fruits</li>
                    <li className={active === 4 ? "Intruduce-active-button" : null} onClick={() => filterItem('Spices', 4)}>Spices</li>
                    <li className={active === 5 ? "Intruduce-active-button" : null} onClick={() => filterItem('Beverages', 5)}>Beverages</li>
                    <li className={active === 6 ? "Intruduce-active-button" : null} onClick={() => filterItem('Nature', 6)}>Nature</li>
                </ul>
            </div>
            <Row>
                <Col sm={4}>
                    {products.map(item => (
                        <div className="intruduce-card">
                            <div className="card-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="card-title">
                                <Link to={`/${item.id}`}>
                                    <h1>{item.name}</h1>
                                    <h2>{item.price}$</h2>
                                </Link>
                                {/* button style useing the team component feature sale section button style use */}
                                <div className="filter-hover-bottun">
                                    <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })} >Add To Cart </button>
                                    <FiHeart />
                                    <AiOutlineRetweet />
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm={4} className='Intruduce-carousel'>
                    <OfferTimeComponent />
                    <div className="intrudece-carousel">
                        <OwlCarousel className='owl-theme' {...options} >
                            {products.map(item => (
                                <div className='intrudec-silder'>
                                    <div className="intrudece-slider-item">
                                        <Link to={`/${item?.id}`}>
                                            <h1>{item.name}</h1>
                                            <p>${item.price * 0.52} - ${item.price - 0.54}
                                            </p>
                                        </Link>
                                        <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })} className="btn">ADD TO CART</button>
                                    </div>
                                    <div className="intrudece-slider-item">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                </div>

                            ))}
                        </OwlCarousel>
                    </div>
                </Col>

                <Col sm={4} className="intrudece-products"> {products.map(item => (
                    <div className="intruduce-card">
                        <div className="card-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="card-title">
                            <Link to={`${item.id}`}>
                                <h1>{item.name}</h1>
                                <h2>{item.price}$</h2>
                            </Link>
                            {/* button style useing the team component feature sale section button style use */}
                            <div className="filter-hover-bottun">
                                <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })} >Add To Cart </button>
                                <FiHeart />
                                <AiOutlineRetweet />
                            </div>
                        </div>
                    </div>
                ))}</Col>
            </Row>
        </Container>
    )
}
export default IntruduceProduct;