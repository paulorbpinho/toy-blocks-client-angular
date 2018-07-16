import {combineReducers} from 'redux'

import {NodesReducers} from './nodes'

const rootReducer = combineReducers({
  nodes: NodesReducers,
});

export default rootReducer;
