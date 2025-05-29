import { ReactNode } from "react";
import { ThemeProvider } from '@mui/material/styles';

import { useTheme } from "../../services/themeService";
import { getTheme } from "./../shared";

type Props = { children: ReactNode }

const ThemeWrapper = ({ children }: Props) => {  
    const themeName = useTheme();
    return (
        <ThemeProvider theme={getTheme(themeName)}>
            {children}
        </ThemeProvider>
    );
  };
  
  export default ThemeWrapper;