export interface Theme {
    bodyBackground: string;
    bodyText: string;
    connection: {
      connected: string;
      disconnected: string;
    }
  }
  
export const getTheme = (): Theme => {
    return {
      bodyBackground: '#313d58',
      bodyText: '#cddae8',
      connection: {
        connected:'green',
        disconnected: 'red'
    }
  }
}