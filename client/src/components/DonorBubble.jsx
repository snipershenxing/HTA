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
      onMouseEnter={() => { document.getElementById('respondButton').style.filter = 'brightness(0.7)'; }}
      onMouseLeave={() => { document.getElementById('respondButton').style.filter = 'none'; }}
    >
      <p className='textForRespondButton'>
        {text}
      </p>

    </div>
  )
};

export default DonorBubble;