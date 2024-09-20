import React, {useState} from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            counter: {counter}
            <button className={classes.btn} onClick={increase}>Click +</button>

        </div>
    );
};

