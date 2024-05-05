import { Box, Chip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../store/tasksSlice";

export function FilterTask() {
  const { categories, filters } = useSelector((state) => ({
    categories: state.tasks.categories,
    filters: state.tasks.filters,
  }));

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(toggleFilter({ category }));
  };

  return (
    categories.length > 0 && (
      <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Filter By Category:{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            marginTop: "0.25rem",
          }}
        >
          {categories.map(
            (category) =>
              category && (
                <Chip
                  key={category}
                  label={category}
                  variant={filters.includes(category) ? "filled" : "outlined"}
                  onClick={() => handleCategoryClick(category)}
                  color={filters.includes(category) ? "primary" : "default"}
                />
              )
          )}
        </Box>
      </Box>
    )
  );
}
