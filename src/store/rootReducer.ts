import {combineReducers} from "redux";
import {coinMarketsReducer} from "../redux/ducks/coinMarketsSlice";
import {coinDetailsReducer} from "../redux/ducks/coinDetailsSlice";


const appReducer = combineReducers({
    coinMarketsReducer,
    coinDetailsReducer
});

export const index = (state: any, action: any) => appReducer(state, action);

export type RootState = ReturnType<typeof index>;