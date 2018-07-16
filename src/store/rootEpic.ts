import { combineEpics } from 'redux-observable';

import { NodesEpics } from './nodes';

const rootEpic = combineEpics(
  ...NodesEpics
);

export default rootEpic;
