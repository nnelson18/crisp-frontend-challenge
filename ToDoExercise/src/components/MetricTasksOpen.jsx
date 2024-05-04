import { Box, Card, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";
import { useSelector } from "react-redux";

export function MetricTasksOpen() {
  const openTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === false)
  );
  const totalTasks = useSelector((state) => state.tasks.tasks);

  const percentageCompleted =
    totalTasks.length > 0 ? (openTasks.length / totalTasks.length) * 100 : 0;

  return (
    <Card
      sx={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
          Open Tasks:
        </Typography>
        <Gauge
          width={200}
          height={200}
          value={percentageCompleted}
          text={() => `${openTasks.length} / ${totalTasks.length}`}
        />
      </Box>
    </Card>
  );
}
