import './App.css';
import { Todos } from './components/Todos';
import { Todo} from './models/todos.model'
function App() {
  //  Instanciate objects from the Todo class
  const todos= [new Todo('React'),new Todo('Typescript'),new Todo('Jest')];

  return (  
    <div >
      <Todos items= {todos}/>
    </div>
  );
}

export default App;
