import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export function MetricTasksCompleted() {
  const completedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === true)
  );

  return (
    <Typography sx={{ fontWeight: "bold" }}>
      Completed Tasks: {completedTasks.length}
    </Typography>
  );
}
