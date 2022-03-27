import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Navheader from "./components/header/Navheader";
import MainFront from "./components/MainFront";
import { REQUEST_URL } from "./CONSTANTS";
import Register from "./components/Register";
import "react-toastify/dist/ReactToastify.css";
import LoggedInNav from "./components/header/LoggedInNav";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="app-color h-screen">
      <Navheader />
      {/* <LoggedInNav /> */}
      <Navbar />

      {/* <MainFront /> */}

      {/* Regitster page */}
      {/* <Register /> */}

      {/* Login In page */}
      <SignIn />
    </div>
  );
}

export default App;
