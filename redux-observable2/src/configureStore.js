import { createStore, applyMiddleware, combineReducers } from "redux";
import { appReducer } from './reducers/appReducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs';
import { fetchBeersEpic } from "./epics/fetchBeers";

//epic is a kinda action.
const epic1 = () => of({ type: "SET_NAME", payload: "Sally"})

export function configureStore () {

  const rootReducer = combineReducers({
    app: appReducer
  });

  const rootEpic = combineEpics (fetchBeersEpic);
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;

}