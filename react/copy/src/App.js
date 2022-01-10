import React, { useRef } from "react";

function App() {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  const handlePauseVideo = () => {
    vidRef.current.pause();
  };
  return (
    <div>
      <video ref={vidRef}>
        {/* <source
          src="https://www.youtube.com/watch?v=T6wbugWrfLU"
          type="video/mp4"
        /> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T6wbugWrfLU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </video>

      <button onClick={handlePlayVideo}>Play</button>
      <button onClick={handlePauseVideo}>Pause</button>
    </div>
  );
}

export default App;
