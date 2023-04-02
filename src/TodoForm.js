import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

const TodoForm = () => {
    const INITIAL_STATE = {
        task:''
    }
    
    const [data, setData]  = useState(INITIAL_STATE)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(data =>({
            ...data,
            [name]: value
        }))
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.task.length > 0) {
           dispatch({type: 'CREATE', payload: {task:data.task,
                                               id: uuid()}})
        }
        setData(INITIAL_STATE)
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <label htmlFor='task'>Enter New Task:</label>
            <input id="task" value={data.task} name='task' onChange={handleChange} type="text"/>
            <button>Add task</button>
        </form>
    )
}

export default TodoForm