import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Navheader from "./components/header/Navheader";
import MainFront from "./components/MainFront";
import { REQUEST_URL } from "./CONSTANTS";

function App() {
  return (
    <div className="app-color h-screen">
      <Navheader />
      <Navbar />
      <MainFront />
    </div>
  );
}

export default App;
