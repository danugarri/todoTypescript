import React from 'react'
import { Todo } from '../models/todos.model'

export const TodoItem: React.FC<{ item: Todo }> = (props) => {
const {item}= props;

    return (
        <li key= {item.id}>{item.text}</li>
    )
}