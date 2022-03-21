import { createSelector } from "reselect";
import { InitialState, RouterState } from "@crew/types";

export const getCurrentRoute = (state: InitialState): string => state.router.currentRoute;

export const getCurrentPath = (state: InitialState): string => state.router.path;

export const getRouteHash = (state: InitialState): string => state.router.hash || "";

export const createRouterSelector = () =>
  createSelector(
    [getCurrentRoute, getCurrentPath, getRouteHash],
    (currentRoute, path, hash): RouterState => ({ currentRoute, path, hash })
  );
