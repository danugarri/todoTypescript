import { useState } from 'react';
import './App.css';
import { TodoForm } from './components/form/TodoForm';
import { Todos } from './components/todos/Todos';
import { FormTooltip } from './components/tooltip/FormTooltip';
import { Todo } from './models/todos.model';
function App() {
	const [tooltip, setTooltip] = useState(true);
	const showTooltip = () => setTooltip(!tooltip);
	//  Instanciate objects from the Todo class
	const todos = [new Todo('React'), new Todo('Typescript'), new Todo('Jest')];

	return (
		<div>
			<TodoForm showTooltip={showTooltip} />
			<section>
				{!tooltip && <FormTooltip />}
				<Todos items={todos} />
			</section>
		</div>
	);
}

export default App;
