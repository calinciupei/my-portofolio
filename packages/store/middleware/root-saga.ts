import { all, AllEffect } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

function* rootSaga(): IterableIterator<AllEffect<SagaIterator>> {
  yield all([]);
}

export default rootSaga;
