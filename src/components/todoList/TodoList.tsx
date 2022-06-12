import React, { useState } from 'react';
import { Todo } from '../../models/todos.model';
import './TodoList.scss';

export const TodoItem: React.FC<{ item: Todo, removeTodo: (id:string) => void }> = (props) => {
	const { item, removeTodo } = props;
	const [overCloseButton, setOverCloseButton] = useState<boolean>(false);
	const removeConcreteTodo = () => removeTodo(item.id);
	const changeLiBackground= () => setOverCloseButton(!overCloseButton);
	const liBackground= overCloseButton ? 'red-li': '';

	return <div className='todo-list'><li className= {liBackground} key={item.id} onClick= {removeConcreteTodo} >{item.text}</li><button className='close' onClick= {removeConcreteTodo} onMouseOver= {changeLiBackground} onMouseOut={changeLiBackground}>X</button></div>;
};
