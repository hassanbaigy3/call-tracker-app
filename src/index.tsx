import React from "react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { client } from "./config/apollo";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import reportWebVitals from "./reportWebVitals";

import "./assets/fonts/AvenirLTStd-Book.otf";
import "./assets/fonts/AvenirLTStd-Black.otf";
import "./assets/fonts/AvenirLTStd-Roman.otf";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
