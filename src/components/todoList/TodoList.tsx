import React from 'react';
import { Todo } from '../../models/todos.model';
import './TodoList.css';

export const TodoItem: React.FC<{ item: Todo, removeTodo: (id:string) => void }> = (props) => {
	const { item, removeTodo } = props;
	const removeConcreteTodo = () => removeTodo(item.id);

	return <div className='todo-list'><li key={item.id} onClick= {removeConcreteTodo} >{item.text}</li><button className='close' onClick= {removeConcreteTodo}>X</button></div>;
};
