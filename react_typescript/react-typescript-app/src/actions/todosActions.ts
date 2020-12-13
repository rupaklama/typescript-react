import axios from 'axios';

// Inside of Redux Type Definition file, there’s actually an Interface for it to define what the Dispatch function is.
// We don’t have to create Custom Interface ourself, instead we are going to IMPORT interface 'Dispatch' from there
// to use it to Annotate Dispatch in Action Creators.  
import { Dispatch } from 'redux';

// Enums for all Action types
// One of the main reasons Redux recommends this is to avoid making typos when creating actions. 
// By importing a constant, you'll get some early warning if you mess up the name.

// NOTE: Create an 'enum'. Creates on object with the same keys & values when 
// converted from TS to JS. It's primary goal is to signal other engineers that 
// these are all SMALL fixed set of CLOSELY related values. 
export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO'
}

// our custom Action Types with props structure 
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// NOTE: THIS IS OPTIONAL but highly recommended for Type safety 
// We are going to add in new Interface inside this file which goals is to 
// describe Action object 'FETCH_TODOS' below. 
export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS; // we always want 100% type to be this
  payload: Todo[] // we want payload to be array of todos 
}

// props structure to delete Todo
export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number; // id of todo to delete
}

// api url
const url = 'https://jsonplaceholder.typicode.com/todos';

// fetch action creator
export const fetchTodos = () => {
  // we need to provide Type Annotation for 'dispatch'
  return async (dispatch: Dispatch) => { // default Dispatch Annotation

    // NOTE: In order to make Typescript understand, what type of information is going to be 
    // inside of response.data. Remember .get() is alo Generic Func as well. 
    // Hover over get(), we will find that classic Generic Syntax - < any, >
    const response = await axios.get<Todo []>(url) // instead of any
    // So, this tell Typescript inside of response.data
    // we are going to have an Array of objects that satisfies our 'Todo interface'
    // Now Typescript will know now that response.data will be array of todos objects

    // now with the help of redux thunk, our action creators can return action objects or functions
    // if function, we can use its dispatch method to dispatch our function to the reducers in redux store

    // NOTE: small 'Optional' step which is going to give us little bit better ERROR Checking
    // inside of our Action Creators
    dispatch<FetchTodosAction>({ // 
      type: ActionTypes.FETCH_TODOS,
      payload: response.data
    })
    
    // We are going to add in new Interface inside this file which goals is to 
    // describe above Action object here. Sometimes when we work on Action Creator particularly 
    // with redux-thunk, we might end up tons of code inside dispatch({}) resulting in confusing
    // Action Creator. So what 'interface FetchTodosAction' does is make sure that we are always
    // passing in Object with Correct Type & Properties. 
  }
}

// Todo delete action creator
export const deleteTodo = (id: number): DeleteTodoAction => {
  // we want to return an object that should confirm to 'interface DeleteTodoAction'
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id
  }
}
