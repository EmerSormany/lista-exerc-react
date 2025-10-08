import { useContext } from "react"
import { loginUserContext } from "../App"


export default function UserCard() {
    const {user} = useContext(loginUserContext)
    console.log(user);
    const name = user.e.split('@')
    console.log(name);
    
    return (
        <>
            <p>{name[0] ? `Olá, ${name[0]}` : ''}</p>
        </>
    )
}