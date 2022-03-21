import { InitialState } from "@crew/types";
import { createSelector } from "reselect";

const getOffsetTop = (state: InitialState): number => state.layout.currentPosition?.offsetTop || 0;

export const createCurrentPositionSelector = () => createSelector([getOffsetTop], (offsetTop) => ({ offsetTop }));
