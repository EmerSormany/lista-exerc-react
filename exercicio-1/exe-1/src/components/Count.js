import{ useState } from 'react';

function Count() {

    const [count, setCount] = useState(0);

    const add = () => setCount(count + 1)
    const sub = () => setCount(count - 1)

    return (
        <div style={{ margin: 20}}>
            Count: {count} 
            <div>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
            </div>
        </div>
    )
}

export default Count;