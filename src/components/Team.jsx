import { Container, Row, Col } from "react-bootstrap"
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { AiFillStar, AiOutlineStar, AiOutlineRetweet } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Teams from '../assets/image/team.png'
import Team1 from '../assets/image/team1.png'
import { Products } from '../assets/data'
import '../assets/css/Team.css'
import { useDispatch } from "react-redux"

const Team = () => {
    const CartDispatch = useDispatch()
    const [active, setActive] = useState(1)
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
        if (x === 4) break
        ProductData.push(ProductArr[x])
    }
    const [Product, setProduct] = useState(ProductData)
    const filterItem = (cateItem, index) => {
        setActive(index)
        if (cateItem === 'featered') {
            setProduct(ProductData)
        } else if (cateItem === 'topRateted') {
            let toRateted = Products.filter(item => item.categories === 'Spices')
            let product = toRateted.map(item => item.item)
            let productItem = []
            for (let u = 0; u < product.length; u++) {
                let allresult = product[u]
                for (let w = 0; w < allresult.length; w++) {
                    productItem.push(allresult[w])
                }
            }
            const ProductDataI = []
            // all Product array
            for (let x = 0; x < productItem.length; x++) {
                if (x === 4) break
                ProductDataI.push(productItem[x])
            }
            setProduct(ProductDataI)
        } else if (cateItem === 'onsale') {
            let toRateted = Products.filter(item => item.categories === 'Nature')
            let product = toRateted.map(item => item.item)
            let productItem = []
            for (let u = 0; u < product.length; u++) {
                let allresult = product[u]
                for (let w = 0; w < allresult.length; w++) {
                    productItem.push(allresult[w])
                }
            }
            const ProductDataI = []
            // all Product array
            for (let x = 0; x < productItem.length; x++) {
                if (x === 4) break
                ProductDataI.push(productItem[x])
            }
            setProduct(ProductDataI)
        }

    }
    const options = {
        margin: 30,
        responsiveClass: true,
        loop: true,
        nav: false,
        dots: true,
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
                items: 2,
            },
            1000: {
                items: 2,

            }
        },
    };

    return (
        <Container fluid>
            <div className="team-title">
                <h1>What Our <b>Customer</b> Saying</h1>
                <p>Vegetables are usually classified on the basis of the part of the plant that is used for food. The root vegetables include beets, carrots, radishes, sweet</p>
            </div>
            <Container className="team-carousel">
                <OwlCarousel className='owl-theme' {...options} >
                    <div className="team-container-contant ">
                        <div className="team-taiminal">
                            <div className='team-image '>
                                <img src={Teams} alt="Team Image" />
                            </div>
                            <div className="team-text ">
                                <h1>Emran Hossain</h1>
                                <h4>Smoothie Bartender</h4>
                                <h5><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></h5>
                                <h3><FaQuoteRight /></h3>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, tempore nisi impedit consequatur architecto quisquam?</p>

                    </div>
                    <div className="team-container-contant">
                        <div className="team-taiminal">
                            <div className='team-image '>
                                <img src={Team1} alt="Team Image" />
                            </div>
                            <div className="team-text ">
                                <h1>Emran Hossain</h1>
                                <h4>Smoothie Bartender</h4>
                                <h5><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></h5>
                                <h3><FaQuoteRight /></h3>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, tempore nisi impedit consequatur architecto quisquam?</p>

                    </div>
                    <div className="team-container-contant">
                        <div className="team-taiminal">
                            <div className='team-image '>
                                <img src={Teams} alt="Team Image" />
                            </div>
                            <div className="team-text ">
                                <h1>Emran Hossain</h1>
                                <h4>Smoothie Bartender</h4>
                                <h5><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></h5>
                                <h3><FaQuoteRight /></h3>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, tempore nisi impedit consequatur architecto quisquam?</p>

                    </div>
                    <div className="team-container-contant">
                        <div className="team-taiminal">
                            <div className='team-image '>
                                <img src={Team1} alt="Team Image" />
                            </div>
                            <div className="team-text ">
                                <h1>Emran Hossain</h1>
                                <h4>Smoothie Bartender</h4>
                                <h5><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></h5>
                                <h3><FaQuoteRight /></h3>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, tempore nisi impedit consequatur architecto quisquam?</p>

                    </div>
                    <div className="team-container-contant">
                        <div className="team-taiminal">
                            <div className='team-image '>
                                <img src={Teams} alt="Team Image" />
                            </div>
                            <div className="team-text ">
                                <h1>Emran Hossain</h1>
                                <h4>Smoothie Bartender</h4>
                                <h5><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></h5>
                                <h3><FaQuoteRight /></h3>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, tempore nisi impedit consequatur architecto quisquam?</p>

                    </div>
                </OwlCarousel>

            </Container>
            <Container fluid>
                <Row className="sale-featured">
                    <Col sm={4} className="sale-featured-left-contant ">
                        <p></p>
                        <h4>Summer Sale</h4>
                        <h1>Healthy Kitchen</h1>
                        <h3>Get <b>$15.55</b> Off All Products</h3>
                        <button className='shop-button'><FiShoppingCart /> ADD TO CART</button>
                        <div className="offer-organic">
                            <h2>100%</h2>
                            <h5>ORGANIC</h5>
                        </div>
                    </Col>
                    <Col sm={8} className="sale-featured-right-contant">
                        <div className="sale-featured-button pt-4">
                            <ul>
                                <li className={active === 1 ? 'featured-active-button' : null} onClick={() => filterItem('featered', 1)}>Featured</li>
                                <li className={active === 2 ? 'featured-active-button' : null} onClick={() => filterItem('topRateted', 2)}>Top Rateted</li>
                                <li className={active === 3 ? 'featured-active-button' : null} onClick={() => filterItem('onsale', 3)}>On Sale</li>
                            </ul>
                        </div>
                        <div className="sale-filter-contant">
                            {Product.map(item => (
                                <div className="filter-featured-item">
                                    <div className="filter-featured-item-left">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="filter-featured-item-right">
                                        <Link to={`${item.id}`}>
                                            <h1>{item.name}</h1>
                                            <h2>{item.price}$</h2>
                                        </Link>
                                        <div className="filter-hover-bottun">
                                            <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })} >Add To Cart </button>
                                            <FiHeart />
                                            <AiOutlineRetweet />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Team 