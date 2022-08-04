import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import "./App.css";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
