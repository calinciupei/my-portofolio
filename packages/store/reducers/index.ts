import { combineReducers, Reducer } from "redux";
import { InitialState } from "@crew/types";
import { routerReducer } from "./router";
import { pageReducer } from "./page";
import { layoutReducer } from "./layout";

const appReducers: Reducer<InitialState> = combineReducers<InitialState>({
  router: routerReducer,
  page: pageReducer,
  layout: layoutReducer
});

export default appReducers;
