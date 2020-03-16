import React from 'react';

const BackButton = ({ navigateBack }) => {
  return (
    <button
      className='backButton'
      onClick={navigateBack}
    ></button>
  );
};


export default BackButton;