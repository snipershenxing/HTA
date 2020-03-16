import React from 'react';

const DonorBubble = ({ text, nextArray, dialogueHandler }) => {
  return (
    <div
      id='respondButton'
      className='respondButton'
      onClick={() => {
        document.getElementById('respondButton').style.filter = 'none';
        // dialogueHandler(false, nextArray);
        let myVideo = document.getElementById("myVideo");
        myVideo.play();
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