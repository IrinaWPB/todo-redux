import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'


const TodoList = () => {
    const tasks = useSelector(store=> store.todos)
    return (
        <ul>
            {tasks.map(t => <li key={t.id}><Todo task={t} /></li>)}
        </ul>
    )
}

export default TodoList