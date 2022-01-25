import { OrdersResponse, OrderState } from "@crew/types";

export const ADD_ORDERS = "ORDERS/ADD";
export const SET_ORDERS = "ORDERS/SET";
export const UPDATE_ORDERS = "ORDERS/UPDATE";

export type AddOrders = {
  type: typeof ADD_ORDERS;
  payload: OrdersResponse;
};

export type SetOrders = {
  type: typeof SET_ORDERS;
  payload: OrderState;
};

export type UpdateOrders = {
  type: typeof UPDATE_ORDERS;
  payload: OrderState;
};
