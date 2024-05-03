import { useState } from "react";
import { TaskContainer } from "./components/TaskContainer";
import backgroundPic from "./assets/background.jpg";
//import viteLogo from '/vite.svg'

import "./App.css";
import { Container, Typography } from "@mui/material";
import { MetricContainer } from "./components/MetricContainer";
import { FilterTask } from "./components/FilterTaskByCategory";
import ResponsiveAppBar from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Container maxWidth="sm">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Typography
                  variant="h4"
                  sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Todo List
                </Typography>
                <TaskContainer />
              </>
            }
          />
          <Route
            path="/metrics"
            element={
              <>
                <Typography
                  variant="h4"
                  sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Metrics
                </Typography>
                <MetricContainer />
              </>
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
