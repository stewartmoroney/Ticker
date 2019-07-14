export interface Theme {
    bodyBackground: string;
    bodyText: string;
  }
  
export const getTheme = (): Theme => {
    return {
      bodyBackground: '#313d58',
      bodyText: '#cddae8'
    }
  }
  