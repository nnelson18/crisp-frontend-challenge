import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskFunctionsSlice";
//import styles from "./AddNewTask.css";

export function AddNewTask() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(addTask({ title: value }));
      setValue("");
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" size="medium" type="submit">
          Add
        </Button>
      </Box>
    </form>
  );
}
