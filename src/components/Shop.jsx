import NavTwo from './NavTwo'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { Products } from '../assets/data'
import '../assets/css/Shop.css'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillStar, AiOutlineRetweet } from 'react-icons/ai'
import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import Cart from './Cart'

const Shop = () => {
    const CartDispatch = useDispatch()
    const [Order, setOrder] = useState(0)
    const { productId } = useParams()

    let AllProduct = Products.map(ProductItem => ProductItem.item)
    // console.log(AllProduct);
    const ProductArr = []
    for (let n = 0; n < AllProduct.length; n++) {
        let result = AllProduct[n]
        for (let i = 0; i < result.length; i++) {

            ProductArr.push(result[i])
        }
    }

    const products = ProductArr.filter(item => item.id === productId)

    const ProductData = []
    // all Product array
    for (let x = 0; x < ProductArr.length; x++) {
        if (x === 3) break
        ProductData.push(ProductArr[x])
    }

    // related product list 
    const relatedProduct = ProductArr.filter(item => item.categorie === products[0].categorie)
    const ProductList = []
    for (let x = 0; x < relatedProduct.length; x++) {
        if (x === 4) break
        ProductList.push(relatedProduct[x])
    }


    return (
        <>
            <div className="Shop-navigation">
                <NavTwo />
                <Cart />
                <h1 className='text-center'>Blog </h1>
                <button className="title-button"><Link to='/'> <BsArrowRightShort /> <b>Home / </b> About</Link></button>
            </div>
            <Container fluid>
                <Row className='product-contant '>


                    <Col sm={5} className='products-img '>
                        {products.map(item => (
                            <img src={item.image} alt={item.name} />
                        ))}
                    </Col>
                    <Col sm={4} className="product-details">
                        {products.map(item => (<>
                            <h2>{item.name}</h2>
                            <h6>$ {item.price} - $ {(item.price - 5.32).toFixed(2)}</h6>
                            <h6><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h6>
                            <p>{item.info[0]}</p>
                            <h5>Availability : <b>In Stock</b></h5>
                            <div className="product-number">
                                <input onChange={(e) => setOrder(e.target.value)} value={Order} type="number" name="product" id="product" />
                                <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })} >ADD TO CART</button>
                            </div>
                            <h4>SKU : VG 2019</h4>
                            <h4>Categories : {item.categorie}</h4>
                        </>
                        ))}
                    </Col>
                    <Col sm={3}>
                        <h1>Best Seller</h1>
                        {ProductData.map(item => (
                            <Link to={`/${item?.id}`}>
                                <div className="best-seller">
                                    <div className="best-seller-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="best-seller-title">
                                        <h3>{item.title}</h3>
                                        <h4>${item.price} - ${item.price - 0.59}</h4>
                                        <h4><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h4>
                                        <div className="filter-hover-bottun">
                                            <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })}>Add To Cart </button>
                                            <FiHeart />
                                            <AiOutlineRetweet />
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
            <Container>
                {/* <div className="details-shop-contant">
                    <ul>
                        <li onClick={() => ItemContant('description', 1)}>Description </li>
                        <li>Additional Info </li>
                        <li>Reviews</li>
                    </ul>
                </div> */}
            </Container>
            <Container>
                <div className='related-product'>
                    <h1>Related Products</h1>
                    <div className="related-product-contant">
                        {ProductList.map(item => (
                            <div className="related-product-item">
                                <Link to={`/${item?.id}`}>
                                    <img src={item.image} alt="" />
                                    <h3>{item.name}</h3>
                                    <h4>$ {item.price}</h4>
                                    <h4><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h4>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Shop;