import React from 'react';
import './NinthSection.css';
import projectImgFon from '../../assets/pictures/ninth/fon_block_9.png';
import projectImgGriffithRight from '../../assets/pictures/ninth/GriffithRight.png';
import projectVec from '../../assets/pictures/ninth/Vector 22.png';
import projectImg1 from '../../assets/pictures/ninth/Group 77.png';
import projectImg2 from '../../assets/pictures/ninth/Group 78.png';
import projectImg3 from '../../assets/pictures/ninth/Group 79.png';
import projectImg4 from '../../assets/pictures/ninth/Group 80.png';
import projectImg5 from '../../assets/pictures/ninth/Group 81.png';
import projectImg6 from '../../assets/pictures/ninth/Group 82.png';
import projectImg7 from '../../assets/pictures/ninth/Group 83.png';

function NinthSection() {
 
  return (

    <div className="block_9">
      <div className="header_block_9">

        Disappointment

      </div>

      <div className="fon_block_9">

        <img className="branch_block9" src={projectVec} alt=""/>
        <img className="fon_9" src={projectImgFon}/>
        <img className="img_GriffithRight" src={projectImgGriffithRight}/>

        <div className="content_block_9">

          <div className="text_content_block_9">

            <p id="p1_block_9_js" >In the hour when the blade of betrayal pierced the heart of ambition, the Falcon of White Steel fell.
            </p>
        
            <p id="p2_block_9_js">At first, there was a daze, a mute question in icy eyes. Then — the fury of the volcano, withering resentment.
               <span className='adc'>"How dare this worm betray me?"</span>
                - screamed the wounded ego. And then — emptiness, ringing, cold, bottomless. The dream lost its meaning, the light went out.
            </p>
        
            <p id="p3_block_9_js">But the ambitions did not fade, they only turned into a blind fire that devours everything. Griffith rushed to the last reasonable attempt to make his dream a reality - to become a prince of the kingdom. This could only be done through Princess Charlotte's bed. Proving his strength, his heart hardened. Through the armor of rage, he was tormented by the aching pain of loss, like an amputation.
            </p> 

            <p id="p4_block_9_js">Griffith was captured and severely punished. He was tortured and his body was mocked until it dried up. And so, defeated, he was saved by the one who betrayed him. In the arms of a former colleague, carried through the fire, he was naked in front of himself. Shame, confusion, a spark of surprise, but most importantly — a surge of despair.
            </p> 

            <p id="p5_block_9_js">His dream was shattered...
            </p>

          </div>

          <div className="branch_content_block_9">
            <img className="img_block_2_js" id="img1_block_9" src={projectImg1} alt=""/>

            <img className="img_block_2_js" id="img2_block_9" src={projectImg2} alt=""/>

            <img className="img_block_2_js" id="img3_block_9" src={projectImg3} alt=""/>

            <img className="img_block_2_js" id="img4_block_9" src={projectImg4} alt=""/>

            <img className="img_block_2_js" id="img5_block_9" src={projectImg5} alt=""/>

            <img className="img_block_2_js" id="img6_block_9" src={projectImg6} alt=""/>

            <img className="img_block_2_js" id="img7_block_9" src={projectImg7} alt=""/>

            
          </div>
        </div>

      </div>
    </div>

  )

}

export default NinthSection