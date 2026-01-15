import React from "react";
import ReactPlayer from "react-player";

const TestPlayer = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-20">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default TestPlayer;