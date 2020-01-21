
// import { FETCH_FULFILLED } from './beersActions';
import { FETCH_FULFILLED, SET_STATUS, FETCH_DATA } from './beersActions';

const intialState = {
  data: [],
  status: 'idle'  // "idle" | "pending" | "success" | "failure"
}

export function beersReducer ( state= intialState, action ) {
  switch(action.type){

    case SET_STATUS: {
      return {
        ...state,
        status: action.payload,
     }
   }

    case FETCH_FULFILLED: {
       return {
         ...state,
        status: false,
       data: action.payload
      }
    }
    default: return state
  }

}