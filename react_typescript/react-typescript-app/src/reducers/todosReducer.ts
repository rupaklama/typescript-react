// First import 'interface Todo' - our custom Type with props structure
import {
  Todo,
  FetchTodosAction,
  DeleteTodoAction,
  ActionTypes,
} from '../actions';

// todos reducer
// state is going to be Type Todo[]
// second = [] is the default prop saying State is going to be Array of todos &
// if we don't provide any state then just use an EMPTY array
export const todosReducer = (
  state: Todo[] = [],
  // TYPE UNION - A union type describes a value that can be one of several types. 
  // We use the vertical bar ( | ) to separate each type
  // NOTE: Type union can be very long, we can use Type Alias if we want instead. 
  action: FetchTodosAction | DeleteTodoAction // or
) => {
  // Remember we created 'interface FetchTodosAction' for Type Safety
  // which describes the exact props structure what we expect an Action to be
  // It would be super ideal if we somehow tell this Reducer that the
  // second arg - 'action' is always going to be Object of 'interface FetchTodosAction'
  // so, we will use FetchTodosAction as an annotation for action
 
  // NOTE: This approach might be not ideal when having lots of Action Types.
  switch (action.type) {
    // Here, switch statement with all these different cases acts as a TYPE GUARD
    // Type Guard reduces number of different cases essentially inside of our TYPE UNION
    // if we mouse over action, because of case statements, Typescript knows the action type automatically
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state;
  }

  // return 5;
};
