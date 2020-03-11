import React from 'react';

const FirstPage = ({ goToChooseDonor }) => {
  return (
    <div className='firstPage'>
      <button className='goButton' onClick={goToChooseDonor}>Choose Donor</button>
    </div>
  );
};

export default FirstPage;