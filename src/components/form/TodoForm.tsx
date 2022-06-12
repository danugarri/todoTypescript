import React, { useRef } from 'react';
import { Todo } from '../../models/todos.model';
import { checkInput } from '../../shared/helpers/checkInputError';

export const TodoForm: React.FC<{ showTooltip: () => void, addTodoHandler:(todoText: string) => void, todos: Todo[] }> = (props) => {
	const { showTooltip, addTodoHandler, todos } = props;
	//  Reference to the text input
	const htmlInputText = useRef<HTMLInputElement>(null);			
	//  onSubmit
	const onSubmitHandler = (event: React.FormEvent): void => {
		event.preventDefault();
		const enteredText = htmlInputText.current!.value;
	
		
		// checking input errors
		checkInput({enteredText, addTodoHandler, todos});
	};

	return (
		<React.Fragment>
			<form onSubmit={onSubmitHandler} className='form' >
				<label htmlFor='todo' onMouseOver={showTooltip} onMouseOut={showTooltip}>
					Añade una tarea
				</label>
				<br />
				<input type='text' id='todo' ref= {htmlInputText} />
				<button type='submit' >
					Añadir
				</button>
			</form>
		</React.Fragment>
	);
};
