import { put, select, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  ADD_ORDERS,
  SET_ORDERS,
  AddOrders,
  SetOrders,
} from "../actions/order-book";
import { Order, OrderResponse } from "@crew/types";

function adaptOrders(entry: OrderResponse[]): Order[] {
  return entry.map((prev) => {
    return {
      price: prev[0],
      size: prev[1],
    };
  });
}

export function* request(action: AddOrders): SagaIterator {
  try {
    const { asks, bids } = action.payload;
    const prevState = yield select((state) => state);

    yield put<SetOrders>({
      type: SET_ORDERS,
      payload: { asks: adaptOrders(asks), bids: adaptOrders(bids) },
    });
    
  } catch (e) {
    throw Error("Something is wrong!!!");
  }
}

export default function* orderBookSaga(): SagaIterator {
  yield takeLatest(ADD_ORDERS, request);
}
