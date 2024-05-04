import { MetricTasksCompleted } from "./MetricTasksCompleted";
import { MetricTasksOpen } from "./MetricTasksOpen";
import { MetricTaskAvgDuration } from "./MetricTaskAvgDuration";
import { Grid, Typography } from "@mui/material";

export function MetricContainer() {
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
        Metrics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MetricTasksCompleted />
        </Grid>
        <Grid item xs={6}>
          <MetricTasksOpen />
        </Grid>
      </Grid>

      <MetricTaskAvgDuration />
    </>
  );
}
