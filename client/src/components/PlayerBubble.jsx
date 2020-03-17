import React from 'react';

const PlayerBubble = ({ id, text, point, nextArray, dialogueHandler }) => {
  return (
    <div
      id={id}
      className='bubbleButton'
      onClick={() => {
        if (myVideo.getAttribute('name') === 'false') {
          dialogueHandler(true, nextArray, id, point);
        }
      }}
    >
      <div className='textForBubbleButton'>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
};

export default PlayerBubble;