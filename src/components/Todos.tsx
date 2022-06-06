import React from 'react';
import { Todo } from '../models/todos';

export const Todos: React.FC<{items:Todo[]}> = (props) => {
    const {items}= props;

    return (
        <ul>
            {
                items.map((item)=> <li key= {item.id}>{item.text}</li>)
            }
        </ul>
    )
}
