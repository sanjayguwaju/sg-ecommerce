import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { DarkModeContextProvider } from "./context/darkModeContext";
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <DarkModeContextProvider>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
    </PersistGate>
    </Provider>
    </DarkModeContextProvider>
);
