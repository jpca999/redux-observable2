import { FETCH_FULFILLED } from './beersActions';

const initialState = {
  data: [],
  loading: false
}

const API = 'https://api.punkapi.com/v2/beers';

export function beersReducers(state = initialState, action){
  switch (action.type) {
    case FETCH_FULFILLED: {
      return {
        ...state,
      loading: false,
      data: action.payload
     }
   }
    default: return state;
  }

}


// {
//   return ajax.getJSON(API).pipe(
//       tap( x => console.log(x)),
//       ignoreElements()

//   )

// }