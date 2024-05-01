import { useState } from "react";
import { TaskContainer } from "./components/TaskContainer";
import backgroundPic from "./assets/background.jpg";
//import viteLogo from '/vite.svg'

import "./App.css";
import { Container } from "@mui/material";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <h1 style={{ marginLeft: 32 }}>Todo List</h1>
      <TaskContainer />
    </Container>
  );
}

export default App;
