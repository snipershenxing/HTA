import React from 'react';

const FirstPage = ({ goToChooseDonor }) => {
  return (
    <div id='firstPage'>
      <img
        className='firstPage'
        src='./assets/LogoMenu.png'
        onLoad={() => {
          document.getElementById('firstPage').style.opacity = 1;
        }}
        onError={() => console.log('error loading image on first page')}
      />
      <button className='goButton' onClick={goToChooseDonor}>Choose Donor</button>
    </div>
  );
};

export default FirstPage;