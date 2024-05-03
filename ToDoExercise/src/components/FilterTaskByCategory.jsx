import { Box, Chip, List, Typography } from "@mui/material";
import React from "react";
import { Task } from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../store/tasksSlice";

export function FilterTask() {
  const categories = useSelector((state) => state.tasks.categories);
  const filters = useSelector((state) => state.tasks.filters);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(toggleFilter({ category }));
  };

  console.log(filters);
  return (
    categories.length > 0 && (
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          Filter By Category:{" "}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {categories.map(
            (category) =>
              category && (
                <Chip
                  key={category}
                  label={category}
                  variant={filters.includes(category) ? "filled" : "outlined"}
                  onClick={() => handleCategoryClick(category)}
                />
              )
          )}
        </Box>
      </Box>
    )
  );
}
