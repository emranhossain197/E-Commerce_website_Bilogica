import { Container } from "react-bootstrap";
import { useState } from "react";
import { Products } from "../assets/data";
import '../assets/css/ProductList.css'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineRetweet } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import OwlCarousel from 'react-owl-carousel';
import { useDispatch } from "react-redux";


const ProductList = () => {
    const CartDispatch = useDispatch()
    const AllProduct = Products.map(item => item.item)
    let ProductArr = []
    for (let n = 0; n < AllProduct.length; n++) {
        let result = AllProduct[n]
        for (let i = 0; i < result.length; i++) {

            ProductArr.push(result[i])
        }
    }

    const [Product, setProduct] = useState(ProductArr)
    const options = {
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: false,
        loop: true,
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
                items: 2,
            },
            1000: {
                items: 4,

            }
        },
    };
    return (
        <Container className="productlist-carousel">
            <OwlCarousel className="owl-theme" {...options}>
                {Product.map(item => (
                    <div className='crid-contant'>
                        <img src={item.image} alt="Image" />
                        <h2>{item.name}</h2>
                        <p>$ {item.price - 1} %  - <del> $ {item.price} </del> </p>
                        <h3 className='start'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
                        <div className='crid-hover'>
                            <div className="crid-icon">
                                <BsHeart /> <AiOutlineRetweet />
                                <FiShoppingCart onClick={()=> CartDispatch({type:"ADD_PRODUCT_TO_CART", payload: item})} />
                            </div>
                            <Link to={`${item.id}`}>
                                <button className='more'>More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </Container>
    )
}
export default ProductList;