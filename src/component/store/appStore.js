import { configureStore } from "@reduxjs/toolkit";
import appReducers from "../Reducers/useReducers";

const store=configureStore({
    reducer:appReducers
}
)
export default store;