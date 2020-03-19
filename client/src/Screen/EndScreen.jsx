import React from 'react';

const End = ({ ending, goToMain }) => {
  var bgImg = new Image();
  bgImg.src = './assets/person.png';
  bgImg.onload = function () {
    document.getElementsByClassName('chooseDonor')[0].style.opacity = 1;
  };

  return (
    <div className="chooseDonor">
      <div
        className={ending.split(' ')[0]}
        onClick={() => {
          document.getElementsByClassName('chooseDonor')[0].style.opacity = 0;
          setTimeout(() => { goToMain(ending.split(' ')[1]); }, 800);
        }}></div>
    </div>
  );
};

export default End;
