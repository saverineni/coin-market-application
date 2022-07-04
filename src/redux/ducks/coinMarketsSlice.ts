import {createSlice} from "@reduxjs/toolkit";
import {CoinsRawResponse} from "../../shared/Interfaces"

export interface ICoinMarketsResult {
    vs_currency: string,
    order: string,
    per_page: number,
    page: number,
    searchResults: CoinsRawResponse[];
    error: string,
}

export const initialResultsPayload: ICoinMarketsResult = {
    vs_currency: 'eur',
    order: 'market_cap_desc',
    per_page: 10,
    page: 1,
    searchResults: [],
    error: ''
};

const coinMarketsSlice = createSlice({
    name: "coinMarkets",
    initialState: initialResultsPayload,
    reducers: {
        fetchCoins: (state, action) => ({
            ...state,
            vs_currency: {...state, ...action.payload.vs_currency},
            order: {...state, ...action.payload.order},
            per_page: {...state, ...action.payload.per_page},
            page: {...state, ...action.payload.page},
        }),
        fetchCoinsSuccess: (state: any, action: any) => {
            state.searchResults = [...action.payload];
        },
        fetchCoinsFailure: (state: any, action: any) => ({
            ...state,
            error: action.payload,
        })
    }
});

export const {fetchCoins, fetchCoinsSuccess, fetchCoinsFailure} = coinMarketsSlice.actions;
export const coinMarketsReducer = coinMarketsSlice.reducer;
