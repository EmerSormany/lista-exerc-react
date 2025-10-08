import './Card.css'
import { themeContext } from '../App'
import { useContext } from 'react'



export default function Card() {
    const {theme, handleBlackTheme, handleWhiteTheme} = useContext(themeContext)
    return (
        <>
            <button onClick={
                () => theme.bg === '#FFFFFF' ? handleBlackTheme() : handleWhiteTheme()
            }> {theme.bg === '#FFFFFF' ? 'Tema Escuro' : 'Tema Claro'}   
            </button>
            <div className="card">
                <h4>Um nome de um poduto.</h4>
                <p>Um preço de um produto.</p>
                <p>Uma descrição de um produto.</p>
            </div>
        </>
    )
}