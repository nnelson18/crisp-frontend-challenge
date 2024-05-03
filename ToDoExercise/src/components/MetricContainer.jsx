import { useSelector } from "react-redux";
import { MetricTasksCompleted } from "./MetricTasksCompleted";
import { MetricTasksOpen } from "./MetricTasksOpen";
import React from "react";
import { MetricTaskAvgDuration } from "./MetricTaskAvgDuration";
import { Box } from "@mui/material";

export function MetricContainer() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <MetricTasksCompleted />
      <MetricTasksOpen />
      <MetricTaskAvgDuration />
    </Box>
  );
}
