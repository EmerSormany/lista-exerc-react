import { useContext } from "react";
import { AlertContext } from "../App";

export default function Alert() {
    let {alert, setAlert} = useContext(AlertContext)
    console.log(alert);
    
    return(
        <div>
            {alert ? <button onClick={()=> setAlert(!alert)}>X</button>: null}
        </div>
    )
}