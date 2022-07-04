import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { index } from "./rootReducer";
import sagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: index,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
