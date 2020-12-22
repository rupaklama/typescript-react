
import { Action } from 'redux';

// action types
export const START = 'START';
export const STOP = 'STOP';

// describe action object with 'type alias'
// using 'Action interface' from Redux to describe action
export type StartAction = Action<typeof START>
export type StopAction = Action<typeof STOP>
// TypeScript adds a 'typeof' operator you can use in a type context to 
// refer to the type of a variable or property

// action creators
export const start = (): StartAction => ({
  type: START
})

export const stop = (): StopAction => ({
  type: STOP
})

