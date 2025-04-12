import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { useTheme } from "../../services/themeService";
import { getTheme } from "./../shared";

type Props = { children: ReactNode }

const ThemeWrapper: FC<Props> = ({ children }: Props) => {  
    const themeName = useTheme();
    return (
        <ThemeProvider theme={getTheme(themeName)}>
            {children}
        </ThemeProvider>
    );
  };
  
  export default ThemeWrapper;