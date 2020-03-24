import React, { useEffect } from 'react';
import Tutoral from '../components/Tutorial1.jsx';
const FirstPage = ({ goToChooseDonor }) => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  });
  let winH = dimensions.height,
    winW = dimensions.width;
  if (winW / winH > 10292 / 6350) {
    winW = winH * 10292 / 6350;
  } else {
    winH = winW / 10292 * 6350;
  }
  let top = (105 / 626.856 * winH) + 0.05 * dimensions.height;
  let height = (305 / 626.856 * winH);
  let width = (565 / 914.39 * 0.9 * winW);
  let buttonHeight = (height * 0.3);
  let buttonVerticalMargin = (0.03 * height);
  let buttonFontSize = (0.18 * height);
   
  return (
    <div id='firstPage' className='firstPageContainer'>
      <Tutoral
      
     Ttext = "Welcome to How to Ask. You have finally arrived at the main part of major gifting. It is time to set up an appointment with your donor and inspire them to participate in this organization with their gift."
     
  
      />
      <img
        className='firstPage'
        src='./assets/LogoMenu.png'
        onLoad={() => {
          document.getElementById('firstPage').style.opacity = 1;
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