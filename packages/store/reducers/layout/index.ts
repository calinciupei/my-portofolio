import { Reducer, combineReducers } from "redux";
import { Layout } from "@crew/types";
import modalReducer from "./modal";
import menuNavigationReducer from "./menu-navigation";
import currentPositionLayout from "./current-position/current-position";

export const layoutReducer: Reducer<Layout> = combineReducers<Layout>({
  modal: modalReducer,
  menuNavigation: menuNavigationReducer,
  currentPosition: currentPositionLayout
});
