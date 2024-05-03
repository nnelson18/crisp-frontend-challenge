import { Box, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";
import React from "react";
import { useSelector } from "react-redux";

export function MetricTasksOpen() {
  const openTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === false)
  );
  const totalTasks = useSelector((state) => state.tasks.tasks);

  const percentageCompleted =
    totalTasks.length > 0 ? (openTasks.length / totalTasks.length) * 100 : 0;

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>Open Tasks:</Typography>
      <Gauge
        width={100}
        height={100}
        value={percentageCompleted}
        text={() => `${openTasks.length} / ${totalTasks.length}`}
      />
    </Box>
  );
}
