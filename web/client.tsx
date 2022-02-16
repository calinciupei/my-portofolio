/* eslint-disable @typescript-eslint/ban-ts-comment */
// ts-ignore
import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import i18next from "i18next";
import createStore, { StoreOptions } from "@crew/store";
import { historyListener, urlMiddleware } from "./router";
import { ENDPOINTS } from "./config/endpoints";
import translationsEn from "./trasnlations/en.json";

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
let App = require("./connects/connect-app/connect-app").default;

// Grab the state from a global variable injected into the server-generated HTML
// @ts-expect-error
const preloadedState = { ...window.__PRELOADED_STATE__ };

// Allow the passed state to be garbage-collected
// @ts-expect-error
delete window.__PRELOADED_STATE__;

const STORE: StoreOptions = {
  preloadedState,
  // @ts-expect-error
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

render(<Root />, rootElement);

if (module.hot) {
  module.hot.accept("./connects/connect-app/connect-app", (): void => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    App = require("./connects/connect-app/connect-app").default;
    render(<Root />, document.getElementById("root"));
  });
}
