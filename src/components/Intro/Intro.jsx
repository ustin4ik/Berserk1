import React, { useState } from 'react';
import './Intro.css';
// import './script.js';

const letters = ['b', 'e', 'r', 's', 'e', 'r', 'k'];

function Intro({ onClick, isClicked }) {
  const [lettersClass, setLettersClass] = useState('letter');

  const onMouseOver111 = function() {
    setLettersClass('kik');
  };

  const onMouseOut111 = function() {
    setLettersClass('letter');
  };

  

  

  return (
    <div className="berserk_red">
      <div
        className={`content_berserk_red ${isClicked ? 'clicked' : ''}`}
        
       
        style={
          lettersClass === 'kik'
            ? {
                filter: 'brightness(110%) contrast(200%) saturate(200%)',
                transition: '2s'
              }
            : { filter: 'brightness(100%) contrast(100%) saturate(100%)' , transition: '2s' }
        }
      ></div>
      <div className="content">
        <a href="#FirstSection">
          <h1
            className="message"
            onMouseOver={onMouseOver111}
            onMouseOut={onMouseOut111}
            onClick={onClick}
          >
            {letters.map((letter, index) => (
              <span className={lettersClass} key={index}>
                {letter}
              </span>
            ))}
          </h1>
        </a>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
      </div>
    </div>
  );
}

export default Intro;
