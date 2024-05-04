import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    history: [],
    categories: [],
    filters: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        startTime: Date.now(),
        endTime: null,
      };
      if (action.payload.category.length > 0) {
        newTask.category = action.payload.category;
      }
      state.tasks.push(newTask);
      state.history.push({ type: "add", task: newTask });
      if (
        !state.categories.includes(action.payload.category) &&
        action.payload.category.length > 0
      ) {
        state.categories.push(action.payload.category);
      }
    },

    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        const deletedTask = state.tasks[taskIndex];
        state.tasks.splice(taskIndex, 1);
        if (
          !state.tasks.some((task) => task.category === deletedTask.category)
        ) {
          state.categories = state.categories.filter(
            (category) => category !== deletedTask.category
          );
        }

        state.history.push({ type: "delete", task: deletedTask });
      }
    },

    checkTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].endTime = state.tasks[index].completed
        ? null
        : Date.now();
      state.tasks[index].completed = action.payload.completed;
    },

    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].title = action.payload.title;
    },

    undoTask: (state) => {
      const lastAction = state.history.pop();
      if (lastAction) {
        if (lastAction.type === "add") {
          state.tasks = state.tasks.filter(
            (task) => task.id !== lastAction.task.id
          );
          if (
            !state.tasks.some(
              (task) => task.category === lastAction.task.category
            )
          ) {
            state.categories = state.categories.filter(
              (category) => category !== lastAction.task.category
            );
          }
        } else if (lastAction.type === "delete") {
          state.tasks.push(lastAction.task);
          if (!state.categories.includes(lastAction.task.category)) {
            state.categories.push(lastAction.task.category);
          }
        }
      }
    },

    toggleFilter: (state, { payload: { category } }) => {
      const filterIndex = state.filters.findIndex(
        (filter) => filter === category
      );
      if (filterIndex !== -1) {
        state.filters.splice(filterIndex, 1);
      } else {
        state.filters.push(category);
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  checkTask,
  editTask,
  undoTask,
  toggleFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
