import React from 'react';

const PlayerBubble = ({ id, text, point, nextArray, dialogueHandler }) => {
  return (
    <div
      id={id}
      className={text === ' . . . ' ? 'bubbleButton tripleDots' : 'bubbleButton'}
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