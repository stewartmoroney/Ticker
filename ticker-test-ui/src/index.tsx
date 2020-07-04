import "./index.css";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import createStore from "./services/redux";
import { connect } from "./services/redux/actions";
import Shell from "./ui/shell";

const store = createStore();
store.dispatch(connect());

render(
  <Provider store={store}>
    <Shell />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
