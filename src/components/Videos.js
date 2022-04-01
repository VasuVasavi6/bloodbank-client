import React from "react";
import ReactPlayer from "react-player";

function Videos() {
  return (
    <div className="bg-white h-full">
      <div className="w-2/3 mx-auto">
        <div className="flex flex-col space-y-16 justify-center items-center py-10">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=T0R7g9oFhlk"
            controls
            playbackRate={2}
            width="796px"
            height="404px"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PuiK_Jb_hAA"
            controls
            playbackRate={2}
            width="796px"
            height="404px"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ZogdirPLR7o"
            controls
            playbackRate={2}
            width="796px"
            height="404px"
          />
        </div>
      </div>
    </div>
  );
}

export default Videos;
