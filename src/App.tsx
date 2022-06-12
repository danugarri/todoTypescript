import React, { useState } from 'react';
import './App.scss';
import { TodoForm } from './components/form/TodoForm';
import { Todos } from './components/todos/Todos';
import { FormTooltip } from './components/tooltip/FormTooltip';
import { Todo } from './models/todos.model';

function App() {

	const [tooltip, setTooltip] = useState<boolean>(false);
	//  Instanciating objects from the Todo class
	const testingTodos = [new Todo('React'), new Todo('Typescript'), new Todo('Jest')];
	const [todos, setTodo] = useState<Todo[]>(testingTodos);
	// Show tooltip whrn the mouse is over the label in the form
	const showTooltip = () => setTooltip(!tooltip);
	//  Add todo item to the todo list
	const addTodoHandler= (todoText: string) => {
		const newTodo= new Todo(todoText);
		setTodo(prev => prev.concat(newTodo));
		console.log(newTodo.id)
	}
	//  remove todo
	const removeTodo= (id:string) => {
		// option 1
		// const modifiedTodos= todos.filter(item => item.id !== id );
		// setTodo(modifiedTodos);
		// preferred option 2
		setTodo(prev => prev.filter(prev => prev.id !== id));
		console.log(id);
	}

	return (
		<div>
			<TodoForm showTooltip={showTooltip} addTodoHandler= {addTodoHandler}/>
			<section>
				{tooltip && <FormTooltip />}
				<Todos items={todos} removeTodo= {removeTodo} />
			</section>
		</div>
	);
}

export default App;
