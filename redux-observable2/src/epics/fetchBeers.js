// each epic returns a single function.
// it returns stream of actions.
import { FETCH_DATA, fetchFulfilled, setStatus } from '../reducers/beersActions';
import {ajax} from 'rxjs/ajax';
import {tap, map, switchMap, ignoreElements } from 'rxjs/operators';

import { ofType } from "redux-observable";
import { concat, of } from 'rxjs';

const API =  'https://api.punkapi.com/v2/beers';

export  function fetchBeersEpic(action$) {

  return action$.pipe(
    ofType(FETCH_DATA),
    switchMap(() => {
        return concat(
          of(setStatus("pending")),

          ajax.getJSON(API).pipe(
            map(resp => fetchFulfilled(resp))
          )

        )
    })
  );
}