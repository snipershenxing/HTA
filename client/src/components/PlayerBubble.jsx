import React from 'react';

const PlayerBubble = ({ id, text, point, nextArray, verticalPosition, height, dialogueHandler }) => {
  return (
    <div
      id={id}
      style={{ top: `${verticalPosition}px`, height: `${height}px` }}
      onClick={() => {
        document.getElementById(id).style.filter = 'none';
        dialogueHandler(true, nextArray, id, point);
      }}
      onMouseEnter={() => { if (point) document.getElementById(id).style.filter = 'brightness(0.7)'; }}
      onMouseLeave={() => { if (point) document.getElementById(id).style.filter = 'none'; }}
      className='bubbleButton'>
      <p className='textForBubbleButton'>
        {text}
      </p>
    </div>
  )
};

export default PlayerBubble;