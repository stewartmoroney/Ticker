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
    instrumentSelector: {
      background: string;
    },
    connection: {
      connected: string;
      disconnected: string;
    }
  }
  
export const getTheme = (): Theme => {
    return {
      body: {
        background: '#424957',
      },
      panel:{
        background: '#394660'
      },
      instrumentSelector: {
        background: '#394660',
      },
      bodyText: '#cddae8',
      connection: {
        connected:'green',
        disconnected: 'red'
    }
  }
}