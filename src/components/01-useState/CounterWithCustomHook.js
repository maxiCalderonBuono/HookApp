import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state: counter, increment, decrement, reset } = useCounter()
    return (
        <>
            <h1> Counter with Custom Hook {counter}</h1>
            <hr/>
            <button className= "btn btn-primary" onClick = {()=>increment(2)}>+1</button>
            <button className= "btn btn-primary" onClick = {reset}>reset</button>
            <button className= "btn btn-primary" onClick = {()=>decrement(2)}>-1</button>
            
        </>
    )
}
