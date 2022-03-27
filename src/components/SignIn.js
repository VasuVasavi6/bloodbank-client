import React from "react";

function SignIn() {
  return (
    <div className=" bg-white sign-in-page-length pt-16">
      <div className="h-96 app-color w-2/3 mx-auto flex rounded-3xl sign-in-page-border">
        <div className="w-1/2 text-white font-bold text-4xl flex justify-center items-center">
          Blood Spot
        </div>
        <div className="w-1/2 bg-white">
          <div className="text-2xl text-center mt-5 logo-color font-bold">
            Sign In
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <input
              type="text"
              placeholder="Email"
              className="signinpage-input-bottom px-3 py-2 mt-3"
              name="email"
            />
            <input
              type="text"
              placeholder="Password"
              className="signinpage-input-bottom px-3 py-2 mt-3"
              name="password"
            />
          </div>

          <div className="flex justify-center items-center mt-10">
            <div className="app-color px-8 py-3 rounded-full text-white font-semibold cursor-pointer">
              LogIn
            </div>
          </div>
          <div className="logo-color text-center mt-5">
            Don't have a account
            <span className="font-bold cursor-pointer">Register Here</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
