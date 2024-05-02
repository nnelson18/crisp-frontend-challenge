import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export function MetricTasksOpen() {
  const openTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === false)
  );

  return (
    <Typography sx={{ fontWeight: "bold" }}>
      Open Tasks: {openTasks.length}
    </Typography>
  );
}
