import {configureStore}  from "@reduxjs/toolkit";
import taskreducer from "./taskFunctionsSlice";

export default configureStore({
    reducer: {
        tasks: taskreducer,
    },
});