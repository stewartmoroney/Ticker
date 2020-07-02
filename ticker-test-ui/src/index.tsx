import "./index.css";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Bootstraper from "./services/Bootstraper";
import { connect } from "./services/redux/actions";
import createStore from "./services/redux/Store";
import Shell from "./ui/shell";

Bootstraper.bootstrap();
const store = createStore();
store.dispatch(connect());

render(
  <Provider store={store}>
    <Shell />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
