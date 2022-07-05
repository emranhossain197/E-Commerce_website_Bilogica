import '../assets/css/Contacts.css'
import NavTwo from './NavTwo'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { ImOffice } from 'react-icons/im'
import { MdAttachEmail } from 'react-icons/md'
import Cart from './Cart'

const Contacts = () => {
    const [Email, setEmail] = useState('')
    const [Data, setData] = useState([])
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Phone, setPhone] = useState('')
  
    //    chekc the input name valid check function make 


    // check the email valid function make
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    const AddData = (e, Email, firstName, lastName, Phone) => {
        e.preventDefault()
        if (Email === '' && firstName === '' && lastName === '' && Phone === "") {
            
            setEmail('')
            setFirstName('')
            setLastName('')
            setPhone('')
        } else if (!isEmail(Email) && !Number(Phone)) {
            
            setEmail('')
            setFirstName('')
            setLastName('')
            setPhone('')
        } else {
            const subscribe = {
                id: Date.now(),
                Email,
                firstName,
                lastName,
                Phone
            }

            setData([subscribe, ...Data])
            setEmail('')
            setFirstName('')
            setLastName('')
            setPhone('')
           
        }

    }
    return (
        <>
            <div className="contact-nav">
                <NavTwo />
                <Cart/>
                <button className="title-button "><Link to='/'> <BsArrowRightShort /> <b>Home / </b> New Product</Link></button>
            </div>
            <Container>
                <div className="contact-title">
                    <h3># Contact </h3>
                    <h1>Get in tech any time for</h1>
                    <h2>ANY HELP</h2>
                </div>
            </Container>
            <Container className='mb-5'>
                <Row >
                    <Col className='contact-message' sm={8} >
                        
                        <div className="input-contant-contact">
                            <div className="contact-input">
                                <input type="text" name="FirstName*" onChange={(e) => setFirstName(e.target.value)} value={FirstName} placeholder='First Name ' />
                                <input type="email" name="email" id="email" placeholder='E-mail*' onChange={(e) => setEmail(e.target.value)} value={Email} />
                            </div>
                            <div className="contact-input">
                                <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} value={LastName} id="lastName" placeholder='Last Name*' />
                                <input type="number" onChange={(e) => setPhone(e.target.value)} value={Phone} name="number" id="number" placeholder='Phone Number*' />
                            </div>
                        </div>
                        <textarea name='Message' placeholder='Comment' rows={8}></textarea>
                        <button onClick={(e) => AddData(e, Email, FirstName, LastName, Phone)} className='contact-button' >Message Me</button>
                    </Col>
                    <Col sm={4} className="contact-details pt-3">
                        <div className="contact-details-item  row d-flex align-items-center">
                            <Col sm={3}>
                                <FaAddressBook />
                            </Col>
                            <Col sm={9}>
                                <h5>Address </h5>
                                <p> Address: 66 Broklyn Stret <br /> United State America</p>
                            </Col>
                        </div>
                        <div className="contact-details-item row d-flex align-items-center">
                            <Col sm={3}>
                                <ImOffice />
                            </Col>
                            <Col sm={9}>
                                <h5>Office Number </h5>
                                <p>Phene : +8801917851640<br />
                                    Phone : +8801917851640</p>
                            </Col>
                        </div>
                        <div className="contact-details-item row d-flex align-items-center">
                            <Col sm={3}>
                                <MdAttachEmail />
                            </Col>
                            <Col sm={9}>
                                <h5>Office E-mail </h5>
                                <p>E-mail: emailname@gamil.com<br />
                                    E-mail: emailname@gamil.com</p>
                            </Col>
                        </div>

                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default Contacts