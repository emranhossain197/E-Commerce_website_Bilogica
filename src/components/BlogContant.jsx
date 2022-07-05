import NavTwo from './NavTwo'
import { BsArrowRightShort } from 'react-icons/bs'
import '../assets/css/BlogContantStyle.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Blogs } from '../assets/BlogData'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import Cart from './Cart'

const BlogContant = () => {
    const [Blog, setBlog] = useState(Blogs)
    const [PageNumber, setPageNumber] = useState(0)
    const UserPerPage = 6;
    const Pagevisited = UserPerPage * PageNumber
    const displayUser = Blog.slice(Pagevisited, Pagevisited + UserPerPage).map((item) => {
        return (
            <div className="blog-item">
                <Link to={`/Blog/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <p>{item.publishedAt}</p>
                    <h2>{item.title}</h2>
                </Link>
            </div>
        )
    })

    const pageCount = Math.ceil(Blog.length / UserPerPage)
    const PageChange = ({ selected }) => {
        setPageNumber(selected)
    }


    return (
        <>
            <div className="blogs-navigation">
                <NavTwo />
                <Cart/>
                <h1 className="text-center">Blog Page</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> Blog</Link></button>
            </div>
            <Container className='mt-5 blog-contant'>
                <div className='blog-pagination-contant'>
                    {displayUser}
                </div>
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
            </Container>
        </>
    )
}

export default BlogContant;