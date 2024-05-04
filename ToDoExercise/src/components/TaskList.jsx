import { Box, List } from "@mui/material";
import { Task } from "./Task";
import { useSelector } from "react-redux";
import { FilterTask } from "./FilterTaskByCategory";

export function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filters = useSelector((state) => state.tasks.filters);
  return (
    <Box>
      <FilterTask />
      <List>
        {tasks.map((task) => {
          if (!filters.length) {
            return <Task key={task.id} task={task} />;
          } else if (filters.includes(task.category)) {
            return <Task key={task.id} task={task} />;
          }
        })}
      </List>
    </Box>
  );
}
