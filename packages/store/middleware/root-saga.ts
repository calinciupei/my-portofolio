import { all, AllEffect } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import orderBookSaga from "./order-book-saga";

function* rootSaga(): IterableIterator<AllEffect<SagaIterator>> {
  yield all([orderBookSaga()]);
}

export default rootSaga;
