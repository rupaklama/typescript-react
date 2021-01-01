import React, { createContext, useContext, useReducer } from 'react';
import { IEpisode } from './App';

// interface object
interface IState {
  episodes: Array<IEpisode>,
  favorites: Array<any>
}

// Action Type with props structure for Type Safety
export interface IAction {
  type: string,
  payload: any
}

// state object
const initialState:IState = {
  episodes: [],
  favorites: []
};

// store
const Store = createContext<IState | any>(initialState);

// reducer
const reducer = (state:IState, action:IAction):IState => {

  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, episodes: action.payload}
    case 'ADD_FAV':
      return {...state, favorites: [...state.favorites, action.payload]}
    default:
      return state;
  }
}

// store provider
// Provider component wraps around a tree of components that can have an access to the Context Object
// using Provider component of Context object to make a value available to all
// children and grandchildren by using value={} property
export const StoreProvider = (props: any):JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{state, dispatch}}>
    { props.children }
  </Store.Provider>
}

// To consume Context object, we need to use useContext hook
// we have to import ContactContext object on every files to consume it,
// it gets tedious doing so, creating custom wrapper hook to make it more accessible
export const useStoreContext = () => useContext(Store);
// useContact is a function that returns whatever useContext going to return - our global state object
// function returning function
