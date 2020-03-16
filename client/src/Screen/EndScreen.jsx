import React from 'react';

const End = ({ ending, goToMain }) => {
  setTimeout(() => { document.getElementsByClassName(ending.split(' ')[0])[0].style.opacity = 1 }, 1);
  return (
    <div className="chooseDonor">
      <div
        className={ending.split(' ')[0]}
        onClick={() => {
          goToMain(ending.split(' ')[1]);
        }}></div>
    </div>
  );
};

export default End;
