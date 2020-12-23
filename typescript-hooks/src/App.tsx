import { Fragment, useState } from 'react';
import './App.css';

// using 'type alias' to avoid writing long event type in ()
// which is just a name that represents another type
type FormEvent = React.FormEvent<HTMLFormElement>;

// object interface - interface creates a New Custom Type that describes
// property names & value types
interface ITodo {
  // props structure
  text: string;
  completed: boolean;
}

// NOTE: interface can extend interface
// interface ITodo2 extends ITodo {
//   tags: string[];
// }

function App(): JSX.Element {
  // default type definition , Generic <S> to be string here
  const [value, setValue] = useState<string>('');

  // array of New Type 'ITodo' objects
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTodo(value);

    setValue('');
  };

  const addTodo = (text: string): void => {
    // new array with added new text
    const newTodos: ITodo[] = [...todos, { text: text, completed: false }];
    setTodos(newTodos);
  };

  console.log(todos);

  const completedTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    // to change value of boolean
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <h1>Typescript Hooks</h1>

      <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type='text'
          required
        />
        <button type='submit'>Add Todo</button>
      </form>

      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            >
              {todo.text}
            </div>
            <button type='button' onClick={() => completedTodo(index)}>
              {todo.completed ? 'completed' : 'Incomplete'}
            </button>

            <button type='button' onClick={() => removeTodo(index)}>&times;</button>
          </Fragment>
        ))}
      </section>
    </div>
  );
}

export default App;
