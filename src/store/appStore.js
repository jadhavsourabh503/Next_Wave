import { configureStore } from "@reduxjs/toolkit";
import appReducers from "../Reducer/appReducer";
const store=configureStore({
    reducer:appReducers
}
)
export default store;