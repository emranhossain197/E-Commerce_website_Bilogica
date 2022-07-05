import { Container, Row, Col } from "react-bootstrap"
import { Products } from '../assets/data'
import ReactPaginate from "react-paginate"
import '../assets/css/ProductListPageComponent.css'
import { AiFillStar, AiOutlineRetweet } from 'react-icons/ai'
import { useState } from "react"
import NavTwo from "./NavTwo"
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { FiHeart } from 'react-icons/fi'
import Cart from "./Cart"
import { useDispatch } from "react-redux"

const ProductListPageComponent = () => {
    const CartDispatch = useDispatch()
    const [filterPrice, setFilterPrice] = useState(0)

    let AllProduct = Products.map(ProductItem => ProductItem.item)
    // console.log(AllProduct);
    const ProductArr = []
    for (let n = 0; n < AllProduct.length; n++) {
        let result = AllProduct[n]
        for (let i = 0; i < result.length; i++) {

            ProductArr.push(result[i])
        }
    }
    const filterItem = (cateItem) => {
        var arr = Products.filter(item => item.categories === cateItem)
        let product = arr.map(contant => contant.item)
        let filterProduct = []
        for (let u = 0; u < product.length; u++) {
            let allresult = product[u]
            for (let w = 0; w < allresult.length; w++) {
                filterProduct.push(allresult[w])
            }
        }
        setData(filterProduct)
        console.log(setData);

    }

    const [Data, setData] = useState(ProductArr)

    // const Product = Data.slice(0, Data.length)
    const [PageNumber, setPageNumber] = useState(0)
    const UserPerPage = 6;
    const PageVisited = PageNumber * UserPerPage;
    const displayUser = Data.slice(PageVisited, PageVisited + UserPerPage).map((item) => {
        return (
            <div className="product-List-item">
                <div className="prodcut-list-item-img">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="product-list-item-title">
                    <Link to={`/${item.id}`}>
                        <h3 >{item.name}</h3>
                        <h4>$ {item.price} - $ {item.price - 0.24} </h4>
                        <h4><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h4>
                    </Link>
                    {/* style useing the Team component style */}
                    <div className="filter-hover-bottun">
                        <button onClick={() => CartDispatch({ type: "ADD_PRODUCT_TO_CART", payload: item })}>Add To Cart </button>
                        <FiHeart />
                        <AiOutlineRetweet />
                    </div>
                </div>
            </div>
        )
    })

    const pageCount = Math.ceil(Data.length / UserPerPage)
    const PageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <>
            <div className="product-list-contant-nav">
                <NavTwo />
                <Cart />
                <h1 className="text-center">Product List</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> New Product</Link></button>
            </div>
            <Container fluid>
                <div className="product-list-title text-center">
                    <h2>New <b>Products</b> </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit consectetur iste quos iusto reprehenderit molestiae placeat, repudiandae aut quae eos repellendus corrupti aperiam. </p>
                </div>
                <Row>
                    <Col sm={8}>
                        <div className="product-list-contant-product-item">
                            {displayUser}
                            <ReactPaginate
                                // style useing product Grid component style
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                pageCount={pageCount}
                                onPageChange={PageChange}
                                containerClassName={"PanigationBtns"}
                                previousLinkClassName={"previousLinkBtn"}
                                nextLinkClassName={"nextLinkBtn"}
                                disabledClassName={"panigationDisabled"}
                                activeClassName={"activePagBtn"}
                            />
                        </div>
                    </Col>
                    <Col sm={4} className='p-2'>
                        <div className="product-list-contant-filter-contant">
                            <h1>Filter By</h1>
                            <p>Price</p>
                            <input type="range" onChange={(e) => setFilterPrice(e.target.value)} value={filterPrice} min={0} max={1000} name="filterPrice" id="fillterPrice" />
                            <h6><span>${filterPrice}</span> <span>$1000</span></h6>
                            <h1>Categories</h1>
                            <div className="categories-filter-product-list-item">
                                <ul>
                                    {Products.map(item => (
                                        <li onClick={() => filterItem(`${item.categories}`)}><span>{item.categories}</span><span>{item.item.length}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductListPageComponent;