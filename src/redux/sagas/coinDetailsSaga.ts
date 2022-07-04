import {call, CallEffect, put, PutEffect, takeLatest,} from "redux-saga/effects";
import {Get} from "../../shared/fetch";
import {coinDetailURL} from "../../shared/Endpoints";
import {fetchCoinDetails, fetchCoinsDetailsFailure, fetchCoinsDetailsSuccess} from "../ducks/coinDetailsSlice";

export function* fetchCoinDetailsWorkerSaga(action: any): Generator<| CallEffect<unknown> | PutEffect<{
    payload: unknown; type: string;
}>, void, unknown> {
    try {
        const {coinId} = action.payload;
        const url: URL = coinDetailURL('/coins/', coinId);
        const response = yield call(Get, url);
        yield put(fetchCoinsDetailsSuccess(response));
    } catch (error) {
        yield put(fetchCoinsDetailsFailure(error));
    }
}

export default function* watcherSaga(): any {
    yield takeLatest(fetchCoinDetails.type, fetchCoinDetailsWorkerSaga);
}