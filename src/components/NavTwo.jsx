import '../assets/css/NavTwo.css'
import { BiUser } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineRetweet, AiOutlineSearch } from 'react-icons/ai'
import Logo from '../assets/image/Logo.png'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { BilogicContext } from "../context/BilogicContext";
import { Navbar, Offcanvas, NavDropdown, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'

const NavTwo = () => {
    const { setCartShow, TotalPrice } = useContext(BilogicContext)
    return (
        <Container fluid>
            <div className="navigation-top-title ">
                <p>Welcome to our Origanice store <b>bilogic</b> </p>
                <ul>
                    <li>Returns Police </li>
                    <li>Newsletter</li>
                    <li>Contant</li>
                </ul>
                <div className="login">
                    <h3> <BiUser /> ACCOUNT</h3>
                </div>
            </div>
            <>
                {['lg'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#"><div className="logos">
                                <img src={Logo} alt="" />
                            </div></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <div className="logo">
                                            <img src={Logo} alt="" />
                                        </div>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-center flex-grow-1  pe-3">
                                        <div className='mobile_menu'>
                                            <NavDropdown
                                                title=" Home"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}>

                                                <NavDropdown.Item href="/">
                                                    Home 1
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/HomeTwo">
                                                    Home 2
                                                </NavDropdown.Item>

                                            </NavDropdown>
                                            <Link to='/about'>About </Link>
                                            <NavDropdown
                                                title=" Pages"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                <NavDropdown.Item href="/teamList">
                                                    Team Page
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/blogPage">
                                                    Blog Page
                                                </NavDropdown.Item>

                                            </NavDropdown>
                                            <NavDropdown
                                                title="Shop"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}

                                            >

                                                <NavDropdown.Item href="/NewProductPage">
                                                    Product Grid
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/ProductList">
                                                    Product List
                                                </NavDropdown.Item>

                                            </NavDropdown>
                                            <Link to='/BlogPageTwo'>Blog</Link>
                                            <Link to='/Contact'> Contact</Link>
                                            <div className="menu-icons-contant">
                                                <div className="action-icon">

                                                    <AiOutlineSearch />
                                                    <span></span>
                                                </div>
                                                <div className="action-icon">
                                                    <FiHeart />
                                                    <span></span>
                                                </div>
                                                <div className="action-icon">
                                                    <AiOutlineRetweet />
                                                    <span></span>
                                                </div>
                                                <div className="action-icon">
                                                    <FiShoppingCart onClick={() => setCartShow(true)} />
                                                    <span>$ {TotalPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-contant">
                                            <div className="logo">
                                                <img src={Logo} alt="" />
                                            </div>
                                            <ul>
                                                <li><button className='menu-btn'>Home <BsPlusLg /></button>
                                                    <ol className='hover-menu'>
                                                        <Link to='/'> <li>Home 1</li></Link>
                                                        <Link to='/HomeTwo'><li>Home 2</li></Link>
                                                        <li>Home 3</li>
                                                    </ol>
                                                </li>
                                                <Link to='/about'><li>About <BsPlusLg /> </li></Link>
                                                <li><button className='menu-btn'>Pages <BsPlusLg /></button>
                                                    <ol className='hover-menu'>
                                                        <Link to='/teamList'> <li>Team List </li></Link>
                                                        <Link to='/blogPage'><li>Blog Page</li></Link>

                                                    </ol>
                                                </li>
                                                <li><button className='menu-btn'>Shop <BsPlusLg /></button>
                                                    <ol className='hover-menu'>
                                                        <Link to='/NewProductPage'> <li>Product Grid</li></Link>
                                                        <Link to='/ProductList'><li>Product List</li></Link>

                                                    </ol>
                                                </li>

                                                <Link to='/BlogPageTwo'>
                                                    <li>Blog</li>
                                                </Link>
                                                <Link to='/Contact'> <li>Contact</li></Link>
                                            </ul>
                                            <div className="menu-icons-contant">
                                                <div className="action-icon">

                                                    <AiOutlineSearch />
                                                    <span></span>
                                                </div>
                                                <div className="action-icon">
                                                    <FiHeart />
                                                    <span></span>
                                                </div>
                                                <div className="action-icon">
                                                    <AiOutlineRetweet />
                                                    <span></span>
                                                </div>
                                                <div className="action-icon">
                                                    <FiShoppingCart onClick={() => setCartShow(true)} />
                                                    <span>$ {TotalPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
            {/* <Container>
                <div className="menu-contant">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <ul>
                        <li><button className='menu-btn'>Home <BsPlusLg /></button>
                            <ol className='hover-menu'>
                                <Link to='/'> <li>Home 1</li></Link>
                                <Link to='/HomeTwo'><li>Home 2</li></Link>
                                <li>Home 3</li>
                            </ol>
                        </li>
                        <Link to='/about'><li>About <BsPlusLg /> </li></Link>
                        <li><button className='menu-btn'>Pages <BsPlusLg /></button>
                            <ol className='hover-menu'>
                                <Link to='/teamList'> <li>Team List </li></Link>
                                <Link to='/blogPage'><li>Blog Page</li></Link>

                            </ol>
                        </li>
                        <li><button className='menu-btn'>Shop <BsPlusLg /></button>
                            <ol className='hover-menu'>
                                <Link to='/NewProductPage'> <li>Product Grid</li></Link>
                                <Link to='/ProductList'><li>Product List</li></Link>

                            </ol>
                        </li>
                        <Link to='/BlogPageTwo'>
                            <li>Blog</li>
                        </Link>
                        <Link to='/Contact'> <li>Contact</li></Link>
                    </ul>
                    <div className="menu-icons-contant">
                        <div className="action-icon">

                            <AiOutlineSearch />
                            <span></span>
                        </div>
                        <div className="action-icon">
                            <FiHeart />
                            <span></span>
                        </div>
                        <div className="action-icon">
                            <AiOutlineRetweet />
                            <span></span>
                        </div>
                        <div className="action-icon">
                            <FiShoppingCart onClick={() => setCartShow(true)} />
                            <span>$ {TotalPrice}</span>
                        </div>
                    </div>
                </div>
            </Container> */}
        </Container>
    )
}
export default NavTwo