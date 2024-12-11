import {useState} from "react";
import './coutner.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    );
};