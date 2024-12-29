import React from 'react';
import './ThirdSection.css';

import projectImgFon from '../../assets/pictures/third/fon_block_3.png';
import projectImgGatsRight from '../../assets/pictures/third/GatsRight.png';
import projectVec1 from '../../assets/pictures/third/Vector 9.png';
import projectVec2 from '../../assets/pictures/third/Vector 10.png';
import projectImg1 from '../../assets/pictures/third/Group 71.png';
import projectImg2 from '../../assets/pictures/third/Group 70.png';
import projectImg3 from '../../assets/pictures/third/Group 65.png';
import projectImg4 from '../../assets/pictures/third/Group 64.png';
import projectImg5 from '../../assets/pictures/third/Group 66.png';
import projectImg6 from '../../assets/pictures/third/Group 63.png';
import projectImg7 from '../../assets/pictures/third/Group 68.png';
import projectImg8 from '../../assets/pictures/third/Group 69.png';
import projectImg9 from '../../assets/pictures/third/Group 67.png';

function ThirdSection() {
 
  return (

    <div className="block_3">

      <div className="header_block_3">

        Falcon squad

      </div>

      <img className="branch_block3_1" src={projectVec1} alt=""/>
      <img className="branch_block3_2" src={projectVec2} alt=""/>

      <div className="fon_block_3">

        <img className="fon_3" src={projectImgFon}/>
        <img className="img_GatsRight" src={projectImgGatsRight}/>

        <div className="content_block_3">
          
          <div className="text_content_block_3">

            <p id="p1_block_2_js" >After the murder of Gambino, Gats wandered for a long time in search of himself, like-minded people, his goal,<br/> freedom. That's how he became a mercenary.</p>

            <p id="p2_block_2_js">After killing one of the mighty warriors of that time, Bazuso, Gats notices the Falcon squad, the main representatives<br/> of which are: Griffith, Kazka, Judo, Rickert, Pippin, Korkus.</p>

            <p id="p3_block_2_js">Griffith, an experienced manipulator, saw potential in Gats, perhaps a future friend, and he has a plan. Griffith, like a shadowy ghost of the night, challenged Gats to a duel.</p> 
            <p id="p4_block_2_js">But, having betrayed his honor, he uses a dirty trick to win. At this moment, Gats's will and freedom are broken, and he becomes a puppet of Griffith's ambitions, who, like a ruling shadow, triumphs over the fall of his enemy.</p> 
            <p id="p5_block_2_js">He agreed, hoping that this would give him the opportunity to find a new place in life and, perhaps, become a part of something bigger.</p>

            <p id="p6_block_2_js">Some time later, the Gats are still accepted into their squad, though not without malicious glances in the back.
            However, despite the insulting loss, Gats's internal conflicts, his desire for freedom and desire not to obey, always remained with him...</p> 

            </div>

            <div className="branch_content_block_3">

              <img className="img_block_2_js" id="img5_block_2" src={projectImg1} alt=""/>
              <img className="img_block_2_js" id="img6_block_2" src={projectImg2} alt=""/>
              <img className="img_block_2_js" id="img7_block_2" src={projectImg3} alt=""/>
              <img className="img_block_2_js" id="img8_block_2" src={projectImg4} alt=""/>
              <img className="img_block_2_js" id="img9_block_2" src={projectImg5} alt=""/>
              <img className="img_block_2_js" id="img10_block_2" src={projectImg6} alt=""/>
              <img className="img_block_2_js" id="img11_block_2" src={projectImg7} alt=""/>
              <img className="img_block_2_js" id="img12_block_2" src={projectImg8} alt=""/>
              <img className="img_block_2_js" id="img13_block_2" src={projectImg9} alt=""/>

            </div>

         </div>

        </div>

      </div>

  )

}

export default ThirdSection