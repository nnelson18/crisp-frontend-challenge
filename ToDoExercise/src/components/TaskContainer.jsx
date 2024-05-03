import React from "react";

import { Container } from "@mui/material";

import { AddNewTask } from "./AddNewTask";
import { TaskList } from "./TaskList";
import { useSelector } from "react-redux";
import UndoButton from "./TaskUndo";

export function TaskContainer() {
  return (
    <>
      <AddNewTask />
      <TaskList />
      <UndoButton />
    </>
  );
}
