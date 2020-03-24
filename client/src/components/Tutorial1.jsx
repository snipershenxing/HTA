import React from 'react';



const TutoralScreen = ({ Ttext = "french horn" , pageLeft = 0}) => {
  function next()
  {
    console.log(Ttext)
          pageLeft = pageLeft + 1;
          console.log(pageLeft);
      
    
         console.log(Ttext)

         if(pageLeft == 2)
         {
          Ttext = "migit"
          document.getElementById('cover').style.opacity = 0;
         }
  }
    return (
    <div id = 'cover'>
      <div className='tutorl'>
{/* {() => {pageLeft = pageLeft + 1 ; next; console.log(next) }} */}
      </div>
      <p className='Ttext'>{Ttext}</p>
      <button name='nextButton' className = 'tButton'  onClick={next}> Continue  </button>
    </div>
  )

};

export default TutoralScreen;