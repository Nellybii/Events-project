import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main style={{height: '100vh'}}>
      <NavBar />
      <Container >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addevent" element={<AddEvent />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
