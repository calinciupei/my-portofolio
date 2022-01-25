import { InitialState } from "@crew/types";

export const getCurrentRoute = (state: InitialState): string =>
  state.router.currentRoute;

export const getCurrentPath = (state: InitialState): string | undefined =>
  state.router.path;
