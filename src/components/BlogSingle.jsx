import NavTwo from './NavTwo'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import '../assets/css/BlogSingle.css'
import { useParams } from 'react-router-dom'
import { Blogs } from '../assets/BlogData'
import { Col, Container, Row } from 'react-bootstrap'
import RightContantFeature from './RightContantFeature'
import Cart from './Cart'

const BlogSingle = () => {
    const { BlogId } = useParams()
    const BlogItem = Blogs.filter(item => item.id === BlogId)
    console.log(BlogId);

    return (
        <>
            <div className="Blog-Single-nav">
                <NavTwo />
                <Cart/>
                <h1 className="text-center">Blog</h1>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> Blog</Link></button>
            </div>
            <Container className='Blog-single-contant'>
                <Row>
                    <Col sm={8}>
                        {BlogItem.map(item => (
                            <>
                                <img className='blog-first-img' src={item.image} alt={item.title} />
                                <h6>{item.publishedAt}</h6>
                                <h1>{item.title}</h1>
                                <p>{item.Description}</p>
                                <p>{item.author}</p>
                                <div className="blog-other-title">
                                    <img className='blog-second-img' src={item.imageTwo} alt={item.title} />
                                    <h4 >{item.Description}</h4>
                                </div>
                                <p>{item.othertitle}</p>
                                <h5>Tags: {item.title}</h5>
                            </>
                        ))}
                    </Col>
                    <Col sm={4}>
                        <RightContantFeature />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BlogSingle