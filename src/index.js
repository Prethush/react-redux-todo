import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store/index";
import "./style/style.css";

ReactDom.render(
  < Provider store={store}>
    < App />
  </Provider>,
  document.getElementById("root")
)