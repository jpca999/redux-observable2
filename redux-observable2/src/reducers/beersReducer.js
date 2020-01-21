
import { FETCH_FULFILLED } from './beersActions';

const intialState = {
  data: [],
  loading: true
}

export function beersReducer ( state= intialState, action ) {
  switch(action.type){
    case FETCH_FULFILLED: {
       return {
         ...state,
       loading: false,
       data: action.payload
      }
    }
    default: return state
  }

}