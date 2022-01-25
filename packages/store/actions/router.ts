import { RouterState } from "@crew/types";

const PUSH = "ROUTER/PUSH";
const REPLACE = "ROUTER/REPLACE";
const GO = "ROUTER/GO";
const BACK = "ROUTER/BACK";
const FORWARD = "ROUTER/FORWARD";
const UPDATE_ROUTE = "ROUTER/UPDATE_ROUTE";

export type UpdateCurrentRouteAction = {
  type: typeof UPDATE_ROUTE;
  payload: RouterState;
};

export type PushAction = {
  type: typeof PUSH;
  payload: RouterState;
};

export type ReplaceAction = {
  type: typeof REPLACE;
  payload: RouterState;
};

export type GoAction = {
  type: typeof GO;
  payload: number;
};

export type BackAction = {
  type: typeof BACK;
  payload: RouterState;
};

export type ForwardAction = {
  type: typeof FORWARD;
  payload: RouterState;
};

export { PUSH, REPLACE, GO, BACK, FORWARD, UPDATE_ROUTE };
