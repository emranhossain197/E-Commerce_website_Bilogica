import { FiFacebook, FiHeart, FiShoppingCart } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'
import { AiOutlineInstagram, AiOutlineMenu, AiOutlineRetweet } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import Logo from '../assets/image/Logo.png'
import { BiUser } from 'react-icons/bi'
import { BsChevronDown, BsPlusLg } from 'react-icons/bs'
import Typed from 'typed.js'
import { useEffect, useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/NavigationStyle.css'
import { Products } from '../assets/data'
import { BilogicContext } from "../context/BilogicContext";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Navbar, Offcanvas, NavDropdown, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'

const Navigation = () => {
    const [product, setProducts] = useState(Products)
    const [Browse, setBrowse] = useState(false)
    const { setCartShow, TotalPrice } = useContext(BilogicContext)
    // type. js use the useRef  
    const typeTarget = useRef(null);
    // use the typed.js the text animation 
    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["select for any items .... ", "search for anything..", 'search product name ....'],
            typeSpeed: 120,
            attr: 'placeholder',
            loop: true,

        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            {/* Navigation Top Section start */}
            <div className="navigation-top-contant">
                <p>Welcome to our Origanice store <b>bilogic</b> </p>

                <ul>
                    <li>Returns Police </li>
                    <li>Newsletter</li>
                    <li>Contant</li>
                </ul>
                <div className="navigation-top-icons">
                    <FiFacebook />
                    <ImWhatsapp />
                    <AiOutlineInstagram />
                    <FiTwitter />
                </div>
            </div>
            {/* Navigation Top Section end */}
            <>
                {['lg'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#"><div className="Logos">
                                <img src={Logo} alt="Logo" />
                            </div></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-center flex-grow-1  pe-3">
                                        <div className='navigation-contant '>
                                            {/* Navigation center and search, icons section start */}
                                            <div className="navigation-center-contant">
                                                <div className="logo">
                                                    <img src={Logo} alt="Logo" />
                                                </div>
                                                <div className="navigation-search">
                                                    <input type="text" name="search" id="search" ref={typeTarget} />
                                                    <select name="categories" id="categories">
                                                        <option value="All categories" selected disabled>All categories</option>
                                                        {product.map(data => (
                                                            <option value={data.categories}>{data.categories}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="navigation-action-contant">
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
                                                    <div className="action-icon">
                                                        <BiUser /><span>ACCOUNT</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Navigation center and search, icons section end */}
                                            {/* Navigatin menu section start */}
                                            <div className="navigation">
                                                <NavDropdown
                                                    title=" Browse All Categories"
                                                    id={`offcanvasNavbarDropdown-expand-${expand}`}

                                                >
                                                    {product.map(item => (
                                                        <NavDropdown.Item href="#action5">
                                                            <Link to='/ProductList'> <li>{item.categories}</li></Link>
                                                        </NavDropdown.Item>
                                                    ))}
                                                </NavDropdown>
                                                <div className="navigation">
                                                    <div className="mobile_menu">
                                                        <NavDropdown
                                                            title=" Home"
                                                            id={`offcanvasNavbarDropdown-expand-${expand}`}

                                                        >

                                                            <NavDropdown.Item href="/">
                                                                Home 1
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item href="/HomeTwo">
                                                                Home 2
                                                            </NavDropdown.Item>

                                                        </NavDropdown>
                                                        <NavDropdown
                                                            title=" Pages"
                                                            id={`offcanvasNavbarDropdown-expand-${expand}`}

                                                        >

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
                                                        <Link to='/BlogPageTwo'><li>Blog</li></Link>
                                                        <Link to='/Contact'> <li>Contact</li></Link>
                                                    </div>
                                                    <div className="menu">
                                                        <ul>
                                                            <li><button className='menu-btn'>Home <BsPlusLg /></button>
                                                                <ol className='hover-menu'>
                                                                    <Link to='/'> <li>Home 1</li></Link>
                                                                    <Link to='/HomeTwo'><li>Home 2</li></Link>
                                                                    <li>Home 3</li>
                                                                </ol>
                                                            </li>
                                                            <li><button className='menu-btn'>Pages <BsPlusLg /></button>
                                                                <ol className='hover-menu'>
                                                                    <Link to='/teamList'> <li>Team Page </li></Link>
                                                                    <Link to='/ProductList'><li>Blog Page</li></Link>

                                                                </ol>
                                                            </li>
                                                            <li><button className='menu-btn'>Shop <BsPlusLg /></button>
                                                                <ol className='hover-menu'>
                                                                    <Link to='/NewProductPage'> <li>Product Grid </li></Link>
                                                                    <Link to='/ProductList'><li>Product List</li></Link>

                                                                </ol>
                                                            </li>
                                                            <Link to='/BlogPageTwo'><li>Blog</li></Link>
                                                            <Link to='/Contact'> <li>Contact</li></Link>
                                                        </ul>

                                                    </div>
                                                    <div className="sab-manu">
                                                        <ul>
                                                            <li>Flash Sale </li>
                                                            <li>Offer Sale</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Navigation menu section end */}
                                        </div>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
            {/* mobile response icon  */}
            {/* <div className="response-contant">
                <img src={Logo} alt="Logo" />
                <GiHamburgerMenu />
            </div> */}
            {/* Navigation center and search, icons section start */}
            {/* <div className='navigation-contant'>
                <div className="navigation-center-contant">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="navigation-search">
                        <input type="text" name="search" id="search" ref={typeTarget} />
                        <select name="categories" id="categories">
                            <option value="All categories" selected disabled>All categories</option>
                            {product.map(data => (
                                <option value={data.categories}>{data.categories}</option>
                            ))}
                        </select>
                    </div>
                    <div className="navigation-action-contant">
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
                        <div className="action-icon">
                            <BiUser /><span>ACCOUNT</span>
                        </div>
                    </div>
                </div>
               
                <div className="navigation">
                    <div className="menu">
                        <ul>
                            <li className='menu-button' onClick={() => setBrowse(!Browse)}><AiOutlineMenu /> Browse All Categories <BsChevronDown /> </li>
                           
                            <li><button className='menu-btn'>Home <BsPlusLg /></button>
                                <ol className='hover-menu'>
                                    <Link to='/'> <li>Home 1</li></Link>
                                    <Link to='/HomeTwo'><li>Home 2</li></Link>
                                    <li>Home 3</li>
                                </ol>
                            </li>
                            <li><button className='menu-btn'>Pages <BsPlusLg /></button>
                                <ol className='hover-menu'>
                                    <Link to='/teamList'> <li>Team Page </li></Link>
                                    <Link to='/blogPage'><li>Blog Page</li></Link>

                                </ol>
                            </li>
                            <li><button className='menu-btn'>Shop <BsPlusLg /></button>
                                <ol className='hover-menu'>
                                    <Link to='/NewProductPage'> <li>Product Grid </li></Link>
                                    <Link to='/ProductList'><li>Product List</li></Link>

                                </ol>
                            </li>
                            <Link to='/BlogPageTwo'><li>Blog</li></Link>
                            <Link to='/Contact'> <li>Contact</li></Link>
                        </ul>
                        <div className={Browse ? "sab-link" : 'non-sab-link'}>
                            <ol>
                                {product.map(item => (
                                    <Link to='/ProductList'> <li>{item.categories}</li></Link>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="sab-manu">
                        <ul>
                            <li>Flash Sale </li>
                            <li>Offer Sale</li>
                        </ul>
                    </div>
                </div>
               
            </div> */}
        </>

    )

}
export default Navigation