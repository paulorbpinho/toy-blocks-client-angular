import { IAction, IActionWithPayload } from '../../models/action.model';
import { NodesActions } from './nodes.actions';
import { Nodes } from '../../models/nodes.model'

const init: Nodes = {
  list: [
    {
      url: 'https://thawing-springs-53971.herokuapp.com',
      online: false,
      name: 'Node 1',
      loading: false,
    },
    {
      url: 'https://secret-lowlands-62331.herokuapp.com',
      online: false,
      name: 'Node 2',
      loading: false,
    },
    {
      url: 'https://calm-anchorage-82141.herokuapp.com',
      online: false,
      name: 'Node 3',
      loading: false,
    },
    {
      url: 'http://localhost:3002',
      online: false,
      name: 'Node 4',
      loading: false,
    }
  ],
}

export function NodesReducers(state: Nodes = init, action: IActionWithPayload): any {
  let list = [];
  switch(action.type) {
    case NodesActions.CHECK_NODE_STATUS_START:
      list = state.list.map((node) => node.url === action.payload.url ? action.payload : node);
      return {
        ...state,
        list,
      }
    case NodesActions.CHECK_NODE_STATUS_SUCCESS:
      list = state.list.map((node) => node.url === action.payload.url ? action.payload : node);
      return {
        ...state,
        list,
      }
    case NodesActions.CHECK_NODE_STATUS_FAILURE:
      list = state.list.map((node) => node.url === action.payload.url ? action.payload : node);
      return {
        ...state,
        list,
      }
    default: return state;
  }
}
