import React from 'react';
import MakeChoice from './MakeChoice.jsx';


const Authentication = ({ donorDialogue, playerDialogues, currentVideo, currentPoster, logoutHandler, changeVideoHandler }) => {
  let vidH = window.innerHeight;
  // console.log(vidH);
  return (
    <div id='videoContainer' style={{
      position: 'absolute', zIndex: 5
    }}>
      <video
        id="myVideo"
        loop={false}
        muted
        poster={currentPoster}
        style={{
          opacity: 0, transition: "opacity 2s",
          backgroundColor: 'transparent',
          width: '99vw',
          height: '99vh'
        }}
        onCanPlay={() => {
          let myVideo = document.getElementById("myVideo");
          myVideo.style.opacity = 1;
          setTimeout(() => { myVideo.play() }, 0);
        }}
      >
        <source src={currentVideo} type="video/mp4" autoPlay />
        Sorry, your browser doesn't support MP4.
      </video>
      <div id="vid2" />

      {playerDialogues.map((p, idx) =>
        <MakeChoice
          key={p.text}
          text={p.text}
          onClickFunc={p.action}
          clickable={p.clickable}
          verticalPosition={100 + ((vidH - 200) / 3) * idx}
          height={((vidH - 200) / playerDialogues.length - 25)}
        />
      )}

      <div style={{ width: 400, position: 'absolute', bottom: 0, left: 50 }}>
        <button style={{ width: '100%', height: 25 }} onClick={logoutHandler}>Log Out</button>
      </div>
      <div onClick={changeVideoHandler} className='respondButton'>
        <p className='textForRespondButton'>
          {donorDialogue}
        </p>
      </div>

    </div>
  )
};

export default Authentication;