import { Card, Typography } from "@mui/material";
import { AddNewTask } from "./AddNewTask";
import { TaskList } from "./TaskList";
import UndoButton from "./TaskUndo";

export function TaskContainer() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Tasks
      </Typography>
      <Card sx={{ padding: "1rem" }}>
        <AddNewTask />
        <TaskList />
        <UndoButton />
      </Card>
    </>
  );
}
