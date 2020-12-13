import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// interface & action creator
import { Todo, fetchTodos, deleteTodo } from './actions';

// store state interface which describes entire store state
import { StoreState } from './reducers';

// props structure for component level state
interface AppState {
  fetching: boolean;
}

const App = (props: AppState): JSX.Element => {
  // component level state
  // const [fetching, setFetching] = useState(false)

  // useDispatch hook to dispatch an action creator
  const dispatch = useDispatch();

  // useSelector hook to get access to todos state in redux store
  // naming same as our 'todos' state in combineReducers - key
  // this hook takes an arrow func with arg state & which part of state we want from combineReducers
  // must pass a selector to useSelector
  const todos = useSelector((state: StoreState) => state.todos);

  const handleButtonClick = (): void => {
    dispatch(fetchTodos());

    
  };

  const handleDelete = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const renderList = (): JSX.Element[] => {
    // returning array of elements
    return todos.map((todo: Todo) => (
      <div onClick={() => handleDelete(todo.id)} key={todo.id}>
        {todo.title}
      </div>
    ));
  };

  return (
    <div>
      <h1>React Redux Typescript</h1>
      <button onClick={handleButtonClick}>Fetch Todos</button>
      {renderList()}
    </div>
  );
};

export default App;
