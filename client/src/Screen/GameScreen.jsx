import React from 'react';
import PlayerBubble from '../components/PlayerBubble.jsx';
import DonorBubble from '../components/DonorBubble.jsx';


const GameScreen = ({ donorDialogue, playerDialogues, currentVideo, currentPoster, logoutHandler, changeVideoHandler, dialogueHandler }) => {
  let vidH = window.innerHeight;
  return (
    <div
      id='videoContainer'
      style={{ position: 'absolute', zIndex: 5, background: `url("${currentPoster}") no-repeat center`, backgroundSize: 'contain', width: '100vw', height: '100vh' }}
    >
      <video
        id="myVideo"
        name='false'
        loop={false}
        muted
        poster={currentPoster}
        style={{
          opacity: 0, transition: "opacity 0s",
          backgroundColor: 'transparent',
          width: '100vw',
          height: '100vh'
        }}
        onCanPlay={() => {
          let myVideo = document.getElementById("myVideo");
          myVideo.style.opacity = 1;
        }}
        autoPlay={false}
        onEnded={() => {
          dialogueHandler(false, donorDialogue.nextDialogue);
          document.getElementById('myVideo').setAttribute('name', 'false');
        }}
      >
        <source src={currentVideo} type="video/mp4" autoPlay />
        Sorry, your browser doesn't support MP4.
      </video>
      <div id="dialogues" />
      {playerDialogues.length && playerDialogues.map((p, idx) =>
        <PlayerBubble
          id={idx}
          key={p.text}
          text={p.text}
          point={p.addScore}
          nextArray={p.nextDialogue}
          verticalPosition={100 + ((vidH - 200) / playerDialogues.length) * idx}
          height={((vidH - 200) / playerDialogues.length - 25)}
          dialogueHandler={dialogueHandler}
        />
      )}

      {donorDialogue && Object.keys(donorDialogue).length &&
        <DonorBubble
          text={donorDialogue.text}
          audio={`./assets/Breezy.m4a`}
          nextArray={donorDialogue.nextDialogue}
          dialogueHandler={dialogueHandler}
        />
      }

      <div style={{ width: 400, position: 'absolute', bottom: 0, left: 50 }}>
        <button style={{ width: '100%', height: 25 }} onClick={logoutHandler}>Log Out</button>
      </div>

    </div>
  )
};

export default GameScreen;