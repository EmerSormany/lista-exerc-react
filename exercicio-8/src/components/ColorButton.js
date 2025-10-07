import { bgColorContext } from "../App"
import {useContext} from 'react'

export default function ColorButton() {
    
    const { setColorBG } = useContext(bgColorContext)
    
    return (
        <>
            <button onClick={()=>setColorBG('#7e0909ff')}>
                Vermelho
            </button>
            <button onClick={()=>setColorBG('#000000ff')}>
                Preto
            </button>
            <button onClick={()=>setColorBG('#dc610fff')}>
                Laranja
            </button>
            <button onClick={()=>setColorBG('#00CCFF')}>
                Azul Celeste
            </button>
            <button onClick={()=> setColorBG('#282c34')}>
                Oririnal
            </button>
        </>
    )
}