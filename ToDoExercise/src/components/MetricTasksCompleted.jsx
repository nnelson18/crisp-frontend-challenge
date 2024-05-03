import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Gauge } from "@mui/x-charts/Gauge";

export function MetricTasksCompleted() {
  const completedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === true)
  );
  const totalTasks = useSelector((state) => state.tasks.tasks);

  const percentageCompleted =
    totalTasks.length > 0
      ? (completedTasks.length / totalTasks.length) * 100
      : 0;

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>Completed Tasks:</Typography>
      <Gauge
        width={100}
        height={100}
        value={percentageCompleted}
        text={() => `${completedTasks.length} / ${totalTasks.length}`}
      />
    </Box>
  );
}
