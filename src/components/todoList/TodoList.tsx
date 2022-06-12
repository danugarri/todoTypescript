import React from 'react';
import { Todo } from '../../models/todos.model';
import './TodoList.css';

export const TodoItem: React.FC<{ item: Todo }> = (props) => {
	const { item } = props;

	return <div className='todo-list'><li key={item.id}>{item.text}</li><button className='close'>X</button></div>;
};
