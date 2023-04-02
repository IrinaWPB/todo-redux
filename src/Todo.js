import React from 'react'
import {useDispatch} from 'react-redux'

const Todo = ({task}) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch({type:'DELETE', payload: task})
    }
    return (
        <div className='Todo'>
            <span>{task.task}</span>
            <button onClick={handleClick}>X</button>
        </div>
    )
} 

export default Todo