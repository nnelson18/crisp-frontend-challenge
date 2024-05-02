import { Box, List } from "@mui/material";
import React from "react";
import { Task } from "./Task";
import { useSelector } from "react-redux";

export function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <Box>
      <List>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </List>
    </Box>
  );
}
