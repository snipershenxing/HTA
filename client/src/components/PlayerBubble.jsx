import React from 'react';

const PlayerBubble = ({ id, text, point, nextArray, verticalPosition, height, donorClickable, dialogueHandler }) => {
  return (
    <div
      id={id}
      style={{ top: `${verticalPosition}px`, height: `${height}px`, maxHeight: '23vh' }}
      onClick={() => {
        document.getElementById(id).style.filter = 'none';
        dialogueHandler(true, nextArray, id, point);
      }}
      onMouseEnter={() => { if (!donorClickable) document.getElementById(id).style.filter = 'brightness(0.7)'; }}
      onMouseLeave={() => { if (!donorClickable) document.getElementById(id).style.filter = 'none'; }}
      className='bubbleButton'>
      <p className='textForBubbleButton'>
        {text}
      </p>
    </div>
  )
};

export default PlayerBubble;