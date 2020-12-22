import { START, STOP, StartAction, StopAction } from '../actions';

// describe props structure
export interface RecorderState {
  startDate: string;
}

// initial state object
const initialState: RecorderState = {
  startDate: ''
}

export const recorderReducer = (
  state: RecorderState = initialState,
  // TYPE UNION - A union type describes a value that can be one of several types. 
  // We use the vertical bar ( | ) to separate each type
  // NOTE: Type union can be very long, we can use Type Alias if we want instead. 
  action: StartAction | StopAction
) => {
  switch (action.type) {
    case START:
      return {...state, startDate: new Date().toISOString() };
    case STOP:
      return {...state, startDate: '' }
    default:
      return state;
  }
};
