import { put, takeEvery, all, call }  from 'redux-saga/effects';

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

// Our worker Saga: will perform the async increment task
// sleeps for 1 second
//dispatches INCREMENT action
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// starts all sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
};