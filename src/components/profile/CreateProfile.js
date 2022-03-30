import axios from "axios";
import React, { useState } from "react";
import { api_key, api_url, REQUEST_URL } from "../../CONSTANTS";
import { Toast } from "../helper/HelperFunctions";

const initialValues = {
  bio: "",
  weight: "",
  lastdonationdate: "",
  mobilenumber: "",
  disease: "",
  availability: "",
  state: "",
  district: "",
  city: "",
};

function CreateProfile() {
  const [inputValues, setInputValues] = useState(initialValues);
  const [currentLocation, setCurrentLocation] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = (e) => {
    if (
      inputValues.bio === "" ||
      inputValues.weight === "" ||
      inputValues.lastdonationdate === "" ||
      inputValues.mobilenumber === "" ||
      inputValues.disease === "" ||
      inputValues.availability === "" ||
      inputValues.state === "" ||
      inputValues.district === "" ||
      inputValues.city === ""
    ) {
      Toast("error", "Some Fields are Empty");
    } else {
      axios({
        method: "post",
        url: `${REQUEST_URL}/userroutesprofile/addprofile`,
        data: {
          userid: localStorage.getItem("bloodid"),
          bio: inputValues.bio,
          weight: inputValues.weight,
          lastdonationdate: inputValues.lastdonationdate,
          mobilenumber: inputValues.mobilenumber,
          disease: inputValues.disease,
          availability: inputValues.availability,
          state: inputValues.state,
          district: inputValues.district,
          city: inputValues.city,
        },
      }).then((response) => {
        console.log(response.data);
        Toast("success", response.data.message);
      });
    }
  };

  const getCureentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        const lat = 32.262341;
        const long = 75.166168;
        var request_url =
          api_url +
          "?" +
          "key=" +
          api_key +
          "&q=" +
          encodeURIComponent(
            position.coords.latitude + "," + position.coords.longitude
          ) +
          "&pretty=1" +
          "&no_annotations=1";
        axios({
          method: "get",
          url: request_url,
        }).then((response) => {
          setCurrentLocation(response.data.results[0].formatted);
        });
      });
    } else {
      console.log("Not Available");
    }
  };

  return (
    <div className="bg-white w-full logo-color">
      <div className="w-2/3 mx-auto">
        <div className=" text-4xl font-bold tracking-wider pt-8">
          Create Your Profile
        </div>
        <div className="text-xl font-semibold tracking-wide mt-2">
          Let's get some information to make your profile stand out
        </div>

        <div className="flex mx-auto mt-4 space-x-16">
          <div className="flex flex-col w-1/2">
            <label htmlFor="fullname" className="logo-color font-bold">
              Bio *
            </label>
            <input
              type="text"
              name="bio"
              className="bloodbank-input-border px-3 py-1 w-full"
              placeholder="A short Bio of yourself"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="password" className="logo-color font-bold">
              Weight *
            </label>
            <input
              type="password"
              name="weight"
              className="bloodbank-input-border px-3 py-1 w-full"
              placeholder="Weight"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="fullname" className="logo-color font-bold">
              Last Donation Date *
            </label>
            <input
              type="date"
              name="lastdonationdate"
              className="bloodbank-input-border px-3 py-1 w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mx-auto mt-4">
          <div className="flex flex-col w-full">
            <label htmlFor="fullname" className="logo-color font-bold">
              Mobile Number *
            </label>
            <input
              type="text"
              name="mobilenumber"
              className="bloodbank-input-border px-3 py-1 w-full"
              placeholder="Mobile Number"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex mx-auto mt-4 space-x-16">
          <div className="flex flex-col w-1/2">
            <label htmlFor="fullname" className="logo-color font-bold">
              Disease *
            </label>
            <input
              type="text"
              name="disease"
              className="bloodbank-input-border px-3 py-1 w-full"
              onChange={handleInputChange}
            />
            <div>
              (Please provide disease you obtain as (Diabetes, Cancer, Covid-19,
              etc).
              <br />
              If not then mention as : No disease)
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="password" className="logo-color font-bold">
              Are you available for donate *
            </label>
            <select
              name="availability"
              id="availability"
              className="bloodbank-input-border px-3 py-1"
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="text-3xl tracking-wider mt-4">Location</div>
        <div className="flex mx-auto mt-4 space-x-16">
          <div className="flex flex-col w-1/2">
            <label htmlFor="fullname" className="logo-color font-bold">
              State *
            </label>
            <input
              type="text"
              name="state"
              className="bloodbank-input-border px-3 py-1 w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="password" className="logo-color font-bold">
              District *
            </label>
            <input
              type="password"
              name="district"
              className="bloodbank-input-border px-3 py-1 w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mx-auto mt-4">
          <div className="w-full">
            <label htmlFor="fullname" className="logo-color font-bold">
              City *
            </label>
            <input
              type="text"
              name="city"
              className="bloodbank-input-border px-3 py-1 w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="font-semibold my-4">{currentLocation}</div>
        <div
          className="app-color px-5 py-3 text-white text-center font-bold tracking-widest my-8 cursor-pointer"
          onClick={getCureentLocation}
        >
          Get Current Location
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
