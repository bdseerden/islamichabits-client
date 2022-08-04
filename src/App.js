import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PrayerPage from "./pages/PrayerPage/PrayerPage";
import "./App.css";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/prayer" element={<PrayerPage />} />
      </Routes>
    </>
  );
}

export default App;
