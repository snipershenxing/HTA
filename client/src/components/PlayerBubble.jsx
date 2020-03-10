import React from 'react';

const PlayerBubble = ({ id, text, point, nextArray, verticalPosition, height, dialogueHandler }) => {
  return (
    <div
      id={id}
      style={{ top: `${verticalPosition}px`, height: `${height}px` }}
      onClick={() => dialogueHandler(true, nextArray, id, point)}
      className='bubbleButton'>
      <p className='textForBubbleButton'>
        {text}
      </p>
    </div>
  )
};

export default PlayerBubble;