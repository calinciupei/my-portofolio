import createSagaMiddleware from "redux-saga";
import { applyMiddleware, Store, createStore, Middleware } from "redux";
import { InitialState } from "@crew/types";
import { setEndpoints, Endpoints } from "@crew/types/configs/endpoints";
import appReducers from "./reducers";
import rootSaga from "./middleware/root-saga";

// Call saga middleware
const sagaMiddleware = createSagaMiddleware();

export type StoreOptions = {
  preloadedState?: any;
  middleware?: Middleware[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  compose?: Function;
};

export default function (
  endpoints: Endpoints,
  options?: StoreOptions
): Store<InitialState> {
  if (!endpoints) {
    throw new Error("Please provide endpoints");
  }

  const MIDDLEWARE = [];

  if (options?.middleware) {
    MIDDLEWARE.push(...options.middleware);
  }

  MIDDLEWARE.push(sagaMiddleware);

  const middlewareEnhance = applyMiddleware(...MIDDLEWARE);
  const preloadState = options?.preloadedState || {};
  const composeEnhancers = options?.compose;
  const enhancers = composeEnhancers
    ? composeEnhancers(middlewareEnhance)
    : middlewareEnhance;

  setEndpoints(endpoints);

  const store = createStore(appReducers, preloadState, enhancers);

  // Run saga middleware
  sagaMiddleware.run(rootSaga);

  return store;
}
