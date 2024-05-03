import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export function MetricTaskAvgDuration() {
  const completedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === true)
  );

  const totalCompletionTime = completedTasks.reduce((acc, task) => {
    if (task.endTime && task.startTime) {
      return acc + (task.endTime - task.startTime);
    }
    return acc;
  }, 0);

  const averageTime =
    completedTasks.length > 0
      ? dayjs
          .duration(totalCompletionTime / completedTasks.length)
          .format("HH:mm:ss")
      : 0;
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>
        Average Completion time: {averageTime}
      </Typography>
    </Box>
  );
}
