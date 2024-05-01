import { createSlice } from "@reduxjs/toolkit";

const taskFunctionsSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      //   { id: 1, title: "task1", category: "work", completed: true },
      //   { id: 2, title: "task2", category: "work", completed: false },
      //   { id: 3, title: "task3", category: "work", completed: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks.push(newTask);
    },
  },
});

export const { addTask } = taskFunctionsSlice.actions;
export default taskFunctionsSlice.reducer;
