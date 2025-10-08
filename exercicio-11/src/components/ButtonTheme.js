import { useContext } from "react"
import { themeContext } from "../App"

export default function ButtonTheme() {

    const {theme, handleBlackTheme, handleWhiteTheme} = useContext(themeContext)

    return (

        <button onClick={
            () => theme.bg === '#FFFFFF' ? handleBlackTheme() : handleWhiteTheme()
        }> 
            {theme.bg === '#FFFFFF' ? 'Tema Escuro' : 'Tema Claro'}   
        </button>
    )
}