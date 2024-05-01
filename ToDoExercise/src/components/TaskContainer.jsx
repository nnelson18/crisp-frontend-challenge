import React from "react";

import { Container } from "@mui/material";

import { AddNewTask } from "./AddNewTask";
import { TaskList } from "./TaskList";
import { useSelector } from "react-redux";

export function TaskContainer() {
  return (
    <Container>
      <AddNewTask />
      <TaskList />
    </Container>
  );
}
