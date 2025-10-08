import { useState } from 'react'
import './Card.css'

export function Card() {

    const [isMouseOn, setMouseOn] = useState(false)
    const [bgColor, setBgColor] = useState('#eaf9feff')

    const handleMouseOn = () => {
        setBgColor('#007da6')
        setMouseOn(true)
    }

    const handleMouseOff = () => {
        setBgColor('#eaf9feff')
        setMouseOn(false)
    }

    return (
        <div className="card"
         style={{backgroundColor: bgColor}} 
        onMouseEnter={handleMouseOn} 
        onMouseLeave={handleMouseOff}
        >
            <h6>Um nome de um poduto.</h6>
            <p>Um preço de um produto.</p>
            <p>Uma descrição de um produto.</p>
        </div>
    )
}