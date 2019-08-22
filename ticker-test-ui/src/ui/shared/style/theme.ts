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
    border: string,    
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
    border:'#4d5e80',
    bodyText: '#f0f2f4',
    connection: {
      connected:'green',
      disconnected: 'red'
    }
  } :
  {
    body: {
      background: '#8f9ebc',
    },
    panel:{
      background: '#eff1f5'
    },
    border:'#afbacf',
    bodyText: '#586174',
    connection: {
      connected:'green',
      disconnected: 'red'
    }
  }
}