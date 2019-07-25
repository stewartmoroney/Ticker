import { Action } from 'redux';

import { ActionTypes } from './ActionTypes';


export interface IGridClearAction extends Action {
  payload: string
  type: ActionTypes.GRID_CLEAR
}
export const clearGrid = (s: string):IGridClearAction => ({
  payload: s,
  type: ActionTypes.GRID_CLEAR
});

export interface ITickAction extends Action {
  payload: string
  type: ActionTypes.TICK
}
export const newTick = (s: string):ITickAction => ({
  payload: s,
  type: ActionTypes.TICK
});

export interface IDataAction extends Action {
  payload: string
  type: ActionTypes.GRID_UPDATE
}
export const dataUpdate = (s: string):IDataAction => ({
  payload: s,
  type: ActionTypes.GRID_UPDATE
});
