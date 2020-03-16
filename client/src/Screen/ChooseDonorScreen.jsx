import React from 'react';

const ChooseDonor = ({ chooseDonor }) => {
  return (
    <div className='chooseDonor'>
      <div className='chooseDonorTitle'>
        <h1>Donor Select</h1>
        <div className='TitleUnderline'></div>
      </div>

      <div className='chooseDonor'>
        <div
          className="person Jennifer"
          onClick={() => chooseDonor('Franco')}
        >
          <button ></button>
          <div
          >Jennifer Walker</div>
        </div>
        <div
          className="person Sharrel"
          onClick={() => chooseDonor('Sharrel')}
        >
          <button ></button>
          <div
          >Sharrel Letkin</div>
        </div>
        <div
          className="person JP"
          onClick={() => chooseDonor('JP')}
        >
          <button ></button>
          <div
          >JP Romero</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDonor;