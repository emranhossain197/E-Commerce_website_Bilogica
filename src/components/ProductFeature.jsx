import { Col, Container, Row } from 'react-bootstrap'
import '../assets/css/ProductFeature.css'
import { useState } from 'react'
import { Products } from '../assets/data'
import { AiOutlineRetweet } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { FiHeart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

const ProductFeature = () => {
    const CartDispatch = useDispatch()
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
    const [product, setProduct] = useState(ProductData)
    return (
        <Container fluid >
            <div className="Product-Feature-title">
                <h1>Latest <b>Airrvals <br /> Feature </b> Dishes</h1>
                <div className="Product-Feature-title-p">
                    <h1>Hot Deals </h1>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        {product.map(item => (
                            <div className="Product-feature-contant-card">
                                <div className="feature-card-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="feature-card-title">
                                    <Link to={`/${item.id}`}>
                                        <h1>{item.name}</h1>
                                        <h2>{item.price}$</h2>
                                    </Link>
                                    {/* button style useing the team component feature sale section button style use */}
                                    <div className="filter-hover-bottun">
                                        <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })}>Add To Cart </button>
                                        <FiHeart />
                                        <AiOutlineRetweet />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col className='feature-card'>
                        {product.map(item => (
                            <div className="Product-feature-contant-card">
                                <div className="feature-card-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="feature-card-title">
                                    <Link to={`/${item.id}`}>
                                        <h1>{item.name}</h1>
                                        <h2>{item.price}$</h2>
                                    </Link>
                                    {/* button style useing the team component feature sale section button style use */}
                                    <div className="filter-hover-bottun">
                                        <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })}>Add To Cart </button>
                                        <FiHeart />
                                        <AiOutlineRetweet />
                                    </div>
                                </div>
                            </div>
                        ))}</Col>
                    <Col className='feature-card'>
                        {product.map(item => (
                            <div className="Product-feature-contant-card">
                                <div className="feature-card-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="feature-card-title">
                                    <Link to={`/${item.id}`}>
                                        <h1>{item.name}</h1>
                                        <h2>{item.price}$</h2>
                                    </Link>
                                    {/* button style useing the team component feature sale section button style use */}
                                    <div className="filter-hover-bottun">
                                        <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })}>Add To Cart </button>
                                        <FiHeart />
                                        <AiOutlineRetweet />
                                    </div>
                                </div>
                            </div>
                        ))}</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ProductFeature
