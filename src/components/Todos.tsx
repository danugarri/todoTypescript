import React from 'react';
import { TodoProps } from '../models/todos.model';
import { TodoItem } from './TodoList';

export const Todos: React.FC<TodoProps> = (props) => {
	const { items } = props;

	return (
		<ul>
			{items.map((item) => (
				<TodoItem item={item} />
			))}
		</ul>
	);
};
