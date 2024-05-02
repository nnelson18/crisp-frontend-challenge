import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Icon,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  completeTask,
  editTask,
} from "../store/taskFunctionsSlice";

export function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  const handleCompleteTask = () => {
    dispatch(completeTask({ id: task.id, completed: !task.completed }));
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
                <Typography
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </Typography>
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
