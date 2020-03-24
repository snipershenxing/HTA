import React from 'react';



const TutoralScreen = ({ Ttext, Ttext2, pageLeft = 0}) => {
  function next()
  {
    console.log(Ttext)
          pageLeft = pageLeft + 1;
          console.log(pageLeft);
          Ttext = "migit"
    
         console.log(Ttext)
         document.getElementById('t').style.opacity = 0;
         document.getElementById('te').style.opacity = 1;
         if(pageLeft == 2)
         {
          
          document.getElementById('cover').style.opacity = 0;
         }        
  }
  function skip()
  {
    document.getElementById('cover').style.opacity = 0;
  }
    return (
      
    <div id = 'cover'>
      <div className='tutorl'>
{/* {() => {pageLeft = pageLeft + 1 ; next; console.log(next) }} */}
      </div>
      <p id = 't' className='Ttext'>{Ttext}</p>
    <p id = 'te' className='Ttext' style={{opacity: 0}}>{Ttext2}</p>
      <button name='nextButton' className = 'tButton'  onClick={next}> Continue  </button>
      <button name='skip' className = 'tSkip'  onClick={skip}> skip </button>
    </div>
  )

};

export default TutoralScreen;