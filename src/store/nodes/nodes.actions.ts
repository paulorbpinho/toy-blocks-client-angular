import { IAction, IActionWithPayload } from '../../models/action.model'

export const NodesActions = {
  CHECK_NODE_STATUS_START: 'CHECK_NODE_STATUS_START',
  CHECK_NODE_STATUS_SUCCESS: 'CHECK_NODE_STATUS_SUCCESS',
  CHECK_NODE_STATUS_FAILURE: 'CHECK_NODE_STATUS_FAILURE',

  checkNodeStatus(node): IActionWithPayload {
    return { type: this.CHECK_NODE_STATUS_START, payload: {...node, loading: true} };
  },
  setNodeStatus(node, payload): IActionWithPayload {
    const nodePayload = {
      ...node,
      name: payload.node_name,
      loading: false,
      online: true,
    }
    return { type: this.CHECK_NODE_STATUS_SUCCESS, payload: {...nodePayload} };
  },
  setNodeStatusFailure(node): IActionWithPayload {
    const nodePayload = {
      ...node,
      loading: false,
      online: false,
    }
    return { type: this.CHECK_NODE_STATUS_FAILURE, payload: {...nodePayload} };
  }
}
