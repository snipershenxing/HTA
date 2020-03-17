import React from 'react';
import PlayerBubble from '../components/PlayerBubble.jsx';
import DonorBubble from '../components/DonorBubble.jsx';


const GameScreen = ({ userName, donorDialogue, playerDialogues, currentVideo, currentPoster, currentAudio, logoutHandler, dialogueHandler }) => {
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
      <div className='playerDialogueContainer'>
        {playerDialogues.length > 0 && playerDialogues.map((p, idx) =>
          <PlayerBubble
            id={idx}
            key={p.text}
            text={p.text.replace('(PlayerName)', userName)}
            point={p.addScore}
            nextArray={p.nextDialogue}
            dialogueHandler={dialogueHandler}
          />
        )}
      </div>

      {donorDialogue && Object.keys(donorDialogue).length &&
        <DonorBubble
          text={donorDialogue.text.replace('(PlayerName)', userName)}
          audioUrl={currentAudio}
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