import { useEffect, useRef, useState } from 'react';
import '../assets/css/OfferTimeComponent.css'

const OfferTimeComponent = () => {
    const [TimeDay, setTimeDay] = useState('00')
    const [TimeHours, setTimeHours] = useState('00')
    const [TimeMinutes, setTimeMinutes] = useState('00')


    let Intervel = useRef()

    const OfferFunction = () => {
        const OfferTime = new Date('June 25 2023 00:00:00')
        Intervel = setInterval(() => {
            const now = new Date().getTime()
            const Offer = OfferTime - now;

            const days = Math.floor(Offer / (1000 * 60 * 60 * 24))
            const hours = Math.floor((Offer % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const Minutes = Math.floor((Offer % (1000 * 60 * 60)) / (1000 * 60))
            if (Offer < 0) {
                clearInterval(Intervel.current)
            } else {
                setTimeDay(days)
                setTimeHours(hours)
                setTimeMinutes(Minutes)
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
        <div className="offer-Time-container">
            <h2>Best Deals for week</h2>
            <h1>Grab the best <br /> <b>offer of this </b> week !</h1>
            <div className="offer-time-container-item">
                <div className="offer-item-time">
                    <h3>{TimeDay}</h3>
                    <h4>Days</h4>
                </div>
                <div className="offer-item-time">
                    <h3>{TimeHours}</h3>
                    <h4>Hours</h4>
                </div>
                <div className="offer-item-time">
                    <h3>{TimeMinutes}</h3>
                    <h4>Minutes</h4>
                </div>
            </div>
        </div>
    )
}
export default OfferTimeComponent