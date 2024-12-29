import React from 'react';
import './SecondSection.css';
import projectImgFon from '../../assets/pictures/second/fon_block_2.png';
import projectImg1 from '../../assets/pictures/second/Group 59.png';
import projectImg2 from '../../assets/pictures/second/Group 60.png';
import projectImg3 from '../../assets/pictures/second/Group 61.png';
import projectImg4 from '../../assets/pictures/second/Group 62.png';
import projectImgS from '../../assets/pictures/second/Group 14.png';
import projectVec from '../../assets/pictures/second/Vector.png';



function SecondSection() {
 
  return (
    <div className="block_2">
      <div className="header_block_2">
        Gats' Childhood
      </div>
      <img className="branch_block2" src={projectVec}  alt=""/>

      <div className="fon_block_2">
        <img className="fon_2" src={projectImgFon} />
        <img className="img_label" src={projectImgS} /> 

        <div className="content_block_2">

          <div className="text_content_block_2">

            <p>Hearing the screams and shuddering in horror, Gats was born in the darkness.<br/>
            The boy grew up among ruthless mercenaries.</p>

            <p>His childhood turned into the birth of hatred for fate, which, like the blade of a<br/>
            sword, is ready to tear him apart.</p>

            <p>After the death of his mother, Gambino, the leader of the group, began to take<br/>
            care of him. Although it was Gambino who taught Gats how to fight with<br/>
            swords, their relationship is hardly cordial.</p>
                            
            <p>The young Gats found out about Gambino's intentions to sell him. At the time of the threat
            and attack, Gats was forced to defend himself.<br/>
            In a fit of rage, when Gambino attacked him, Gats inadvertently impaled him with a sword,
            killing his<br/>
            adoptive father. After that, he ran away.</p>

            <p>No one knew what would happen to the little boy, but one thing was clear - he was<br/>
            destined to suffer in order to find himself in this endless cycle of violence, where
            pain<br/>
            and suffering would become his only teachers, because his journey was just<br/>
            beginning... </p>
          </div>

          <div className="branch_content_block_2">
            <img className="img_block_2_js" id="img1_block_2" src={projectImg1} alt=""/>
            <img className="img_block_2_js" id="img2_block_2" src={projectImg2} alt=""/>
            <img className="img_block_2_js" id="img3_block_2" src={projectImg3} alt=""/>
            <img className="img_block_2_js" id="img4_block_2" src={projectImg4} alt=""/>
          </div>

        </div>

      </div>

    </div>

  )

}

export default SecondSection