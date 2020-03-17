import React from 'react';
import useAudio from './AudioPlayer.js';

const DonorBubble = ({ text, audioUrl }) => {
  const [playing, toggle] = useAudio(audioUrl);

  return (
    <div
      id='respondButton'
      className='respondButton'
      onClick={() => {
        let myVideo = document.getElementById("myVideo");
        if (myVideo.getAttribute('name') === 'false' && !playing) {
          toggle();
          myVideo.setAttribute('name', 'true');
          myVideo.play();
        }
      }}
    >
      <p className='textForRespondButton'>
        {text}
      </p>

    </div>
  )
};

export default DonorBubble;