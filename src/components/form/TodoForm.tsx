import React, { useRef } from 'react';

export const TodoForm: React.FC<{showTooltip:() => void}> = (props) => {

  const {showTooltip} = props;
 
  const htmlInputText = useRef<HTMLInputElement>();

	const addToDo = (event: React.FormEvent): void => {
		event.preventDefault(); 
	};

	return (
		<React.Fragment>
			<form onSubmit={addToDo}>
				<label htmlFor='todo' onMouseOver={showTooltip} onMouseOut= {showTooltip}>
					Añade una tarea
				</label>
				<input type='text' id='todo' />
			</form>
		</React.Fragment>
	);
};
