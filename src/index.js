import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/index";
import thunk from "redux-thunk";
const middleware = [thunk];
//  const store = createStore(
//    rootReducer,
//    compose(
//      applyMiddleware(...middleware),
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//    )
//  );
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
