import React from 'react';

const MakeChoice = ({ text, onClickFunc, clickable, verticalPosition, height }) => {
  return (
    <div style={{ top: `${verticalPosition}px`, height: `${height}px` }} onClick={clickable ? onClickFunc : () => { }} className='bubbleButton'>
      <p className='textForBubbleButton'>
        {text}
      </p>
    </div>
  )
};

export default MakeChoice;