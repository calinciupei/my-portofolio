import { createSelector } from "reselect";
import { InitialState, MenuNavigation } from "@crew/types";

export const getNavigationState = (state: InitialState): boolean =>
  state.layout.menuNavigation ? state.layout.menuNavigation.isOpen : false;

export const createNavigationStateSelector = () =>
  createSelector([getNavigationState], (isOpen): MenuNavigation => ({ isOpen }));
