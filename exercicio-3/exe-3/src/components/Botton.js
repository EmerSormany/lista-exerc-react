import { useState } from "react"

export default function Button() {
    const [isOn, setIsOn] = useState(true)

    return (
        <>
            <p>
                { isOn ? 'Mostrando' : 'Escondendo' }
            </p>

            <p>
            <button onClick={() => setIsOn(!isOn)}>Trocar</button>
            </p>

            { isOn && <p>O texto está aparecendo</p>}
        </>
    )
}