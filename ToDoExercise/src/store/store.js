import { configureStore } from "@reduxjs/toolkit";
import taskreducer from "./tasksSlice";

export default configureStore({
  reducer: {
    tasks: taskreducer,
  },
});
