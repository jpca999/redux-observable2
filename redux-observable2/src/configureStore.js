import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { appReducer } from './reducers/appReducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs';
import { fetchBeersEpic } from "./epics/fetchBeers";
import { beersReducers } from "./reducers/beersReducer";

//epic is a kinda action.
const epic1 = () => of({ type: "SET_NAME", payload: "Sally"})

export function configureStore () {

  const rootReducer = combineReducers({
    app: appReducer,
    beers: beersReducers
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootEpic = combineEpics (fetchBeersEpic);
  const epicMiddleware = createEpicMiddleware();

  const store =  createStore(rootReducer, composeEnhancers (applyMiddleware(epicMiddleware)));

    epicMiddleware.run(rootEpic);

    return store;

}