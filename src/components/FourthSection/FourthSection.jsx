import React from 'react';
import './FourthSection.css';

import projectImgFon from '../../assets/pictures/fourth/fon_block_4.png';
import projectVec from '../../assets/pictures/fourth/Vector 8.png';
import projectImg1 from '../../assets/pictures/fourth/Group 63.png';
import projectImg2 from '../../assets/pictures/fourth/Group 64.png';
import projectImg3 from '../../assets/pictures/fourth/Group 65.png';
import projectImg4 from '../../assets/pictures/fourth/Group 66.png';
import projectImgS from '../../assets/pictures/second/Group 14.png';

function FourthSection() {

  return (
  
  <div className="block_4">

    <div className="header_block_4">
      
      Desperate Battles

    </div>
    
    <img className="branch_block4" src={projectVec} alt=""/>

    <div className="fon_block_4">

      <img className="fon_4" src={projectImgFon}/>
      

       <div className="content_block_4">
        
        <div className="text_content_block_4">

          <p id="p1_block_4_js" >
            Battle with Zodd.<br/>
            The battle with the demonic Zodd is not just a battle, but a real meeting with hell itself. The powerful enemy, surrounded by an aura of terror, unleashes blows that drive Guts to the brink of madness. The battle becomes an internal hell, where every moment could be the last. But when his sword finally pierces the demonic flesh, he gains undeniable confidence.
          </p>

          <p id="p2_block_4_js">
            Battle with Adon Koborlevitz.<br/>
            In a clash with Adon Koborlevitz, Guts shows all his mesmerizing power. In the chaos of battle, where everything around him is burning and destroyed, he clutches his sword, and determination becomes his only compass. Underestimating the enemy turns out to be a fatal mistake for Adon, and Guts, having pierced him, leaves not only blood on the blade, but also hope for redemption.
          </p>

          <p id="p3_block_4_js">
            The battle in the forest. 
            Gats, alone against the army, was a storm of steel. He mowed down enemies, Kazka saw hell and his indestructible will.The mercenaries rushed at him like ants, but were met with an impenetrable wall of steel and hatred. The silence after the battle is only the breathing of Gats and the cawing of ravens. He won, wounded but unconquered.
          </p> 

          <p id="p4_block_4_js">The Battle with Boskon.
            The Battle with Boskon is a real meat grinder; blood and guts everywhere. Guts, as if possessed, defeats his enemies, but in a series of victories he feels the bitterness of losses. Every enemy killed is a burden that weighs on the soul. The support of comrades is like a saving island, but every step forward again reminds us of the high cost of cruelty
          </p> 

        </div>
        
        <div className="branch_content_block_4">

          <img className="img_block_2_js" id="img1_block_4" src={projectImg1} alt=""/>
          <img className="img_block_2_js" id="img2_block_4" src={projectImg2} alt=""/>
          <img className="img_block_2_js" id="img3_block_4" src={projectImg3} alt=""/>
          <img className="img_block_2_js" id="img4_block_4" src={projectImg4} alt=""/>

        </div>

      </div>

    </div> 

  </div>

  )

}

export default FourthSection