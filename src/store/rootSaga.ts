import {all, AllEffect, fork, ForkEffect} from "redux-saga/effects";
import coinDetailsSaga from "../redux/sagas/coinDetailsSaga";
import coinMarketsSaga from "../redux/sagas/coinMarketsSaga";

export default function* rootSaga(): Generator<AllEffect<ForkEffect<unknown>>,
    void,
    unknown> {
    yield all([fork(coinMarketsSaga)]);
    yield all([fork(coinDetailsSaga)]);
}
