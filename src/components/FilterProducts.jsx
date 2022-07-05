import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineRetweet } from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Products } from "../assets/data"
import '../assets/css/FilterProducts.css'
import { useDispatch } from "react-redux"

const FilterProducts = () => {
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
        if (x === 8) break
        ProductData.push(ProductArr[x])
    }


    const [products, setProducts] = useState(ProductData)
    const filterItem = (cateItem, event) => {
        setActive(event)

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
                if (x === 8) break
                ProductDataI.push(filterProduct[x])
            }

            setProducts(ProductDataI)
        }

    }

    return (
        <Container fluid>
            <div className="Now-product-contant">
                <h1>New <b>Products</b> </h1>
                <p>Vegetables are usually classified on the basis of the part of the plant that is used for food. The root vegetables include beets, </p>
                <div className="categories-contant">
                    <ul>
                        <li className={active === 1 ? 'categorie-active-button' : null} onClick={() => filterItem('All', 1)}>All</li>
                        <li className={active === 2 ? 'categorie-active-button' : null} onClick={() => filterItem('Vegetable', 2)}>Vegetable</li>
                        <li className={active === 3 ? 'categorie-active-button' : null} onClick={() => filterItem('Fresh Fruits', 3)}>Fresh Fruits</li>
                        <li className={active === 4 ? 'categorie-active-button' : null} onClick={() => filterItem('Spices', 4)}>Spices</li>
                        <li className={active === 5 ? 'categorie-active-button' : null} onClick={() => filterItem('Beverages', 5)}>Beverages</li>
                        <li className={active === 6 ? 'categorie-active-button' : null} onClick={() => filterItem('Nature', 6)}>Nature</li>
                    </ul>
                </div>
            </div>
            <div className="filter-contant">
                {products.map(item => (
                    <div className='filter-item'>
                        <img src={item?.image} alt={item?.name} />
                        <Link to={`/${item?.id}`}>
                            <h2>{item?.name}</h2>
                            <p>$ {item?.price}</p>
                            <h3 className='start'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
                        </Link>
                        <div className="filter-icon">
                            <BsHeart /> <AiOutlineRetweet />
                            <FiShoppingCart onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })} />
                        </div>
                    </div>
                ))}
            </div>

        </Container>
    )
}
export default FilterProducts;