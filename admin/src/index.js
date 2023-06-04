import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from 'react-router-dom';
const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
