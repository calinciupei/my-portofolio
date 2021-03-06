/* eslint-disable @typescript-eslint/no-floating-promises, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires */
// @ts-nocheck
import React, { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import i18next from "i18next";
import createStore, { StoreOptions } from "@crew/store";
import { historyListener, urlMiddleware } from "./router";
import { ENDPOINTS } from "./config/endpoints";
import translationsEn from "./translations/en.json";

i18next.init({
  lng: "en",
  debug: true,
  fallbackLng: "ne",
  resources: {
    en: {
      translation: translationsEn
    }
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
let App = require("./src/connect-app/connect-app").default;

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = { ...window.__PRELOADED_STATE__ };

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const STORE: StoreOptions = {
  preloadedState,
  compose: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
  middleware: [urlMiddleware]
};

const store = createStore(ENDPOINTS, STORE);

historyListener(store.dispatch);

const rootElement = document.getElementById("root");
const Root: FunctionComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const wrapper = createRoot(rootElement);

wrapper.render(<Root />);

// ts-ignore
if (module.hot) {
  // ts-ignore
  module.hot.accept("./src/connect-app/connect-app", (): void => {
    App = require("./src/connect-app/connect-app").default;
    const root = createRoot(document.getElementById("root"));

    root.render(<Root />);
  });
}
