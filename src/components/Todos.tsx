import React from 'react';
import { Todo } from '../models/todos.model';
import { TodoItem } from './TodoList';

export const Todos: React.FC<{items:Todo[]}> = (props) => {
    const {items}= props;

    return (
        <ul>
            {
                items.map((item)=> <TodoItem item={item}/>)
            }
        </ul>
    )
}   
