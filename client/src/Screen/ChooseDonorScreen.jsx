import React from 'react';
import GameScreen from './GameScreen.jsx';

const ChooseDonor = ({ donorDialogue, playerDialogues, donorClickable, currentVideo, currentPoster, logoutHandler, changeVideoHandler, dialogueHandler }) => {
  return (
    <div>
      <GameScreen
        playerDialogues={playerDialogues}
        donorDialogue={donorDialogue}
        donorClickable={donorClickable}
        currentVideo={currentVideo}
        currentPoster={currentPoster}
        logoutHandler={logoutHandler}
        changeVideoHandler={changeVideoHandler}
        dialogueHandler={dialogueHandler}
      />
    </div>
  );
};

export default ChooseDonor;