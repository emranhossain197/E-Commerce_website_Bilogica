import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/css/OfferTimeCount.css'

const OfferTimeCount = () => {
    const [TimeDay, setTimeDay] = useState('00')
    const [TimeHours, setTimeHours] = useState('00')
    const [TimeMinutes, setTimeMinutes] = useState('00')
    const [TimeSecond, setTimeSecond] = useState('00')

    let Intervel = useRef()

    const OfferFunction = () => {
        const OfferTime = new Date('June 25 2023 00:00:00')
        Intervel = setInterval(() => {
            const now = new Date().getTime()
            const Offer = OfferTime - now;

            const days = Math.floor(Offer / (1000 * 60 * 60 * 24))
            const hours = Math.floor((Offer % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const Minutes = Math.floor((Offer % (1000 * 60 * 60)) / (1000 * 60))
            const second = Math.floor((Offer % (1000 * 60)) / 1000)
            if (Offer < 0) {
                clearInterval(Intervel.current)
            } else {
                setTimeDay(days)
                setTimeHours(hours)
                setTimeMinutes(Minutes)
                setTimeSecond(second)
            }
        }, 1000)
    }
    useEffect(() => {
        OfferFunction()
        return () => {
            clearInterval(Intervel.current)
        }
    })
    return (
        <Container>
            <Row>
                <Col>
                    <div className="sales-title text-center">
                        <h1>Today <b>Flash </b>Sales</h1>
                        <p>Aliquam pretium tellus vel sem condimentum faucibus Curabitur egestas pellentesque felis ut vahicul. cras faucibus purus sed risus</p>
                        <h3>Ends in: <span> {TimeDay} d</span> <span>{TimeHours} h</span> <span>{TimeMinutes} m</span> <span>{TimeSecond} s</span></h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )


}

export default OfferTimeCount;