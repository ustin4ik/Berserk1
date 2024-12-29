import React from 'react';
import './EleventhSection.css';
import projectImgFon from '../../assets/pictures/eleventh/fon_block_11.png';
import projectImgFon1 from '../../assets/pictures/eleventh/fon_block_11_zapas.png';
import projectVec from '../../assets/pictures/eleventh/Vector 25.png';
import projectImg1 from '../../assets/pictures/eleventh/Group 79.png';
import projectImg2 from '../../assets/pictures/eleventh/Group 80.png';
import projectImg3 from '../../assets/pictures/eleventh/Group 81.png';
import projectImg4 from '../../assets/pictures/eleventh/Group 82.png';
import projectImg5 from '../../assets/pictures/eleventh/Group 83.png';

function EleventhSection() {
 
  return (

    <div className="block_11">
      <div className="header_block_11">

        Enmity

      </div>
      <div className="fon_block_11">

        <img className="branch_block11" src={projectVec} alt=""/>
        <img className="fon_11" src={projectImgFon}/>

        <div className="content_block_11">
          <div className="text_content_block_11">
            
            <p id="p1_block_11_js" >Corkus, whose rage burned his enemies, fell, turning into the shadow of what he hated – terrible and unholy.
            </p>
            
            <p id="p2_block_11_js">Pippin, whose might seemed eternal, was crushed like a toy, the crunching of bones drowned in the screams of hell.
           </p>
           
            <p id="p3_block_11_js">Jiro, whose smile knew no darkness, was torn apart, his laughter forever silenced in the womb of madness.
            </p> 
            
            <p id="p4_block_11_js">Eclipse. The demons. Kazka is desecrated by Femto. Gats, shackled, sees everything fall. Kazka is broken, Gats is driven by hatred. 
            </p> 
            
            <p id="p5_block_11_js">The world of “Berserk" has been plunged into darkness forever. Pain and despair became his essence.
            </p>
            
          </div>
          <div className="branch_content_block_119">
            
            <img className="img_block_2_js" id="img1_block_11" src={projectImg1} alt=""/>
            
            <img className="img_block_2_js" id="img2_block_11" src={projectImg2} alt=""/>
        
            <img className="img_block_2_js" id="img3_block_11" src={projectImg3} alt=""/>
        
            <img className="img_block_2_js" id="img4_block_11" src={projectImg4} alt=""/>
        
            <img className="img_block_2_js" id="img5_block_11" src={projectImg5} alt=""/>

          </div>
        </div>
      </div>
    </div >

  )

}

export default EleventhSection