import {createStore, Store, applyMiddleware, compose, combineReducers} from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const enhancers = [];

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
      ...enhancers
    )
  );

epicMiddleware.run(rootEpic);

export default store
