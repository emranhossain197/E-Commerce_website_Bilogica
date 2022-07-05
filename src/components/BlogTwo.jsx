import '../assets/css/BlogTwo.css'
import NavTwo from './NavTwo'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Blogs } from '../assets/BlogData';
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import RightContantFeature from './RightContantFeature'
import Cart from './Cart'

const BlogTwo = () => {

    const [Blog, setBlog] = useState(Blogs)
    const [PageNumber, setPageNumber] = useState(0)
    const UserPerPage = 3;
    const Pagevisited = UserPerPage * PageNumber
    const displayUser = Blog.slice(Pagevisited, Pagevisited + UserPerPage).map((item) => {
        return (
            <div className="Blog-Two-contant-item">
                <img src={item.image} alt={item.title} />
                <div className="blog-two-contant-title">
                    <Link to={`/Blog/${item.id}`}>
                        <h6>{item.publishedAt}</h6>
                        <h2>{item.title}</h2>
                        <p>{item.othertitle}</p>
                    </Link>
                </div>
            </div>
        )
    })

    const pageCount = Math.ceil(Blog.length / UserPerPage)
    const PageChange = ({ selected }) => {
        setPageNumber(selected)
    }



    return (
        <>
            <div className="BlogTwo-navigation">
                <NavTwo />
                <Cart/>
                <h1 className='text-center'>Blog </h1>
                <button className="title-button"><Link to='/'> <BsArrowRightShort /> <b>Home / </b> About</Link></button>
            </div>
            <Container>
                <Row className='blog-two-contant'>
                    <Col sm={8}>
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

                    </Col>
                    <Col sm={4}>
                        <RightContantFeature />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogTwo;