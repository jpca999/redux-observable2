// each epic returns a single function.
// it returns stream of actions.
import { fetchFulfilled } from '../reducers/beersActions';
import {ajax} from 'rxjs/ajax';
import {tap, map, ignoreElements } from 'rxjs/operators';

const API =  'https://api.punkapi.com/v2/beers';

export  function fetchBeersEpic() {
  return ajax.getJSON(API).pipe(
    map( resp => fetchFulfilled(resp))
  )
}