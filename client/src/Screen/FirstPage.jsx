import React from 'react';

const FirstPage = ({ goToChooseDonor }) => {
  return (
    <div id='firstPage' className='firstPageContainer'>
      <img
        className='firstPage'
        src='./assets/LogoMenu.png'
        onLoad={() => {
          document.getElementById('firstPage').style.opacity = 1;
          for (let element of document.getElementsByClassName('goButton')) {
            element.style.opacity = 1;
          }
        }}
        onError={() => console.log('error loading image on first page')}
      />
      <div className='buttonContainer_firstPage'>

        <button className='goButton' onClick={goToChooseDonor}>Start</button>
        <button className='goButton' onClick={() => { }}>Quit</button>
        <button className='goButton' onClick={() => { }}>Load</button>
      </div>
    </div>
  );
};

export default FirstPage;