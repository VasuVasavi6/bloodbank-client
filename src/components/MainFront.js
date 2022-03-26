import React from "react";

function MainFront() {
  return (
    <div className="text-white font-semibold px-8 w-full">
      <div className="flex flex-col w-1/2 px-8">
        <div className="flex space-x-4">
          <div className="text-2xl">Blood Bank</div>
          <div className="text-2xl">Plasma Bank</div>
        </div>
        <div className="flex items-center space-x-12 mt-12">
          <div className="flex flex-col w-1/2 space-y-8 ">
            <input
              type="text"
              placeholder="Select State"
              className="h-10 rounded-lg text-black px-4 py-2"
            />
            <input
              type="text"
              placeholder="Select City"
              className="h-10 rounded-lg text-black px-4 py-2"
            />
          </div>
          <div className="text-md bg-white logo-color px-8 py-2 rounded-xl cursor-pointer">
            Find
          </div>
        </div>
        <div className="mt-20 flex">
          <div className="bg-white ml-36 logo-color py-2 px-4 rounded-lg cursor-pointer">
            Donate
          </div>
        </div>
      </div>
      {/* Image section */}
    </div>
  );
}

export default MainFront;
