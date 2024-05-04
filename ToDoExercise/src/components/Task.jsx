import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
  TextField,
  Chip,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { deleteTask, checkTask, editTask } from "../store/tasksSlice";

export function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  const handleCompleteTask = () => {
    dispatch(checkTask({ id: task.id, completed: !task.completed }));
  };

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleSaveClick = () => {
    if (editTitle.length > 0) {
      dispatch(editTask({ id: task.id, title: editTitle }));
      setIsEditing(false);
    }
  };

  return (
    <Box>
      <ListItem
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "8px",
        }}
      >
        {isEditing ? (
          <>
            <TextField
              defaultValue={task.title}
              fullWidth
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            >
              Editing
            </TextField>
            <IconButton onClick={handleSaveClick}>
              <CheckIcon />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <CloseIcon />
            </IconButton>
          </>
        ) : (
          <>
            <ListItemIcon>
              <Checkbox
                onChange={handleCompleteTask}
                defaultChecked={task.completed}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </Typography>
                  {!!task.category && (
                    <Chip size="small" label={task.category} />
                  )}
                </Box>
              }
            />
            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </ListItem>
    </Box>
  );
}
