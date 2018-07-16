import {Action} from 'redux';

export interface IAction extends Action {}

export interface IActionWithPayload extends Action {
  payload: any
}
