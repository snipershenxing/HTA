import React from 'react';
import useAudio from './AudioPlayer.js';

const DonorBubble = ({ text, audio, nextArray, dialogueHandler }) => {
  const [playing, toggle] = useAudio(audio);

  return (
    <div
      id='respondButton'
      className='respondButton'
      onClick={() => {
        let myVideo = document.getElementById("myVideo");
        if (myVideo.getAttribute('name') === 'false') {
          // myVideo.name = 'false';
          // myVideo.pause();
          // myVideo.currentTime = 0;
          // } else {
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