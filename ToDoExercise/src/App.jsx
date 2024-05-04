import { TaskContainer } from "./components/TaskContainer";
import { Container } from "@mui/material";
import { MetricContainer } from "./components/MetricContainer";
import ResponsiveAppBar from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<TaskContainer />} />
          <Route path="/metrics" element={<MetricContainer />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
