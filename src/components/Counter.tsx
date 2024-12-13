import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <span>{count}</span>
            <button className={classes.button} onClick={increment}>+</button>
        </>
    );
};