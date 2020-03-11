import React from 'react';

const DonorBubble = ({ text, nextArray, dialogueHandler, donorClickable }) => {
  return (
    <div
      id='respondButton'
      className='respondButton'
      onClick={() => {
        document.getElementById('respondButton').style.filter = 'none';
        dialogueHandler(false, nextArray);
      }}
      onMouseEnter={() => { if (donorClickable) document.getElementById('respondButton').style.filter = 'brightness(0.7)'; }}
      onMouseLeave={() => { if (donorClickable) document.getElementById('respondButton').style.filter = 'none'; }}
    >
      <p className='textForRespondButton'>
        {text}
      </p>
    </div>
  )
};

export default DonorBubble;