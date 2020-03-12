import React from 'react';

const ChooseCommunication = ({ chooseCom, name }) => {
  return (
    <div className='chooseDonor'>
      <div className="telephone"
        onClick={() => chooseCom(`${name}Phone`)}
      >
        <img
          id='phone'
          className='phone'
          src='./assets/TheCall.png'
          onLoad={() => {
            document.getElementById('phone').style.opacity = 1;
          }}
          onError={() => console.log('error loading image on first page')}
          onMouseEnter={() => {
            document.getElementById('phone').src = './assets/TheCallHover.png'
          }}
          onMouseLeave={() => {
            document.getElementById('phone').src = './assets/TheCall.png'
          }}
          onMouseDown={() => {
            document.getElementById('phone').src = './assets/TheCallPressed.png'
          }}
        />
        <h2>
          Phone
          </h2>
      </div>
      <div className="meeting"
        onClick={() => chooseCom(`${name}Meeting`)}
      >
        <img
          id='meet'
          className='meet'
          src='./assets/TheAsk.png'
          onLoad={() => {
            document.getElementById('meet').style.opacity = 1;
          }}
          onError={() => console.log('error loading image on first page')}
          onMouseEnter={() => {
            document.getElementById('meet').src = './assets/TheAskHover.png'
          }}
          onMouseLeave={() => {
            document.getElementById('meet').src = './assets/TheAsk.png'
          }}
          onMouseDown={() => {
            document.getElementById('meet').src = './assets/TheAskPressed.png'
          }}
        />
        <h2>
          Meeting
          </h2>
      </div>
    </div>
  );
};

export default ChooseCommunication;