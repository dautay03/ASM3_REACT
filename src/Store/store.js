import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer/reducer";

export const store = configureStore({
    reducer: counterSlice.reducer
})


