import { of, throwError } from 'rxjs';
import { delay, mapTo, concatMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';

import { IAction, IActionWithPayload } from '../../models/action.model'

import {NodesActions} from './nodes.actions'

const fetchNodeStatus= action$ => action$.pipe(
  ofType<IActionWithPayload>(NodesActions.CHECK_NODE_STATUS_START),
  concatMap((action: IActionWithPayload) => ajax.getJSON(`${action.payload.url}/api/v1/status`).pipe(
    map(response => NodesActions.setNodeStatus(action.payload, response)),
    catchError(error => of({
      type: NodesActions.CHECK_NODE_STATUS_FAILURE,
      payload: {...action.payload, online: false, loading: false}
    }))
  ))
);

export const NodesEpics = [
  fetchNodeStatus,
]
