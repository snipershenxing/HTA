import React from 'react';

const ChooseDonor = ({ chooseDonor }) => {
  return (
    <div className='chooseDonor'>
      <div className="person"
        onClick={() => chooseDonor('Franco')}
      >Jennifer Walker</div>
      <div className="person"
        onClick={() => chooseDonor('Sharrel')}
      >Sharrel Letkin</div>
      <div className="person"
        onClick={() => chooseDonor('')}
      >JP Romero</div>
    </div>
  );
};

export default ChooseDonor;