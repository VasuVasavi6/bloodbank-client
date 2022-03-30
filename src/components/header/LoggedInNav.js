import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toast } from "../helper/HelperFunctions";

function LoggedInNav({ setLoggedIn }) {
  return (
    <div className="w-full h-28">
      <div className="w-4/5 m-auto bg-white flex justify-between items-center py-5 rounded-lg shadow-2xl">
        <div className="font-bold display-3 text-5xl logo-color ml-4">
          BLOOD SPOT
        </div>
        <div className="flex justify-between items-center space-x-8 mr-6">
          <div className="logo-color text-3xl contact-border">
            +91-123456789
          </div>
          <Link to="/profile">
            <div className="navheader-btn cursor-pointer">Profile</div>
          </Link>
          <div className="navheader-btn cursor-pointer">Emergengy Corner</div>
          <div
            className="navheader-btn cursor-pointer"
            onClick={() => {
              localStorage.removeItem("bloodid");
              localStorage.removeItem("bloodtoken");
              setLoggedIn(false);
              Toast("success", "Logged Out Successfully");
            }}
          >
            Log Out
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default LoggedInNav;
