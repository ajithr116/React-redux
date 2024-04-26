import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../features/counter/counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () =>{

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    return(
        <div>
            <h1>Count : {count}</h1>
            <button className="btn btn-success px-3 m-1" onClick={()=>dispatch(increment())}> Increment </button>
            <button className="btn btn-danger px-3 m-1" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter;