import { useState } from "react"

export default function TextControl(params) {
    const [txt, setTxt] = useState('')

    return (
        <>
            <p>
                {[txt]}
            </p>
            <input type="text" value={txt} onChange={e => {
                setTxt(e.target.value)
            }}
            placeholder="Digite algo"
            />
        </>
    )
}