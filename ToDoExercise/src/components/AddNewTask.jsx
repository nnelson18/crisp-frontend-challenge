import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";
import { FilterTask } from "./FilterTaskByCategory";
//import styles from "./AddNewTask.css";

export function AddNewTask() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      dispatch(addTask({ title: task, category }));
      setTask("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          size="small"
          label="Add a new task "
          variant="outlined"
          sx={{ flex: 1, mr: 1, height: "100%" }}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <TextField
          size="small"
          label="Add Category "
          variant="outlined"
          sx={{ flex: 1, mr: 1, height: "100%" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button variant="contained" size="medium" type="submit">
          Add
        </Button>
      </Box>
    </form>
  );
}
