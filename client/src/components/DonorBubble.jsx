import React from 'react';

const DonorBubble = ({ text, nextArray, dialogueHandler }) => {
  return (
    <div onClick={() => dialogueHandler(false, nextArray)} className='respondButton'>
      <p className='textForRespondButton'>
        {text}
      </p>
    </div>
  )
};

export default DonorBubble;