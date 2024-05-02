import { useSelector } from "react-redux";
import { MetricTasksCompleted } from "./MetricTasksCompleted";
import { MetricTasksOpen } from "./MetricTasksOpen";
import React from "react";

export function MetricContainer() {
  return (
    <>
      <MetricTasksCompleted />
      <MetricTasksOpen />
    </>
  );
}
