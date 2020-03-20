import React from 'react';

const TutoralScreen = ({ text, next }) => {
  return (
    <div id = 'cover'>
      <div className='tutorl'>

      </div>
      <p className='Ttext'>{text}</p>
      <button name='nextButton' style = {{zIndex: 5 , position: "absolute"}} onClick={() => {document.getElementById('cover').style.opacity = 0 ; console.log('hiilow')}}> Continue  </button>
    </div>
  )

};

export default TutoralScreen;