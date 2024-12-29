import React, { useState } from 'react';
import Intro from './components/Intro/Intro';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import EighthSection from './components/EighthSection/EighthSection';
import NinthSection from './components/NinthSection/NinthSection';
import TenthSection from './components/TenthSection/TenthSection';
import EleventhSection from './components/EleventhSection/EleventhSection';
import TwelfthSection from './components/TwelfthSection/TwelfthSection';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <div>
      <Intro onClick={handleClick} isClicked={isClicked} />

      <div id="main" className={`main_off ${isClicked ? 'main' : ''}`}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
        <TenthSection />
        <EleventhSection />
        <TwelfthSection />
      </div>
    </div>
  );
}

export default App;
