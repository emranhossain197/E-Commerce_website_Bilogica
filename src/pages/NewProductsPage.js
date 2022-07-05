import NavTwo from "../components/NavTwo"
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from "react-router-dom"
import '../assets/css/NewProductPageStyle.css'
import { Container } from "react-bootstrap"
import { Products } from '../assets/data'
import { useState } from "react"
import { AiFillStar } from 'react-icons/ai'
import FooterTwo from '../components/FooterTwo'
import ReactPanigete from 'react-paginate'
import Cart from "../components/Cart"

const NewProductPage = () => {

    let AllProduct = Products.map(ProductItem => ProductItem.item)
    // console.log(AllProduct);
    const ProductArr = []
    for (let n = 0; n < AllProduct.length; n++) {
        let result = AllProduct[n]
        for (let i = 0; i < result.length; i++) {

            ProductArr.push(result[i])
        }
    }

    const Product = ProductArr.slice(0, ProductArr.length)
    const [PageNumber, setPageNumber] = useState(0)
    const UserPerPage = 8;
    const PageVisited = PageNumber * UserPerPage;
    const displayUser = ProductArr.slice(PageVisited, PageVisited + UserPerPage).map((item) => {
        return (
            <div className="new-product-item ">
                <Link to={`/${item?.id}`}>
                    <img src={item.image} alt={item.name} />
                    <h3 >{item.name}</h3>
                    <h4>$ {item.price} - $ {item.price - 0.24} </h4>
                    <h4><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h4>
                </Link>
            </div>
        )
    })

    const pageCount = Math.ceil(ProductArr.length / UserPerPage)
    const PageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <>
            <div className="Now-product-page-Nav">
                <NavTwo />
                <Cart />
                <h1 className="text-center">Product Grid</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> New Product</Link></button>
            </div>
            <Container className="text-center">
                <div className="new-product-title">
                    <h2>New <b>Products</b> </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit consectetur iste quos iusto reprehenderit molestiae placeat, repudiandae aut quae eos repellendus corrupti aperiam. </p>
                </div>
                <div className="new-product-contant">
                    {displayUser}
                    <ReactPanigete
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
            </Container>
            <FooterTwo />

        </>
    )
}

export default NewProductPage