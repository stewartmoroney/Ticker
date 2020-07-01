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
  subscriptions: {
    subscribed: string;
    unsubscribed: string;
  },
  connection: {
    connected: string;
    disconnected: string;
  }
}

const themeCommon = {
  subscriptions: {
    subscribed: '#3f51b5',
    unsubscribed: '#f50057',
  },
  connection: {
    connected:'green',
    disconnected: 'red'
  }
};
 
export const getTheme = (themeName: ThemeName): Theme => {

  return themeName === 'dark' ? 
  {
    body: {
      background: '#303b50',
    },
    panel:{
      background: '#262f40'
    },
    border:'#4d5e80',
    bodyText: '#f0f2f4',
    subscriptions: themeCommon.subscriptions,
    connection: themeCommon.connection,
  } :
  {
    body: {
      background: '#e0e4eb',
    },
    panel:{
      background: '#eff1f5'
    },
    border:'#afbacf',
    bodyText: '#586174',
    subscriptions: themeCommon.subscriptions,
    connection: themeCommon.connection,
  };
}
