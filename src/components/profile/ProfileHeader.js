import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { REQUEST_URL } from "../../CONSTANTS";

function ProfileHeader() {
  const [profileData, setProfileData] = useState([]);
  const [profileCheck, setProfileCheck] = useState(false);
  useEffect(() => {
    axios({
      method: "post",
      url: `${REQUEST_URL}/userroutesprofile/findprofile`,
      data: { id: localStorage.getItem("bloodid") },
    }).then((response) => {
      setProfileData(response.data);
      if (response.data.length) {
        setProfileCheck(true);
      }
    });
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="w-2/3 mx-auto pt-8">
        <div className="text-4xl font-bold ">Profile</div>
        <div className="text-xl font-semibold tracking-wider text-gray-600">
          Welcome {profileCheck ? "generic" : "User"}
        </div>

        {!profileCheck && (
          <>
            <div className="text-xl font-semibold tracking-wider text-gray-600">
              You have not yet set up a profile, Please add some info.
            </div>
            <Link to="/create-profile">
              <div className="mt-6 tracking-wider app-color px-10 py-4 text-white font-bold text-center cursor-pointer">
                Create Profile
              </div>
            </Link>
          </>
        )}
        {profileCheck && (
          <div className="mt-6 tracking-wider app-color px-10 py-4 text-white font-bold text-center cursor-pointer">
            Update Profile
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileHeader;
