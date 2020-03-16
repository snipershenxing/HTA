import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

// const AudioPlayer = (props) => {
//   const [playing, toggle] = useAudio(props.url);

//   return (
//     <div onClick={toggle}>
//       {/* <button >{playing ? "Pause" : "Play"}</button> */}
//       {props.children}
//     </div>
//   );
// };

export default useAudio;