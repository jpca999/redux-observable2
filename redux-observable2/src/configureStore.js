import {createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { appReducer } from './reducers/appReducer';
import { beersReducer } from './reducers/beersReducer';
import { fetchBeersEpic } from './epics/fetchBeers';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { combineEpics, createEpicMiddleware } from 'redux-observable';
// epic just provide the stream of observables.

// const epic1 = () => of({ type: "SET_NAME", payload: "Sally"}).pipe(delay(2000));

export default function configureStore(){

  const rootEpic = combineEpics(fetchBeersEpic);

  const epicMiddleware = createEpicMiddleware();

  const rootReducer = combineReducers({
    app: appReducer,
    beers: beersReducer
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // since we need to initialzie this root epic.
  const store =  createStore(rootReducer, composeEnhancers (applyMiddleware(epicMiddleware)));

    epicMiddleware.run(rootEpic);

    return store;
}