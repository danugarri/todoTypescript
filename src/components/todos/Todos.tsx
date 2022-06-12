import React from 'react';
import './Todos.css';
import { TodoProps } from '../../models/todos.model';
import { TodoItem } from '../todoList/TodoList';

export const Todos: React.FC<TodoProps> = (props) => {
	const { items,removeTodo } = props;

	return (
		<ul className='todos'>
			{items.map((item) => (
				<TodoItem item={item} key= {item.text} removeTodo= {removeTodo}/>
			))}
		</ul>
	);
};
