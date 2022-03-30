import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Navheader from "./components/header/Navheader";
import MainFront from "./components/MainFront";
import { REQUEST_URL } from "./CONSTANTS";
import Register from "./components/Register";
import "react-toastify/dist/ReactToastify.css";
import LoggedInNav from "./components/header/LoggedInNav";
import SignIn from "./components/SignIn";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import BloodBank from "./components/BloodBank";
import PlasmaBank from "./components/PlasmaBank";
import ProfileHeader from "./components/profile/ProfileHeader";
import CreateProfile from "./components/profile/CreateProfile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [switchData, setSwitchData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${REQUEST_URL}/auth/login`,
      headers: {
        "x-access-token": localStorage.getItem("bloodtoken"),
      },
    }).then((response) => {
      if (response.data.auth === true) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [loggedIn]);
  return (
    <div className="app-color">
      {loggedIn && <LoggedInNav setLoggedIn={setLoggedIn} />}
      {!loggedIn && <Navheader />}

      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<MainFront setSwitchData={setSwitchData} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} />} />
        <Route
          path="/bloodbank"
          element={
            <BloodBank switchData={switchData} setSwitchData={setSwitchData} />
          }
        />
        <Route
          path="/plasmabank"
          element={
            <PlasmaBank switchData={switchData} setSwitchData={setSwitchData} />
          }
        />
        <Route path="/profile" element={<ProfileHeader />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
