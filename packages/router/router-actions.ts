import { State } from "history";

const PUSH = "ROUTER/PUSH";
const REPLACE = "ROUTER/REPLACE";
const GO = "ROUTER/GO";
const BACK = "ROUTER/BACK";
const FORWARD = "ROUTER/FORWARD";
const UPDATE_ROUTE = "ROUTER/UPDATE_ROUTE";

export type UpdateCurrentRouteAction = {
  type: typeof UPDATE_ROUTE;
  payload: { path: string; metadata?: State };
};

export type PushAction = {
  type: typeof PUSH;
  payload: { path: string; metadata?: State };
};

export type ReplaceAction = {
  type: typeof REPLACE;
  payload: { path: string; metadata?: State };
};

export type GoAction = {
  type: typeof GO;
  payload: number;
};

export type BackAction = {
  type: typeof BACK;
  payload: { path: string; metadata?: State };
};

export type ForwardAction = {
  type: typeof FORWARD;
  payload: { path: string; metadata?: State };
};

export { PUSH, REPLACE, GO, BACK, FORWARD, UPDATE_ROUTE };
