import { useState } from "react";
import { TaskContainer } from "./components/TaskContainer";
import backgroundPic from "./assets/background.jpg";
//import viteLogo from '/vite.svg'

import "./App.css";
import { Container, Typography } from "@mui/material";
import { MetricContainer } from "./components/MetricContainer";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        sx={{ paddingTop: "1rem", paddingBottom: "1rem", fontWeight: "bold" }}
      >
        Todo List
      </Typography>
      <TaskContainer />
      <MetricContainer />
    </Container>
  );
}

export default App;
