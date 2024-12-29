import React from 'react';
import './TenthSection.css';
import projectImgFon from '../../assets/pictures/tenth/fon_block_10.png';
import projectVec from '../../assets/pictures/tenth/Vector 22.png';
import projectImg1 from '../../assets/pictures/tenth/Group 84.png';
import projectImg2 from '../../assets/pictures/tenth/Group 86.png';
import projectImg3 from '../../assets/pictures/tenth/Group 87.png';
import projectImg4 from '../../assets/pictures/tenth/Group 88.png';
import projectImg5 from '../../assets/pictures/tenth/Group 89.png';
import projectImg6 from '../../assets/pictures/tenth/Group 90.png';
import projectImg7 from '../../assets/pictures/tenth/Group 91.png';

function TenthSection() {
 
  return (

    <div className="block_10">
      <div className="header_block_10">

        Another entity

      </div>

      <div className="fon_block_10">

        <img className="branch_block10" src={projectVec} alt=""/>
        <img className="fon_10" src={projectImgFon}/>

        <div className="content_block_10">

          <div className="text_content_block_10">
            
            <p id="p1_block_10_js" >When Griffith's dream collapsed, he was deeply disappointed. He understood all his helplessness and hopelessness of the situation. He wished for the bottom - death.
            </p>

            <p id="p2_block_10_js">Griffith was too broken to think for others, so he accepts the Hands of God's deal and gives them his soul. 
            </p>
            
            <p id="p3_block_10_js">But help came from unexpected places. The essence that was imprisoned in Griffith's amulet took shape in the form of four horsemen of evil: Void, Conrad, Ubik, Slan.
            </p> 
            
                      
            <p id="p4_block_10_js">This is how Femto appeared.
            </p>
          </div>
          
          <div className="branch_content_block_10">
            
            <img className="img_block_2_js" id="img1_block_10" src={projectImg1} alt=""/>
        
            <img className="img_block_2_js" id="img2_block_10" src={projectImg2} alt=""/>
        
            <img className="img_block_2_js" id="img3_block_10" src={projectImg3} alt=""/>
        
            <img className="img_block_2_js" id="img4_block_10" src={projectImg4} alt=""/>
        
            <img className="img_block_2_js" id="img5_block_10" src={projectImg5} alt=""/>
        
            <img className="img_block_2_js" id="img6_block_10" src={projectImg6} alt=""/>
        
            <img className="img_block_2_js" id="img7_block_10" src={projectImg7} alt=""/>
        
                    
          </div>
        </div>
      </div>  
    </div>

  )

}

export default TenthSection