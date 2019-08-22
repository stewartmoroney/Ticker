import * as React from 'react';
import Grid from "./Grid";
import { withTheme } from "styled-components";
import { IThemeProps } from "../../shared";

const GridContainer: React.FC<IThemeProps> = ({theme}) => {
  return <Grid theme={theme}/>;
}

export default withTheme(GridContainer);