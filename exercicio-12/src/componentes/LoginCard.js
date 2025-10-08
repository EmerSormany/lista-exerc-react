import { useState,useContext } from "react"
import { loginUserContext } from "../App"


export default function LoginCard() {
    const {login} = useContext(loginUserContext)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        login(email, password)
    }
    
    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label >
                    Digite seu email:
                </label>
                <input placeholder="Digite seu email..." 
                    value={email} type='email' 
                    onChange={e => setEmail(e.target.value)}></input>
                <label >
                    Digite sua senha:
                </label>
                <input placeholder="Digite sua senha..." 
                    value={password} type="password" 
                    onChange={e => setPassword(e.target.value)}></input>
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}

