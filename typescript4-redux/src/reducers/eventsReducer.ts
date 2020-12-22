import { AnyAction } from "redux";

// describe event object
interface Event {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
}

// describe state props structure
export interface EventsState{
 
 
  // Record<K, T> is an object type whose property keys are K and whose property values are T
  // To type a variable as Record , you have to pass a string as a key and some type for its corresponding value
  // Record is a utility type which creates a New Type based on other type.

  // simple example
  //  Record<K,T>
  //  const aRecord: Record<string, number> = {
  //    apples: 10,
  //    oranges: 20
  //  }

  // NOTE: Record is an object where we store values under some keys. It's a generic type
  // Here we will store all the event objects in the Record - byIds
  byIds: Record<Event['id'], Event>; // key is Event's id & value is Event object
  allIds: Event['id'] []; // array with list of ids of the event objects which are store in byIds record
}

const initialState: EventsState = {
  byIds: {},
  allIds: []
}

// since we have no Actions yet, let's use the AnyAction type from Redux
export const eventsReducer = (state: EventsState = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
