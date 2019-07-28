import { ActionTypes } from "./ActionTypes";

export interface IThemeAction {
  type: ActionTypes.TOGGLE_THEME;  
}

export const toggleTheme = (): IThemeAction => {
  return {
    type: ActionTypes.TOGGLE_THEME
  }
}