import { createSelector } from "reselect";
import { InitialState, PageState } from "@crew/types";

export const getPageTitle = (state: InitialState): string => state.page.title;

export const getPageDescription = (state: InitialState): string => state.page.description;

export const createPageTitleSelector = () =>
  createSelector([getPageTitle, getPageDescription], (title, description): PageState => ({ title, description }));
