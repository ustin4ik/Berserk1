import React from 'react';
import './EighthSection.css';

import projectVec from '../../assets/pictures/eighth/Vector 16.png';
import projectImgFonGats from '../../assets/pictures/eighth/fon_Gats.png';
import projectImgFonGriffith from '../../assets/pictures/eighth/fon_Griffith.png';
import projectImg1 from '../../assets/pictures/eighth/Group 63.png';
import projectImg2 from '../../assets/pictures/eighth/Group 64.png';
import projectImg3 from '../../assets/pictures/eighth/Group 65.png';
import projectImg4 from '../../assets/pictures/eighth/Group 66-1.png';

function EighthSection() {
 
  return (

    <div className="block_8">
      <div className="header_block_8">

        The fatal duel 

      </div>

      <div className="fon_block_8">
        <img className="branch_block8" src={projectVec} alt=""/>
        <img className="fon_8_1" src={projectImgFonGriffith}/>
        <img className="fon_8_2" src={projectImgFonGats}/>

        <div className="content_block_8">

          <div className="text_content_block_8">

            <p id="p1_block_8_js" >
             But the two brothers broke up. The reason was Griffith's<br/> indomitable ambition to fulfill his dreams. Gats did not<br/> share his beliefs, believing that he had the right to<br/> freedom, and decided to leave the team, but Griffith would<br/> not let it go...
          </p>

          <p id="p2_block_8_js">
            But this time, Griffith can't handle his emotions, because the<br/> only being in the world he could rely on betrayed him. Gats<br/> wins, at parting, he says like:
          </p>

          <p id="p3_block_8_js">
            - “It's okay, it's like you stumbled, it doesn't mean<br/> anything, because your goal is much higher than<br/> that, isn't it? I'm sure you'll get over it, you'll get <br/> and move on soon.”
          </p>

          <p id="p4_block_8_js">
            Griffith was morally destroyed...
          </p>

          <p id="p5_block_8_js">
            Griffith, realizing that this is the early end of a true<br/> friendship, challenges Gats to a duel. Again. How<br/> symbolic...
          </p>

          <p id="p6_block_8_js">
            - “I said once that you were mine. With this<br/> sword, I defeated you. Your sword and your life<br/> belong to me. If you want to leave, you'll have to<br/> win your freedom-like that time!”
          </p>

          <p id="p7_block_8_js">
            Were they friends? Sure. Would you give<br/> your life for each other? Definitely. And that<br/> is why this battle could not be avoided.
          </p>

          </div>

          <div className="branch_content_block_7">
            <img className="img_block_2_js" id="img1_block_8" src={projectImg1} alt=""/>
            <img className="img_block_2_js" id="img2_block_8" src={projectImg2} alt=""/>
            <img className="img_block_2_js" id="img3_block_8" src={projectImg3} alt=""/>
            <img className="img_block_2_js" id="img4_block_8" src={projectImg4} alt=""/>
          </div>

        </div>
              
      </div>

    </div>

  )

}

export default EighthSection