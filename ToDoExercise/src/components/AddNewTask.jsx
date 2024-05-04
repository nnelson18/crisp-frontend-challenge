import { useState } from "react";
import { TextField, Box, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

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
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <TextField
              size="small"
              label="Add a new task..."
              variant="outlined"
              sx={{ flex: 1, mr: 1, height: "100%" }}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              size="small"
              label="Add category..."
              variant="outlined"
              sx={{ flex: 1, mr: 1, height: "100%" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          size="medium"
          type="submit"
          sx={{ marginLeft: "1rem" }}
        >
          Add
        </Button>
      </Box>
    </form>
  );
}
