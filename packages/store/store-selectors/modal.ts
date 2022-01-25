import { createSelector } from "reselect";
import { InitialState, Modal } from "@crew/types";

export const getModalOpenState = (state: InitialState): boolean =>
  state.layout.modal ? state.layout.modal.isOpen : false;

export const getModalTitleState = (state: InitialState): string =>
  state.layout.modal ? state.layout.modal.title : "";

export const createModalSelector = () =>
  createSelector(
    [getModalOpenState, getModalTitleState],
    (isOpen, title): Modal => ({ title, isOpen })
  );
