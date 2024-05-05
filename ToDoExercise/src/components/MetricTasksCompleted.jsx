import { Box, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export function MetricTasksCompleted() {
  const completedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.completed === true)
  );
  const totalTasks = useSelector((state) => state.tasks.tasks);

  const percentageCompleted =
    totalTasks.length > 0
      ? (completedTasks.length / totalTasks.length) * 100
      : 0;

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
          Completed Tasks:
        </Typography>
        <Gauge
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: "1.5rem",
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#95E88E",
            },
          }}
          width={200}
          height={200}
          value={percentageCompleted}
          text={() => `${completedTasks.length} / ${totalTasks.length}`}
        />
      </Box>
    </Card>
  );
}
