import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
// Store を作成するもの
import { createStore } from "redux";
// Store を提供するもの
import { Provider } from "react-redux";
// 定義した Reducer
import todoReducer from "./reducers";

// 引数には Reducer と、Redux DevTools を利用可能にするためのものを渡します
// Storeの作成
const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
