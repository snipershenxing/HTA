import React from 'react';
import BackButton from '../components/BackButton.jsx';


const ChooseDonor = ({ chooseDonor, navigateBack }) => {
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
      <BackButton
        navigateBack={navigateBack}
      />
    </div>
  );
};

export default ChooseDonor;