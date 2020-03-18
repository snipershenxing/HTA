import React from 'react';

const FirstPage = ({ goToChooseDonor }) => {
  let winH = window.innerHeight,
    winW = window.innerWidth;
  if (winW / winH > 10292 / 6350) {
    winW = winH * 10292 / 6350;
  } else {
    winH = winW / 10292 * 6350;
  }
  let top = (105 / 626.856 * winH) + 0.05 * window.innerHeight;
  let height = (305 / 626.856 * winH);
  let width = (565 / 914.39 * 0.9 * winW);
  let buttonHeight = (height * 0.3);
  let buttonVerticalMargin = (0.03 * height);
  let buttonFontSize = (0.18 * height);

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
      <div className='buttonContainer_firstPage' style={{ top: `${top}px`, height: `${height}px`, width: `${width}px` }}>
        <button
          style={{ height: `${buttonHeight}px`, lineHeight: `${buttonVerticalMargin}px`, margin: `${buttonVerticalMargin}px 0`, fontSize: `${buttonFontSize}px` }}
          className='goButton'
          onClick={() => {
            document.getElementById('firstPage').style.opacity = 0;
            setTimeout(goToChooseDonor, 800);
          }}>
          Start
          </button>
        <button
          style={{ height: `${buttonHeight}px`, lineHeight: `${buttonVerticalMargin}px`, margin: `${buttonVerticalMargin}px 0`, fontSize: `${buttonFontSize}px` }}
          className='goButton'
          onClick={() => { }}>
          Quit
          </button>
        <button
          style={{ height: `${buttonHeight}px`, lineHeight: `${buttonVerticalMargin}px`, margin: `${buttonVerticalMargin}px 0`, fontSize: `${buttonFontSize}px` }}
          className='goButton'
          onClick={() => { }}>
          Load
          </button>
      </div>
    </div>
  );
};

export default FirstPage;