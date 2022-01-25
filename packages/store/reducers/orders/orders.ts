import { Reducer } from "redux";
import { OrderState } from "@crew/types";

import {
  ADD_ORDERS,
  SET_ORDERS,
  AddOrders,
  SetOrders,
  UPDATE_ORDERS,
  UpdateOrders,
} from "../../actions/order-book";

type ActionTypes = AddOrders | SetOrders | UpdateOrders;

const initialState: OrderState = {
  asks: [],
  bids: [],
};

const orderReducer: Reducer<OrderState, ActionTypes> = (
  state = initialState,
  action: ActionTypes
): OrderState => {
  const { payload } = action;

  switch (action.type) {
    case ADD_ORDERS:
      return {
        asks: [...payload.asks],
        bids: [...payload.asks],
      };
    case SET_ORDERS:
    case UPDATE_ORDERS:
      return {
        asks: { ...payload.asks },
        bids: { ...payload.bids },
      };
    default:
      return state;
  }
};

export default orderReducer;
