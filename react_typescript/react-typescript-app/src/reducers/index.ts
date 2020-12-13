// redux library
import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { Todo } from '../actions';

// This is an OPTIONAL STEP here to validate an OBJECT
// This interface is going to describe the ENTIRE STATE of our Redux STORE
export interface StoreState {
  todos: Todo[]
}
// NOTE: Something very important is going behind the scene now 
// Typescript is looking for Objects that we are passing in into the combineReducers
// It's going to take a look into all the different properties &
// for each Reducer that we pass in & make sure our Reducer Function returns
// a value of Type, array of todos - todos: Todo[]
// All it's doing is the VALIDATION for Action object which means if we accidentally
// returns some inappropriate value from Reducer, we are going to catch it automatically
// inside this file as an ERROR. 

// All of above different Reducers put together with function - combineReducers() as an object
// to our Global State Object - Store
// export default will make this available to other files in this project
export default combineReducers<StoreState>({
  // dummy reducer when starting out for error message to go away
  // counter: () => 1
  // passing each of our Reducers as key/value properties to create State Object in Redux Store

  // NOTE: We can add in some OPTIONAL STEPS here
  // Its going to be very similar to <FetchTodosAction> in actions to validate an OBJECT
  todos: todosReducer,

});
