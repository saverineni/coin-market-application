import {createSlice} from "@reduxjs/toolkit";
import {CoinDetailRawResponse} from "../../shared/Interfaces";

export interface ICoinDetailsResult {
    coinId: string,
    searchResult: CoinDetailRawResponse
}

export const initialResultsPayload: ICoinDetailsResult = {
    coinId: '',
    searchResult: {name: '', symbol: '', hashing_algorithm: '', genesis_date: '',
    market_data:{market_cap:{eur: 0}}}
};

const coinDetailsSlice = createSlice({
    name: "coinDetails",
    initialState: initialResultsPayload,
    reducers: {
        fetchCoinDetails: (state, action) => ({
            ...state,
            coinId: {...action.payload.coinId},
        }),
        fetchCoinsDetailsSuccess(state: any, action: any) {
            state.searchResult = {...action.payload};
        },
        fetchCoinsDetailsFailure: (state: any, action: any) => ({
            ...state,
            error: action.payload,
        })
    }
});

export const {fetchCoinDetails, fetchCoinsDetailsSuccess, fetchCoinsDetailsFailure} = coinDetailsSlice.actions;
export const coinDetailsReducer = coinDetailsSlice.reducer;
