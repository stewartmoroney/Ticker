import { Action } from 'redux';

export default interface ITickAction extends Action {
  type: string;
  payload: string;
}
