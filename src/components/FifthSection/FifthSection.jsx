import React from 'react';
import './FifthSection.css';

import projectVec from '../../assets/pictures/fifth/Vector 18.png';
import projectImgFonGats from '../../assets/pictures/fifth/fon_Gats.png';
import projectImgFonGriffith from '../../assets/pictures/fifth/fon_Griffith.png';

function FifthSection() {
 
  return (

    <div className="block_5">

      <div className="header_block_5">

        Two ways 

      </div>

      

      <div className="fon_block_5">
        <img className="branch_block5" src={projectVec} alt=""/>
        <img className="fon_5_1" src={projectImgFonGats}/>
        <img className="fon_5_2" src={projectImgFonGriffith}/>

        <div className="content_block_5">

          <div className="text_content_block_5">

            <p id="p1_block_5_js" >
             - “I look at them from here, and it seems to me that I see how all their little dreams and tiny hopes flicker like fiery stones in every torch and fire, and so that all these weak lights do not go out, they throw them into the strongest flames. Into the fire that Griffith lit. And yet... my fire... is not there. Perhaps I just stopped warming myself by their fire and will soon move on.”
          </p>

          <p id="p2_block_5_js">
            - “It seems to me that a true friend never relies on someone else’s dream. A person who could become my true friend should have a reason to live without my help. Then he will defend his dream with all his heart and with all his soul. He, not hesitantly, he will fight for it, even with me. For me, a true friend is the one who will stand on this level with me.”
          </p>

          </div>

        </div>



      </div>

    </div>

  )

}

export default FifthSection