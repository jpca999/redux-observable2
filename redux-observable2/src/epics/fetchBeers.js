import { ajax } from 'rxjs/ajax';
import { ignoreElements, tap } from 'rxjs/operators';

const API = 'https://api.punkapi.com/v2/beers';

export function fetchBeersEpic(){
  return ajax.getJSON(API).pipe(
      tap( x => console.log(x)),
      ignoreElements()

  )



}