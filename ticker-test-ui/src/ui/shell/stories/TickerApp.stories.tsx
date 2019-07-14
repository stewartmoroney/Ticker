import { ThemeProvider } from 'emotion-theming';
import React from 'react';
// import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

// import TickerApp from '../TickerApp';
import { getTheme } from './../../shared';
// import createStore from './../../../services/redux/Store';

// const store = createStore();

const theme = getTheme();

storiesOf('shell', module)
  .add('default layout', () => (
    <ThemeProvider theme={getTheme()}>
       {/* <Provider store={store}> */}
        <div>simples</div>
      {/* <TickerApp /> */}
     {/* </Provider> */}
     </ThemeProvider>
  ));   
