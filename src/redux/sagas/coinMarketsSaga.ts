import {call, CallEffect, put, PutEffect, takeLatest,} from "redux-saga/effects";
import {fetchCoins, fetchCoinsFailure, fetchCoinsSuccess} from "../ducks/coinMarketsSlice";
import {Get} from "../../shared/fetch";
import {coinMarketsURL} from "../../shared/Endpoints";

export function* fetchCoinMarketsDataWorkerSaga(action: any): Generator<| CallEffect<unknown> | PutEffect<{
    payload: unknown; type: string;
}>, void, unknown> {
    try {
        const {vs_currency, order, per_page, page} = action.payload;
        const url: URL = coinMarketsURL('/coins/markets', vs_currency, order, per_page, page);
        const response = yield call(Get, url);
        yield put(fetchCoinsSuccess(response));
    } catch (error) {
        yield put(fetchCoinsFailure(error));
    }
}

export default function* watcherSaga(): any {
    yield takeLatest(fetchCoins.type, fetchCoinMarketsDataWorkerSaga);
}