import React from 'react';
import './SixthSection.css';

import projectImgFon from '../../assets/pictures/sixth/fon_block_6.png';
import projectVec from '../../assets/pictures/sixth/Vector 14.png';
import projectImg1 from '../../assets/pictures/sixth/Group 67.png';
import projectImg2 from '../../assets/pictures/sixth/Group 68.png';
import projectImg3 from '../../assets/pictures/sixth/Group 69.png';
import projectImg4 from '../../assets/pictures/sixth/Group 70.png';


function SixthSection() {

  return (
  
  <div className="block_6">

    <div className="header_block_3">
      
      Two Brothers

    </div>

    <div className="fon_block_6">

      <img className="branch_block6" src={projectVec} alt=""/>

      <img className="fon_6" src={projectImgFon}/>

      <div className="content_block_6">
        
        <div className="text_content_block_6">
          
          <p id="p1_block_6_js" >
            The friendship between Gats and Griffith is not just a union of two people, it is an unbreakable bond that is based on stormy passions, great sacrifices and tears. They are always there in the most difficult moments, supporting each other like two guards standing on the same protective wall.

          </p>

          <p id="p2_block_6_js">
            It was in friendship with each other that they found themselves, understood their true desires and nature. They have become closer than brothers, one whole, where each complements the other, making them stronger, steadier, invincible. Their friendship became a light in the darkness, their support in the turbulent whirlpools of life, their inspiration for new achievements and victories.
          </p>

          <p id="p3_block_6_js">
            Their friendship became their mainstay in a world of cruelty and ruthlessness, a fire that helped them survive the darkest hours. They found in each other not just comrades, but irreplaceable companions in life, ready to do the most desperate things for each other.
          </p> 

          <p id="p4_block_6_js">
            But their friendship failed the test only once - when the ambitions of these boys crossed.
          </p> 

        </div>

        <div className="branch_content_block_6">

          <img className="img_block_2_js" id="img1_block_6" src={projectImg1} alt=""/>
          
          <img className="img_block_2_js" id="img2_block_6" src={projectImg2} alt=""/>
          
          <img className="img_block_2_js" id="img3_block_6" src={projectImg3} alt=""/>
          
          <img className="img_block_2_js" id="img4_block_6" src={projectImg4} alt=""/>
          
        </div>

      </div>
      
    </div>

  </div>

  )

}

export default SixthSection