import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Icon,
  IconButton,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function Task({ id, title, completed }) {
  return (
    <Box>
      <ListItem
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "8px",
        }}
      >
        <ListItemIcon>
          <Checkbox defaultChecked={completed} />
        </ListItemIcon>
        <ListItemText>{title} </ListItemText>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Box>
  );
}
