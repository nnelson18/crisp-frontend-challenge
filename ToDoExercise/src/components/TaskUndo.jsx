import { useDispatch, useSelector } from "react-redux";
import { undoTask } from "../store/tasksSlice";
import { Box } from "@mui/material";
import { Button } from "@mui/base";

const UndoButton = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.tasks.history);

  const handleUndoClick = () => {
    dispatch(undoTask());
  };

  const isUndoDisabled = history.length === 0;

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleUndoClick}
        disabled={isUndoDisabled}
      >
        Undo
      </Button>
    </Box>
  );
};

export default UndoButton;
