import React from 'react';


function next()
{
  alert("death to my tiny wener")
  pageLeft = pageLeft + 1;
  console.log(pageLeft);
}
const TutoralScreen = ({ text , pageLeft = 0}) => {


  return (
    <div id = 'cover'>
      <div className='tutorl'>
{/* {() => {pageLeft = pageLeft + 1 ; next; console.log(next) }} */}
      </div>
      <p className='Ttext'>{text}</p>
      <button name='nextButton' className = 'tButton'  onClick={next}> Continue  </button>
    </div>
  )

};

export default TutoralScreen;