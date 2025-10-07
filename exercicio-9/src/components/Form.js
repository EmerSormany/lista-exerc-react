import { useState } from "react"

export default function From() {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])


    const handleUser = (event) => {
        event.preventDefault()
        setUsers(currentUsers => [...currentUsers, {name, email}])
    }
    
    console.log(users);

    return (
        <>
            <form onSubmit={handleUser}>
                <div>
                    <label>Digite seu nome:</label>
                    <input placeholder="Digite seu nome"
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                <>
                    <label>Digite seu email:</label>
                    <input placeholder="Digite seu email" 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}></input>
                </>
                <>
                    <button type='submit'> Enviar </button>
                </>
            </form>
        </>
    )
}