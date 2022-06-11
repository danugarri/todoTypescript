import React, { useRef } from 'react';

export const TodoForm: React.FC<{ showTooltip: () => void, addTodoHandler:(todoText: string) => void }> = (props) => {
	const { showTooltip, addTodoHandler } = props;
	//  Reference to the text input
	const htmlInputText = useRef<HTMLInputElement>(null);			
	//  onSubmit
	const onSubmitHandler = (event: React.FormEvent): void => {
		event.preventDefault();
		const enteredText = htmlInputText.current!.value;
		addTodoHandler(enteredText);
	};

	return (
		<React.Fragment>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor='todo' onMouseOver={showTooltip} onMouseOut={showTooltip}>
					Añade una tarea
				</label>
				<br />
				<input type='text' id='todo' ref= {htmlInputText} />
			</form>
			<button type='submit' onClick={onSubmitHandler}>
				Añadir
			</button>
		</React.Fragment>
	);
};
