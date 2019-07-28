import { ThemeName } from "../../../state/types";

export const defaultTheme: ThemeName = 'dark';

export interface IThemeProps {
  theme: Theme;
}

export interface Theme {
    body:{
      background: string;
    },
    panel:{
      background: string;
    },    
    bodyText: string;
    connection: {
      connected: string;
      disconnected: string;
    }
  }
  
export const getTheme = (themeName: ThemeName): Theme => {

  return themeName === 'dark' ? 
  {
    body: {
      background: '#f0f2f4',
    },
    panel:{
      background: '#394660'
    },
    bodyText: '#f0f2f4',
    connection: {
      connected:'green',
      disconnected: 'red'
    }
  } :
  {
    body: {
      background: '#586174',
    },
    panel:{
      background: '#eff1f5'
    },
    bodyText: '#586174',
    connection: {
      connected:'green',
      disconnected: 'red'
    }
  }
}